// Mad Cactus home — served at mad.bure.art via src/proxy.ts.
// Figma: Home-Desktop (390:2245) / Home-Mobile (391:2349).
import MadMobileHeader from "@/components/mad/MadMobileHeader";
import MadSidebar from "@/components/mad/MadSidebar";
import ReleaseGrid from "@/components/mad/ReleaseGrid";
import { getMadReleases } from "@/lib/mad/spotify";

// Re-fetch releases from Spotify at most once a day (ISR).
export const revalidate = 86400;

export default async function MadHome() {
  const releases = await getMadReleases();

  return (
    <div className="flex min-h-screen flex-col md:flex-row md:items-start">
      <MadSidebar />
      <MadMobileHeader />
      <main className="min-w-0 flex-1">
        <ReleaseGrid releases={releases} />
      </main>
    </div>
  );
}
