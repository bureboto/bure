// Mad Cactus artists — mad.bure.art/artists (rewritten to /mad/artists by src/proxy.ts).
// Roster and profile pictures come from Spotify, derived from the label's releases.
import type { Metadata } from "next";
import ArtistGrid from "@/components/mad/ArtistGrid";
import MadShell from "@/components/mad/MadShell";
import { getMadArtists } from "@/lib/mad/spotify";

export const metadata: Metadata = { title: "Artists — Mad Cactus" };

// Re-fetch from Spotify at most once a day (ISR).
export const revalidate = 86400;

export default async function MadArtists() {
  const artists = await getMadArtists();

  return (
    <MadShell>
      <ArtistGrid artists={artists} />
    </MadShell>
  );
}
