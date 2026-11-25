// Mad Cactus catalog. Each tile in the home grid is one release cover.
// Placeholder entries for now — the plan is to fill these from the Spotify
// Web API (title, artists, release date, cover art) once credentials exist.

export type Release = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string; // ISO date, e.g. "2026-03-14"
  cover?: string; // image URL; empty tile when missing
  url?: string; // Spotify / Bandcamp link
};

export const RELEASES: Release[] = Array.from({ length: 16 }, (_, i) => ({
  id: `mad-${String(i + 1).padStart(3, "0")}`,
  title: `Release ${i + 1}`,
  artist: "Mad Cactus",
  releaseDate: "",
}));
