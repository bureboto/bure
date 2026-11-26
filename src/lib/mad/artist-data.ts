// Per-artist dashboard data that doesn't come from Spotify yet: wallet,
// listeners and social links. Keyed by Spotify artist ID. Artists without an
// entry show the demo numbers from ./dashboard-demo.ts.
//
// Wallet and listeners will come from LabelWorx statements; social follower
// counts from each network's API where one is available.

import type { ListenerRange, ListenerStats } from "./dashboard-demo";

export type SocialNetwork = "spotify" | "youtube" | "instagram" | "facebook" | "soundcloud" | "x";

export type ArtistData = {
  name: string; // fallback when Spotify is unavailable
  walletUsd: number;
  listeners: Record<ListenerRange, ListenerStats>;
  // Only the networks listed here appear under Follows, in this order.
  // `followers` stays undefined until we can read it automatically.
  socials: { network: SocialNetwork; url: string; followers?: number }[];
};

const PLATFORMS = ["Spotify", "Youtube", "Apple music", "Others"];

const emptyStats = (): ListenerStats => ({
  period: "",
  total: 0,
  platforms: PLATFORMS.map((name) => ({ name, value: 0 })),
});

export const NO_LISTENERS: Record<ListenerRange, ListenerStats> = {
  all: emptyStats(),
  week: emptyStats(),
  month: emptyStats(),
  year: emptyStats(),
};

export const MAD_ARTIST_DATA: Record<string, ArtistData> = {
  // Abscot
  "2VQkqhOnfK4FDNoIJklQ8e": {
    name: "Abscot",
    walletUsd: 0,
    listeners: NO_LISTENERS,
    socials: [{ network: "instagram", url: "https://www.instagram.com/abscot_/" }],
  },
};
