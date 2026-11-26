import Image from "next/image";
import type { Release } from "@/lib/mad/releases";

// How many covers share the column height before it starts scrolling.
const MAX_VISIBLE = 7;

// Desktop releases column (Figma 392:2583): big vertical "Releases" label and
// a full-height stack of covers. 1 release fills the whole height; up to 7
// split it evenly; beyond 7 each keeps 1/7 of the height and the stack scrolls.
export default function ReleaseColumn({ releases }: { releases: Release[] }) {
  const rows = Math.min(Math.max(releases.length, 1), MAX_VISIBLE);
  const itemHeight = `${100 / rows}%`;

  return (
    <section className="hidden h-full min-w-0 flex-1 items-stretch gap-8 border-l border-[#111] bg-white pl-6 lg:flex">
      <div className="flex shrink-0 flex-col items-center pt-10">
        <div className="flex h-[295px] w-[87px] items-center justify-center">
          <h2 className="-rotate-90 whitespace-nowrap text-[72px] font-normal leading-none tracking-[-1.44px] text-black">
            Releases
          </h2>
        </div>
      </div>
      <ul className="scrollbar-hidden flex h-full min-w-0 flex-1 flex-col overflow-y-auto bg-[#eef4f5]">
        {releases.map((r) => (
          <li key={r.id} className="relative w-full shrink-0 bg-[#383838]" style={{ height: itemHeight }}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute inset-0 block"
              aria-label={`${r.title} — ${r.artist}`}
            >
              {r.cover && (
                <Image src={r.cover} alt="" fill sizes="(min-width: 1024px) 40vw, 1px" className="object-cover" />
              )}
              <span className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent p-4 text-[16px] font-bold leading-tight text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {r.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
