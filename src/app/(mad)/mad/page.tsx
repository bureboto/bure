// Mad Cactus home — served at mad.bure.art via src/proxy.ts.
// Figma: Home-Desktop (390:2245) / Home-Mobile (391:2349).
import MadMobileHeader from "@/components/mad/MadMobileHeader";
import MadSidebar from "@/components/mad/MadSidebar";
import ReleaseGrid from "@/components/mad/ReleaseGrid";
import { RELEASES } from "@/lib/mad/releases";

export default function MadHome() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:items-start">
      <MadSidebar />
      <MadMobileHeader />
      <main className="min-w-0 flex-1">
        <ReleaseGrid releases={RELEASES} />
      </main>
    </div>
  );
}
