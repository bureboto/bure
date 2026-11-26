import Image from "next/image";
import type { Artist } from "@/lib/mad/releases";

const SHADES = ["bg-[#5e5e5e]", "bg-[#383838]"];
const MD_SHADES = ["md:bg-[#5e5e5e]", "md:bg-[#383838]"];

// Same square grid as the releases, one tile per artist with their Spotify
// profile picture. Interim layout until the Artists UI is designed.
export default function ArtistGrid({ artists }: { artists: Artist[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4">
      {artists.map((a, i) => {
        const shade = `${SHADES[(i + Math.floor(i / 2)) % 2]} ${MD_SHADES[(i + Math.floor(i / 4)) % 2]}`;
        return (
          <li key={a.id} className={`relative aspect-square ${shade}`}>
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="group absolute inset-0 block">
              {a.image && (
                <Image src={a.image} alt={a.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              )}
              <span className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 text-[16px] leading-tight opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span>{a.name}</span>
                <span className="mt-2 text-[12px] text-[#9a9a9a]">
                  {a.releaseCount} {a.releaseCount === 1 ? "release" : "releases"}
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
