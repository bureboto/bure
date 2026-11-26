// Mad Cactus artists — mad.bure.art/artists (rewritten to /mad/artists by src/proxy.ts).
// Roster and profile pictures come from Spotify, derived from the label's releases.
import type { Metadata } from "next";
import ArtistGrid from "@/components/mad/ArtistGrid";
import MadShell from "@/components/mad/MadShell";
import { getMadArtists } from "@/lib/mad/spotify";

export const metadata: Metadata = { title: "Artists — Mad Cactus" };

// Re-render hourly so a render that hit a Spotify rate limit heals quickly.
// Spotify itself is still called at most about once a day: successful
// responses are cached for a day in src/lib/mad/spotify.ts.
export const revalidate = 3600;

export default async function MadArtists() {
  const artists = await getMadArtists();

  return (
    <MadShell>
      <ArtistGrid artists={artists} />
    </MadShell>
  );
}
