// Mad Cactus catalog. Each tile in the home grid is one release cover.
// Releases come from Spotify (see ./spotify.ts) for every artist listed in
// MAD_ARTIST_IDS; PLACEHOLDER_RELEASES keep the grid filled when Spotify
// credentials are missing or the API call fails.

export type Release = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string; // "YYYY", "YYYY-MM" or "YYYY-MM-DD" (Spotify precision)
  cover?: string; // image URL; empty tile when missing
  url?: string; // Spotify link
};

// Spotify artist IDs: the part after /artist/ in an open.spotify.com link.
export const MAD_ARTIST_IDS = [
  "2VQkqhOnfK4FDNoIJklQ8e",
];

export const PLACEHOLDER_RELEASES: Release[] = Array.from({ length: 16 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  title: `Release ${i + 1}`,
  artist: "Mad Cactus",
  releaseDate: "",
}));
