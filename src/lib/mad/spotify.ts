import { unstable_cache } from "next/cache";
import { cache } from "react";
import {
  MAD_EXCLUDED_ARTISTS,
  MAD_HIDDEN_ARTIST_IDS,
  MAD_LABEL,
  MAD_RELEASE_IDS,
  MAD_RELEASE_VIDEOS,
  PLACEHOLDER_RELEASES,
  type Artist,
  type Release,
} from "./releases";

// Spotify Web API, Client Credentials flow (no user login needed).
// Requires SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in the environment.
// Note: the public API exposes covers, dates and links, but not play counts.

const DAY = 60 * 60 * 24;

type SpotifyAlbum = {
  id: string;
  name: string;
  release_date: string;
  album_type: string;
  artists: { id: string; name: string }[];
  images: { url: string; width: number | null }[];
  external_urls: { spotify: string };
  label?: string; // only on the full album object; withheld for dev-mode apps
  copyrights?: { text: string; type: string }[];
};

type SpotifyArtist = {
  id: string;
  name: string;
  followers?: { total: number }; // may be withheld for development-mode apps
  images: { url: string; width: number | null }[];
  external_urls: { spotify: string };
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
const SEARCH_MAX_PAGES = 50; // up to 500 label releases

// Search by label: returns albums Spotify tags with that label, regardless of artist.
async function searchLabelAlbums(token: string): Promise<SpotifyAlbum[]> {
  const items: SpotifyAlbum[] = [];
  const q = encodeURIComponent(`label:"${MAD_LABEL}"`);
  for (let page = 0; page < SEARCH_MAX_PAGES; page++) {
    const data = await spotifyGet<{ albums: { items: SpotifyAlbum[]; next: string | null } }>(
      `/search?q=${q}&type=album&limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`,
      token,
    );
    // A missing page means a partial catalog: fail so it isn't cached.
    if (!data) throw new Error(`Spotify label search failed at page ${page}`);
    items.push(...(data.albums?.items ?? []).filter(Boolean));
    if (!data.albums?.next) break;
  }
  return items;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// When Spotify rate-limits us with a long Retry-After, stop calling it in
// this process until then: waiting would only stall the build or request
// (Next gives each static page 60s), and every extra call extends the ban.
let spotifyBlockedUntil = 0;
const MAX_WAIT_S = 5;

// GET a Spotify API path, cached for a day. Short retries on 429 (rate limit)
// and transient 5xx errors; gives up fast when Spotify asks for a long pause.
async function spotifyGet<T>(path: string, token: string): Promise<T | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    if (Date.now() < spotifyBlockedUntil) return null;
    const res = await fetch(`https://api.spotify.com/v1${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: DAY, tags: ["mad-releases"] },
    });
    if (res.status === 429 || res.status >= 500) {
      const retryAfter = Number(res.headers.get("retry-after")) || 2 ** attempt;
      if (retryAfter > MAX_WAIT_S) {
        if (Date.now() >= spotifyBlockedUntil) {
          console.error(`[mad/spotify] ${res.status}, Spotify asks to wait ${retryAfter}s; pausing Spotify calls`);
        }
        spotifyBlockedUntil = Date.now() + retryAfter * 1000;
        return null;
      }
      await sleep(retryAfter * 1000);
      continue;
    }
    if (!res.ok) {
      console.error("[mad/spotify] request failed", path, res.status, await res.text());
      return null;
    }
    return (await res.json()) as T;
  }
  console.error("[mad/spotify] request gave up after retries", path);
  return null;
}

const getAlbum = (id: string, token: string) => spotifyGet<SpotifyAlbum>(`/albums/${id}`, token);
const getArtist = (id: string, token: string) => spotifyGet<SpotifyArtist>(`/artists/${id}`, token);

// Run requests a few at a time to stay under Spotify's rate limit.
async function throttled<T>(ids: string[], get: (id: string) => Promise<T | null>, concurrency = 4) {
  const out: (T | null)[] = [];
  for (let i = 0; i < ids.length; i += concurrency) {
    out.push(...(await Promise.all(ids.slice(i, i + concurrency).map(get))));
  }
  return out;
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
    video: MAD_RELEASE_VIDEOS[album.id],
    url: album.external_urls.spotify,
  };
}

// Builds the full Mad Cactus album list: the label search (a handful of
// Spotify calls) plus any releases listed by hand in MAD_RELEASE_IDS. Only
// run via the cached wrapper below. Throws on any failure so a partial
// catalog never gets cached.
async function buildMadAlbums(): Promise<SpotifyAlbum[]> {
  const token = await getAccessToken();
  if (!token) throw new Error("Spotify credentials missing or token request failed");

  const fromSearch = await searchLabelAlbums(token);
  if (!fromSearch.length) throw new Error("Spotify label search returned nothing");
  const byId = new Map(fromSearch.map((a) => [a.id, a]));

  const manualIds = MAD_RELEASE_IDS.filter((id) => !byId.has(id));
  const manual = await throttled(manualIds, (id) => getAlbum(id, token));
  manual.forEach((a, i) => {
    if (!a) throw new Error(`Spotify album ${manualIds[i]} failed`);
    byId.set(a.id, a);
  });

  console.log(`[mad/spotify] catalog: ${fromSearch.length} from label search, ${manual.length} listed by hand`);

  return [...byId.values()]
    .filter((a) => !isExcluded(a))
    .sort((a, b) => b.release_date.localeCompare(a.release_date));
}

// The computed catalog is cached for a day and shared by every page and
// request (home, artists, dashboards), so Spotify is hit about once a day
// rather than on each visit. Bump the key after changing the build logic.
const getCachedMadAlbums = unstable_cache(buildMadAlbums, ["mad-albums-v2"], {
  revalidate: DAY,
  tags: ["mad-releases"],
});

// All Mad Cactus albums, newest first, plus a token for follow-up calls.
// Wrapped in React cache() so one render shares a single lookup.
const getMadAlbums = cache(async (): Promise<{ albums: SpotifyAlbum[]; token: string } | null> => {
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) return null;
  const [albums, token] = await Promise.all([getCachedMadAlbums(), getAccessToken()]);
  if (!token) return null;
  return { albums, token };
});

export async function getMadReleases(): Promise<Release[]> {
  try {
    const catalog = await getMadAlbums();
    if (!catalog) return PLACEHOLDER_RELEASES;
    const releases = catalog.albums.map(toRelease);
    return releases.length ? releases : PLACEHOLDER_RELEASES;
  } catch (err) {
    console.error("[mad/spotify] failed to load releases", err);
    return PLACEHOLDER_RELEASES;
  }
}

// Label roster, derived from the releases: every artist listed first on at
// least one Mad Cactus release (so guest features alone don't count), with
// their Spotify profile picture. Sorted by number of releases they appear on.
export async function getMadArtists(): Promise<Artist[]> {
  try {
    const catalog = await getMadAlbums();
    if (!catalog) return [];
    const { albums, token } = catalog;

    const leads = new Set(albums.map((a) => a.artists[0]?.id).filter(Boolean));
    const counts = new Map<string, number>();
    for (const a of albums) for (const ar of a.artists) counts.set(ar.id, (counts.get(ar.id) ?? 0) + 1);

    const ids = [...leads].filter((id) => {
      if (MAD_HIDDEN_ARTIST_IDS.includes(id)) return false;
      const name = albums.flatMap((a) => a.artists).find((ar) => ar.id === id)?.name ?? "";
      const n = name.trim().toLowerCase();
      return n !== "various artists" && !MAD_EXCLUDED_ARTISTS.includes(n);
    });

    const artists = await throttled(ids, (id) => getArtist(id, token));
    return artists
      .filter((a): a is SpotifyArtist => a !== null)
      .map((a) => ({
        id: a.id,
        name: a.name,
        image: a.images[0]?.url,
        url: a.external_urls.spotify,
        releaseCount: counts.get(a.id) ?? 0,
      }))
      .sort((a, b) => b.releaseCount - a.releaseCount || a.name.localeCompare(b.name));
  } catch (err) {
    console.error("[mad/spotify] failed to load artists", err);
    return [];
  }
}

export type ArtistProfile = {
  id: string;
  name: string;
  image?: string;
  url: string;
  followers?: number; // Spotify followers, when Spotify provides them
  releases: Release[]; // Mad Cactus releases they appear on, newest first
};

// One artist's profile for their dashboard: Spotify name, picture and
// followers, plus every Mad Cactus release they're credited on.
export async function getMadArtistProfile(artistId: string): Promise<ArtistProfile | null> {
  try {
    const catalog = await getMadAlbums();
    if (!catalog) return null;
    const artist = await getArtist(artistId, catalog.token);
    if (!artist) return null;
    return {
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url,
      url: artist.external_urls.spotify,
      followers: artist.followers?.total,
      releases: catalog.albums.filter((a) => a.artists.some((ar) => ar.id === artistId)).map(toRelease),
    };
  } catch (err) {
    console.error("[mad/spotify] failed to load artist profile", artistId, err);
    return null;
  }
}
