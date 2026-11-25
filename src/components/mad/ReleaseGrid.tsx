import Image from "next/image";
import type { Release } from "@/lib/mad/releases";

const SHADES = ["bg-[#5e5e5e]", "bg-[#383838]"];
const MD_SHADES = ["md:bg-[#5e5e5e]", "md:bg-[#383838]"];

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });
}

// Figma 391:2263 / 391:2350: edge-to-edge grid of square release covers,
// 2 columns on mobile and 4 on desktop, checkerboard grey while empty.
export default function ReleaseGrid({ releases }: { releases: Release[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4">
      {releases.map((r, i) => {
        // Checkerboard placeholder: rows alternate, so parity depends on column count.
        const shade = `${SHADES[(i + Math.floor(i / 2)) % 2]} ${MD_SHADES[(i + Math.floor(i / 4)) % 2]}`;
        const Tag = r.url ? "a" : "div";
        return (
          <li key={r.id} className={`relative aspect-square ${shade}`}>
            <Tag
              {...(r.url ? { href: r.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group absolute inset-0 block"
            >
              {r.cover && (
                <Image src={r.cover} alt={`${r.title} — ${r.artist}`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              )}
              <span className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 text-[16px] leading-tight opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span>{r.title}</span>
                <span className="text-[#9a9a9a]">{r.artist}</span>
                {r.releaseDate && <span className="mt-2 text-[12px] text-[#9a9a9a]">{formatDate(r.releaseDate)}</span>}
              </span>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}
