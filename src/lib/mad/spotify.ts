import { MAD_ARTIST_IDS, PLACEHOLDER_RELEASES, type Release } from "./releases";

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
    console.error("[mad/spotify] token request failed", res.status);
    return null;
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

async function getArtistAlbums(artistId: string, token: string): Promise<SpotifyAlbum[]> {
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=50`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: DAY, tags: ["mad-releases"] },
  });
  if (!res.ok) {
    console.error("[mad/spotify] albums request failed", artistId, res.status);
    return [];
  }
  const data = (await res.json()) as { items: SpotifyAlbum[] };
  return data.items ?? [];
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

    const albums = (await Promise.all(MAD_ARTIST_IDS.map((id) => getArtistAlbums(id, token)))).flat();
    const unique = [...new Map(albums.map((a) => [a.id, a])).values()];
    const releases = unique.map(toRelease).sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    return releases.length ? releases : PLACEHOLDER_RELEASES;
  } catch (err) {
    console.error("[mad/spotify] failed to load releases", err);
    return PLACEHOLDER_RELEASES;
  }
}
