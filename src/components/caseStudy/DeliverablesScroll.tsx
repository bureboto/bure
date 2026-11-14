"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

export type DeliverableItem = {
  title: ReactNode;
  body: ReactNode;
  src: string;
  alt: string;
};

/**
 * Pinned "Deliverables" section: the title + item panel stay fixed in the
 * viewport while scrolling through the section; each scroll step swaps in
 * the next deliverable (image/video + copy). One 100vh scroll "track" per
 * item drives which one is active, via IntersectionObserver.
 */
export default function DeliverablesScroll({ title, items }: { title: ReactNode; items: DeliverableItem[] }) {
  const [active, setActive] = useState(0);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActive(index);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    trackRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div className="relative">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden border-t border-[#6e6e73] bg-white px-6 py-10 md:px-[120px]">
        <p className="text-[36px] font-bold text-[#1d1d1d] text-center">{title}</p>
        <div className="relative flex w-[580px] max-w-full flex-col items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex w-full flex-col items-center gap-8 text-center transition-opacity duration-500 ${
                i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
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
          ))}
        </div>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === active ? "bg-[#1d1d1d]" : "bg-[#1d1d1d]/20"}`} />
          ))}
        </div>
      </div>
      {items.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trackRefs.current[i] = el;
          }}
          data-index={i}
          className="h-screen"
        />
      ))}
    </div>
  );
}
