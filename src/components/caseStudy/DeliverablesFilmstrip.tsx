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
 * Pinned "Deliverables" section: scrolling down drives a horizontal
 * filmstrip of items (one centered at a time) instead of swapping them in
 * place. Once the last item is centered, normal vertical scroll resumes.
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

  const translate = progress * ((n - 1) * (100 / n));

  return (
    <div ref={containerRef} className="relative" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col gap-10 overflow-hidden border-t border-[#6e6e73] bg-white py-10">
        <p className="text-center text-[36px] font-bold text-[#1d1d1d]">{title}</p>
        <div
          className="flex flex-1"
          style={{ width: `${n * 100}%`, transform: `translateX(-${translate}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center justify-start gap-8 px-6 text-center md:px-[120px]"
              style={{ width: `${100 / n}%` }}
            >
              <div className="flex w-[580px] max-w-full flex-col items-center gap-2">
                <p className="text-[24px] font-bold text-[#1d1d1d]">{item.title}</p>
                <p className="text-[16px] tracking-[0.16px] text-[#6e6e73]">{item.body}</p>
              </div>
              <div className="relative h-[360px] w-[580px] max-w-full">
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
        <div className="flex justify-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === Math.round(progress * (n - 1)) ? "bg-[#1d1d1d]" : "bg-[#1d1d1d]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
