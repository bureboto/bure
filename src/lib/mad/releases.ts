// Mad Cactus catalog. Each tile in the home grid is one release cover.
// Releases come from Spotify (see ./spotify.ts): a search for the Mad Cactus
// label, plus any albums listed by hand in MAD_RELEASE_IDS.
// PLACEHOLDER_RELEASES keep the grid filled when Spotify credentials are
// missing or the API call fails. The artist roster is derived from releases.

export type Release = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string; // "YYYY", "YYYY-MM" or "YYYY-MM-DD" (Spotify precision)
  cover?: string; // image URL; empty tile when missing
  video?: string; // looping video (e.g. the Spotify Canvas) shown instead of the cover
  url?: string; // Spotify link
};

export type Artist = {
  id: string;
  name: string;
  image?: string; // Spotify profile picture
  url: string; // Spotify artist page
  releaseCount: number; // Mad Cactus releases they appear on
};

// Label name searched on Spotify (label:"...") to find the catalog.
export const MAD_LABEL = "mad cactus";

// Artists whose releases come up under the label search but are not on Mad
// Cactus (another label shares the name). Matched by name, case-insensitive.
export const MAD_EXCLUDED_ARTISTS = ["joelene"];

// Spotify artist IDs left off the Artists page (their releases still show).
export const MAD_HIDDEN_ARTIST_IDS = [
  "5zSxx6PnuYW7RFr3yigt4f", // Goblin - X
  "50LOKfAouoQzuQqQWfrjMZ", // Journey 7 (with a space; Journey7 stays)
  "2Ri1n1WMJKVqcB8PXBZORT", // Sersei
];

// Spotify album IDs (from open.spotify.com/album/<id>) of Mad Cactus releases
// that the label search misses. Added to the catalog as-is.
export const MAD_RELEASE_IDS: string[] = [];

// Looping videos to show instead of the cover, keyed by Spotify album ID.
// Spotify's API doesn't expose Canvas videos, so these are uploaded by hand
// (MP4, ideally square or 9:16, a few MB at most).
export const MAD_RELEASE_VIDEOS: Record<string, string> = {};

export const PLACEHOLDER_RELEASES: Release[] = Array.from({ length: 16 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  title: `Release ${i + 1}`,
  artist: "Mad Cactus",
  releaseDate: "",
}));
