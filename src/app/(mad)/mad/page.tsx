// Mad Cactus home — served at mad.bure.art via src/proxy.ts.
// Figma: Home-Desktop (390:2245) / Home-Mobile (391:2349).
import MadShell from "@/components/mad/MadShell";
import ReleaseGrid from "@/components/mad/ReleaseGrid";
import { getMadReleases } from "@/lib/mad/spotify";

// Re-fetch releases from Spotify at most once a day (ISR).
export const revalidate = 86400;

export default async function MadHome() {
  const releases = await getMadReleases();

  return (
    <MadShell>
      <ReleaseGrid releases={releases} />
    </MadShell>
  );
}
