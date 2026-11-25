import { MAD_ARTIST_IDS, MAD_EXCLUDED_ARTISTS, MAD_LABEL, MAD_RELEASE_IDS, PLACEHOLDER_RELEASES, type Release } from "./releases";

// Spotify Web API, Client Credentials flow (no user login needed).
// Requires SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in the environment.
// Note: the public API exposes covers, dates and links, but not play counts.

const DAY = 60 * 60 * 24;

type SpotifyAlbum = {
  id: string;
  name: string;
  release_date: string;
  album_type: string;
  artists: { name: string }[];
  images: { url: string; width: number | null }[];
  external_urls: { spotify: string };
  label?: string; // only on the full album object; withheld for dev-mode apps
  copyrights?: { text: string; type: string }[];
};

async function getAccessToken(): Promise<string | null> {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!id || !secret) return null;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) {
    console.error("[mad/spotify] token request failed", res.status, await res.text());
    return null;
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

// Spotify caps page size for apps in development mode, so page through in
// small batches instead of asking for 50 at once.
const PAGE_SIZE = 10;
const MAX_PAGES = 10;
const SEARCH_MAX_PAGES = 50; // up to 500 label releases

async function getArtistAlbums(artistId: string, token: string): Promise<SpotifyAlbum[]> {
  const items: SpotifyAlbum[] = [];
  for (let page = 0; page < MAX_PAGES; page++) {
    const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: DAY, tags: ["mad-releases"] },
    });
    if (!res.ok) {
      console.error("[mad/spotify] albums request failed", artistId, res.status, await res.text());
      break;
    }
    const data = (await res.json()) as { items: SpotifyAlbum[]; next: string | null };
    items.push(...(data.items ?? []));
    if (!data.next) break;
  }
  return items;
}

// Search by label: returns albums Spotify tags with that label, regardless of artist.
async function searchLabelAlbums(token: string): Promise<SpotifyAlbum[]> {
  const items: SpotifyAlbum[] = [];
  const q = encodeURIComponent(`label:"${MAD_LABEL}"`);
  for (let page = 0; page < SEARCH_MAX_PAGES; page++) {
    const url = `https://api.spotify.com/v1/search?q=${q}&type=album&limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: DAY, tags: ["mad-releases"] },
    });
    if (!res.ok) {
      console.error("[mad/spotify] label search failed", res.status, await res.text());
      break;
    }
    const data = (await res.json()) as { albums: { items: SpotifyAlbum[]; next: string | null } };
    items.push(...(data.albums?.items ?? []).filter(Boolean));
    if (!data.albums?.next) break;
  }
  return items;
}

// The artist-albums list omits the label, so fetch each full album to read it.
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Retries on 429 (rate limit), waiting as long as Spotify's Retry-After asks.
async function getAlbum(albumId: string, token: string): Promise<SpotifyAlbum | null> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: DAY, tags: ["mad-releases"] },
    });
    if (res.status === 429) {
      const wait = Math.min(Number(res.headers.get("retry-after")) || 2, 15);
      await sleep(wait * 1000);
      continue;
    }
    if (!res.ok) {
      console.error("[mad/spotify] album request failed", albumId, res.status, await res.text());
      return null;
    }
    return (await res.json()) as SpotifyAlbum;
  }
  console.error("[mad/spotify] album request gave up after retries", albumId);
  return null;
}

// Fetch full albums a few at a time to stay under Spotify's rate limit.
async function getAlbumsThrottled(ids: string[], token: string, concurrency = 4) {
  const out: (SpotifyAlbum | null)[] = [];
  for (let i = 0; i < ids.length; i += concurrency) {
    const batch = await Promise.all(ids.slice(i, i + concurrency).map((id) => getAlbum(id, token)));
    out.push(...batch);
  }
  return out;
}

// Spotify withholds `label` from apps in development mode, so also match the
// ℗/© lines (e.g. "℗ 2024 Mad Cactus"), plus any IDs listed by hand.
function isMadCactus(album: SpotifyAlbum) {
  if (MAD_RELEASE_IDS.includes(album.id)) return true;
  const texts = [album.label ?? "", ...(album.copyrights ?? []).map((c) => c.text)];
  return texts.some((t) => t.toLowerCase().includes(MAD_LABEL));
}

function isExcluded(album: SpotifyAlbum) {
  return album.artists.some((a) => MAD_EXCLUDED_ARTISTS.includes(a.name.trim().toLowerCase()));
}

function toRelease(album: SpotifyAlbum): Release {
  // Spotify lists images largest first; the 640px one is plenty for a grid tile.
  return {
    id: album.id,
    title: album.name,
    artist: album.artists.map((a) => a.name).join(", "),
    releaseDate: album.release_date,
    cover: album.images[0]?.url,
    url: album.external_urls.spotify,
  };
}

export async function getMadReleases(): Promise<Release[]> {
  try {
    const token = await getAccessToken();
    if (!token) return PLACEHOLDER_RELEASES;

    const [fromSearch, ...fromArtists] = await Promise.all([
      searchLabelAlbums(token),
      ...MAD_ARTIST_IDS.map((id) => getArtistAlbums(id, token)),
    ]);

    // Label search results are already tagged Mad Cactus by Spotify: trust them
    // (some carry the artist's name in the copyright line, not the label's).
    const byId = new Map(fromSearch.map((a) => [a.id, a]));

    // Roster albums the search missed: these may be on other labels, so check
    // the copyright text on the full album object.
    const extraIds = [...new Set(fromArtists.flat().map((a) => a.id))].filter((id) => !byId.has(id));
    const extra = await getAlbumsThrottled(extraIds, token);
    for (const a of extra) if (a && isMadCactus(a)) byId.set(a.id, a);

    console.log(
      `[mad/spotify] ${fromSearch.length} from label search, ${extraIds.length} other roster albums checked, ${byId.size} matched before exclusions`,
    );

    const releases = [...byId.values()]
      .filter((a) => !isExcluded(a))
      .map(toRelease)
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    return releases.length ? releases : PLACEHOLDER_RELEASES;
  } catch (err) {
    console.error("[mad/spotify] failed to load releases", err);
    return PLACEHOLDER_RELEASES;
  }
}
