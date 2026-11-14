"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

export type DeliverableItem = {
  title: ReactNode;
  body: ReactNode;
  src: string;
  alt: string;
};

const ITEM_WIDTH = 580;
const GAP = 120;

/**
 * Pinned "Deliverables" section: full-bleed, 100vw-wide filmstrip of items
 * placed side by side (120px gap). Scrolling down slides the row
 * horizontally; whichever item is centered on screen is fully opaque, and
 * opacity fades to 0 the further an item is from center. Once the last
 * item has been centered, normal vertical scroll resumes.
 */
export default function DeliverablesFilmstrip({ title, items }: { title: ReactNode; items: DeliverableItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const n = items.length;

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const raw = -rect.top / total;
      setProgress(Math.min(1, Math.max(0, raw)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activePos = progress * (n - 1);
  const offsetPx = activePos * (ITEM_WIDTH + GAP);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 ml-[calc(50%-50vw)] flex h-screen w-screen flex-col items-center justify-center gap-10 overflow-hidden border-t border-[#6e6e73] bg-white">
        <p className="text-center text-[80px] font-light text-[#1d1d1d]">{title}</p>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex items-start"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(50vw - ${ITEM_WIDTH / 2}px - ${offsetPx}px))`,
            }}
          >
            {items.map((item, i) => {
              const opacity = Math.max(0, 1 - 0.7 * Math.abs(i - activePos));
              return (
                <div
                  key={i}
                  className="flex shrink-0 flex-col items-center gap-8 text-center transition-opacity duration-[400ms] ease-out"
                  style={{ width: ITEM_WIDTH, opacity }}
                >
                  <div className="flex w-full flex-col items-center gap-2">
                    <p className="text-[24px] font-bold text-[#1d1d1d]">{item.title}</p>
                    <p className="text-[16px] tracking-[0.16px] text-[#6e6e73]">{item.body}</p>
                  </div>
                  <div className="relative h-[360px] w-full">
                    {item.src.endsWith(".mp4") ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        className="absolute inset-0 size-full object-contain"
                      />
                    ) : (
                      <Image src={item.src} alt={item.alt} fill className="object-contain" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
