// Mad Cactus catalog. Each tile in the home grid is one release cover.
// Releases come from Spotify (see ./spotify.ts): a label search plus the
// albums of every artist in MAD_ARTIST_IDS, filtered to the Mad Cactus label; PLACEHOLDER_RELEASES keep the grid filled when Spotify
// credentials are missing or the API call fails.

export type Release = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string; // "YYYY", "YYYY-MM" or "YYYY-MM-DD" (Spotify precision)
  cover?: string; // image URL; empty tile when missing
  url?: string; // Spotify link
};

// Only releases whose Spotify label or ℗/© text contains this (case-insensitive)
// are shown, since roster artists also release on other labels.
export const MAD_LABEL = "mad cactus";

// Spotify artist IDs: the part after /artist/ in an open.spotify.com link.
// The label search in ./spotify.ts finds most releases on its own; this list
// is a backstop for anything the search misses.
export const MAD_ARTIST_IDS = [
  "2VQkqhOnfK4FDNoIJklQ8e", // Abscot
  "3vPgVN7X6Kul05jylKTSLS", // lickthepaper
  "333xTovyP8Mj9sK4fIUpgu", // dreamvibes
  "0D4Wk6S4YE9fbVSozQ6vq2", // sugar
  "2XZY2dx8EPrdxOXfNj1tfX", // suerte
  "6PrOoECINzfKEUyMRv6fWI", // l3af
];

// Spotify album IDs (from open.spotify.com/album/<id>) that are Mad Cactus
// releases but don't say so in their label/copyright text.
export const MAD_RELEASE_IDS: string[] = [];

export const PLACEHOLDER_RELEASES: Release[] = Array.from({ length: 16 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  title: `Release ${i + 1}`,
  artist: "Mad Cactus",
  releaseDate: "",
}));
