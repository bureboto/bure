// Artist dashboard — mad.bure.art/dashboard (rewritten to /mad/dashboard).
// Figma: Home-Desktop (392:2535) / Home-Mobile (393:3147).
//
// Preview only, no login yet:
//   ?artist=<Spotify artist ID>  which artist to show (default: L3AF)
//   ?releases=<N>                fill the releases with N label releases, to
//                                try the 1 / 2–7 / 8+ layouts
// Wallet, listeners and non-Spotify follows are demo numbers for now.
import type { Metadata } from "next";
import Image from "next/image";
import DashboardMobileBar from "@/components/mad/dashboard/DashboardMobileBar";
import DashboardSidebar from "@/components/mad/dashboard/DashboardSidebar";
import ListenersPanel from "@/components/mad/dashboard/ListenersPanel";
import NewReleaseButton from "@/components/mad/dashboard/NewReleaseButton";
import ReleaseColumn from "@/components/mad/dashboard/ReleaseColumn";
import VerticalLabel from "@/components/mad/dashboard/VerticalLabel";
import { DEMO_FOLLOWS, DEMO_LISTENERS, DEMO_WALLET_USD } from "@/lib/mad/dashboard-demo";
import type { Release } from "@/lib/mad/releases";
import { getMadArtistProfile, getMadReleases } from "@/lib/mad/spotify";

export const metadata: Metadata = { title: "Dashboard — Mad Cactus", robots: { index: false } };

const DEFAULT_ARTIST = "6PrOoECINzfKEUyMRv6fWI"; // L3AF

const fmt = (n: number) => n.toLocaleString("en-US");

export default async function Dashboard({ searchParams }: PageProps<"/mad/dashboard">) {
  const params = await searchParams;
  const artistId = typeof params.artist === "string" ? params.artist : DEFAULT_ARTIST;
  const forced = typeof params.releases === "string" ? Math.max(0, Math.min(50, Number(params.releases) || 0)) : null;

  const profile = await getMadArtistProfile(artistId);
  const name = profile?.name ?? "Artist";

  let releases: Release[] = profile?.releases ?? [];
  if (forced !== null) {
    const pool = await getMadReleases();
    releases = Array.from({ length: forced }, (_, i) => ({ ...pool[i % pool.length], id: `${pool[i % pool.length].id}-${i}` }));
  }

  const follows = [
    { name: "Spotify", value: profile?.followers },
    { name: "Youtube", value: DEMO_FOLLOWS.youtube },
    { name: "Instagram", value: DEMO_FOLLOWS.instagram },
    { name: "Facebook", value: DEMO_FOLLOWS.facebook },
  ];

  return (
    <div className="flex min-h-screen bg-white font-normal text-[#111] lg:h-screen lg:overflow-hidden">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 lg:h-full">
        <main className="flex min-w-0 flex-1 flex-col pt-6 pb-20 lg:h-full lg:overflow-y-auto lg:pb-0">
          {/* Head: picture (+ New Release on desktop), then the name */}
          <header className="@container flex flex-col items-start gap-4 px-6 py-4">
            <div className="flex w-full items-start justify-between gap-4">
              <div className="relative size-40 shrink-0 overflow-hidden rounded-full bg-[#383838]">
                {profile?.image && (
                  <Image src={profile.image} alt="" fill sizes="160px" className="object-cover" priority />
                )}
              </div>
              <div className="hidden lg:block">
                <NewReleaseButton variant="solid" />
              </div>
            </div>
            {/* 72px like the Figma, scaled down so long names fit the column */}
            <h1 className="max-w-full text-[min(72px,16cqw)] leading-none tracking-[-0.02em] [overflow-wrap:anywhere]">
              {name}
            </h1>
          </header>

          {/* Wallet */}
          <section className="@container flex items-center gap-6 border-t border-[#737373] px-6 py-4">
            <div className="flex min-w-0 items-start gap-2">
              <VerticalLabel className="h-[59px]">Wallet</VerticalLabel>
              <div className="flex min-w-0 flex-col">
                {/* One line, as in the Figma: 72px on desktop, shrinking to fit narrower columns */}
                <p className="flex items-baseline gap-x-2 whitespace-nowrap text-[min(40px,calc((100cqw-90px)/7))] font-light leading-none tracking-[-0.02em] lg:text-[min(72px,calc((100cqw-90px)/7))] lg:font-normal">
                  <span>${fmt(DEMO_WALLET_USD)}</span>
                  <span>USD</span>
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none">Total available</p>
              </div>
            </div>
          </section>

          {/* Releases: count + thumbnails */}
          <section className="flex items-center gap-6 border-t border-[#737373] py-4 pl-6">
            <div className="flex shrink-0 items-start gap-2">
              <VerticalLabel className="h-[86px]">Releases</VerticalLabel>
              <p className="text-[40px] font-light leading-none tracking-[-0.8px] lg:text-[72px] lg:font-normal lg:tracking-[-1.44px]">
                {releases.length}
              </p>
            </div>
            <ul className="scrollbar-hidden flex min-w-0 gap-4 overflow-x-auto pr-6">
              {releases.map((r) => (
                <li key={r.id} className="relative size-[87.58px] shrink-0 bg-[#383838]">
                  {r.cover && <Image src={r.cover} alt={r.title} fill sizes="88px" className="object-cover" />}
                </li>
              ))}
            </ul>
          </section>

          {/* Follows */}
          <section className="flex items-center gap-4 border-t border-[#737373] py-4 pl-6">
            <VerticalLabel className="h-[72px]">Follows</VerticalLabel>
            <ul className="scrollbar-hidden flex min-w-0 flex-1 gap-6 overflow-x-auto pr-6">
              {follows.map((f) => (
                <li key={f.name} className="flex shrink-0 flex-col gap-2">
                  <p className="text-[40px] font-light leading-none tracking-[-0.8px]">
                    {f.value === undefined ? "—" : fmt(f.value)}
                  </p>
                  <p className="text-[16px] font-bold leading-none">{f.name}</p>
                </li>
              ))}
            </ul>
          </section>

          <ListenersPanel stats={DEMO_LISTENERS} />
        </main>

        <ReleaseColumn releases={releases} />
      </div>

      <DashboardMobileBar />
    </div>
  );
}
