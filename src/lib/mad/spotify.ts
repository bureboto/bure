import { MAD_ARTIST_IDS, MAD_LABEL, MAD_RELEASE_IDS, PLACEHOLDER_RELEASES, type Release } from "./releases";

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
  for (let page = 0; page < MAX_PAGES; page++) {
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
async function getAlbum(albumId: string, token: string): Promise<SpotifyAlbum | null> {
  const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: DAY, tags: ["mad-releases"] },
  });
  if (!res.ok) {
    console.error("[mad/spotify] album request failed", albumId, res.status, await res.text());
    return null;
  }
  return (await res.json()) as SpotifyAlbum;
}

// Spotify withholds `label` from apps in development mode, so also match the
// ℗/© lines (e.g. "℗ 2024 Mad Cactus"), plus any IDs listed by hand.
function isMadCactus(album: SpotifyAlbum) {
  if (MAD_RELEASE_IDS.includes(album.id)) return true;
  const texts = [album.label ?? "", ...(album.copyrights ?? []).map((c) => c.text)];
  return texts.some((t) => t.toLowerCase().includes(MAD_LABEL));
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
    const albums = [...fromSearch, ...fromArtists.flat()];
    const searchIds = new Set(fromSearch.map((a) => a.id));
    const ids = [...new Set(albums.map((a) => a.id))];
    const full = await Promise.all(ids.map((id) => getAlbum(id, token)));
    for (const a of full) {
      if (!a) continue;
      const rights = (a.copyrights ?? []).map((c) => c.text).join(" / ") || "(no copyrights)";
      const src = searchIds.has(a.id) ? "search" : "artist";
      console.log(`[mad/spotify] ${a.id} "${a.name}" (${src}) rights=${rights} match=${isMadCactus(a)}`);
    }
    const releases = full
      .filter((a): a is SpotifyAlbum => a !== null && isMadCactus(a))
      .map(toRelease)
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    return releases.length ? releases : PLACEHOLDER_RELEASES;
  } catch (err) {
    console.error("[mad/spotify] failed to load releases", err);
    return PLACEHOLDER_RELEASES;
  }
}
