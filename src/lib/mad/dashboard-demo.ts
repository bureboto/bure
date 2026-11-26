// DEMO DATA for the artist dashboard preview. Wallet, listener and most
// follower numbers will come from LabelWorx statements and other sources
// once those are wired up; until then these placeholders fill the UI.

export type ListenerRange = "all" | "week" | "month" | "year";

export type ListenerStats = {
  period: string;
  total: number;
  platforms: { name: string; value: number }[];
};

export const DEMO_WALLET_USD = 7_777_777;

export const DEMO_FOLLOWS = { youtube: 77_777, instagram: 77_777, facebook: 77_777 };

export const DEMO_LISTENERS: Record<ListenerRange, ListenerStats> = {
  all: {
    period: "2018-2026",
    total: 7_777_777,
    platforms: [
      { name: "Spotify", value: 777_777 },
      { name: "Youtube", value: 77_777 },
      { name: "Apple music", value: 77_777 },
      { name: "Others", value: 77_777 },
    ],
  },
  week: {
    period: "Last 7 days",
    total: 17_777,
    platforms: [
      { name: "Spotify", value: 7_777 },
      { name: "Youtube", value: 777 },
      { name: "Apple music", value: 777 },
      { name: "Others", value: 777 },
    ],
  },
  month: {
    period: "Last 30 days",
    total: 77_777,
    platforms: [
      { name: "Spotify", value: 47_777 },
      { name: "Youtube", value: 7_777 },
      { name: "Apple music", value: 7_777 },
      { name: "Others", value: 7_777 },
    ],
  },
  year: {
    period: "2026",
    total: 777_777,
    platforms: [
      { name: "Spotify", value: 477_777 },
      { name: "Youtube", value: 77_777 },
      { name: "Apple music", value: 77_777 },
      { name: "Others", value: 77_777 },
    ],
  },
};
