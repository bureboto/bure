import type { Metadata } from "next";
import HomeV2Content from "./content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function HomeV2Preview() {
  return <HomeV2Content />;
}
