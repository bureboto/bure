"use client";

import { artworks } from "@/lib/artworks";
import { LangText } from "@/lib/langTransition";
import { RevealProvider, Block } from "@/lib/reveal";

function ArtworkCard({ artwork, delay }: { artwork: (typeof artworks)[number]; delay: number }) {
  return (
    <Block delay={delay} duration={400} className="flex flex-col gap-2">
      {/* Dummy gris claro hasta que haya imagen real de la pieza */}
      <div className="h-[280px] w-full bg-[#f0f0f5] lg:h-[350px]" />
      <div className="flex flex-col gap-2 text-[12px] text-[#1d1d1d]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
          <p className="font-bold lg:flex-1">
            {artwork.title}, {artwork.year}
          </p>
          <div className="lg:flex-1">
            <p>{artwork.medium}</p>
            <p>{artwork.dimensions}</p>
          </div>
        </div>
        {artwork.moreHref && (
          <a href={artwork.moreHref} className="underline underline-offset-2">
            <LangText>+ Info</LangText>
          </a>
        )}
      </div>
    </Block>
  );
}

export default function PiecesPage() {
  return (
    <RevealProvider>
      <div className="flex flex-1 flex-col gap-6 px-[28px] pb-12 lg:flex-row lg:items-start lg:gap-6">
        {/* Desktop: rotated jumbo label beside the grid, same pattern as Archive's year label */}
        <Block duration={350} className="hidden h-[239px] w-[92px] shrink-0 items-center justify-center lg:flex">
          <p className="-rotate-90 whitespace-nowrap text-[80px] font-light leading-none text-[#1d1d1d]">Pieces</p>
        </Block>
        {/* Mobile: plain horizontal title */}
        <Block duration={350} className="lg:hidden">
          <p className="text-[80px] font-light leading-none text-[#1d1d1d]">Pieces</p>
        </Block>

        <div className="grid flex-1 grid-cols-2 gap-x-2 gap-y-10 lg:grid-cols-4">
          {artworks.map((artwork, i) => (
            <ArtworkCard key={artwork.id} artwork={artwork} delay={120 + i * 60} />
          ))}
        </div>
      </div>
    </RevealProvider>
  );
}
