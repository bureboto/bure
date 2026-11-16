"use client";

import { useEffect, useRef, useState } from "react";

// Just the Bure isotype (the small mark before the "Bure" wordmark in logo.svg),
// re-cropped to its own bounding box so it scales cleanly on its own.
const ICON_VIEWBOX = "4.57 13.8 8.5 5.33";
const ICON_PATH =
  "M8.81836 13.8193C11.1646 13.8193 13.0672 15.0092 13.0674 16.4756C13.067 17.9419 11.1645 19.1309 8.81836 19.1309C6.47232 19.1308 4.57073 17.9418 4.57031 16.4756C4.57052 15.0092 6.4722 13.8194 8.81836 13.8193Z";

type Phase = "huge" | "shrink" | "burst" | "fade" | "done";
type Dot = { dx: number; dy: number; delay: number };
type Target = { left: number; top: number; size: number };

function BureIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={ICON_VIEWBOX} className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={ICON_PATH} fill="#111111" />
    </svg>
  );
}

/**
 * Experimental splash: the Bure isotype starts huge and centered, shrinks
 * down to its real position inside the header logo, then bursts a handful
 * of dots outward toward the project grid (and one toward the bottom-left,
 * standing in for a future footer mark) before fading out. `onDone` flips
 * the page's text reveal (see reveal.tsx) once the splash finishes.
 */
export function Splash({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("huge");
  const [dots, setDots] = useState<Dot[]>([]);
  const [target, setTarget] = useState<Target | null>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      onDone();
      return;
    }

    const headerLogo = document.querySelector<HTMLElement>("header img[alt='Bure']");
    const rect = headerLogo?.getBoundingClientRect();
    setTarget(
      rect
        ? { left: rect.left + rect.height / 2, top: rect.top + rect.height / 2, size: rect.height }
        : { left: 48, top: 36, size: 20 }
    );

    const raf = requestAnimationFrame(() => setPhase("shrink"));
    const shrinkTimer = setTimeout(() => {
      const grid = document.getElementById("projects");
      const iconEl = iconRef.current;
      if (!grid || !iconEl) {
        setPhase("fade");
        return;
      }
      const iconRect = iconEl.getBoundingClientRect();
      const originX = iconRect.left + iconRect.width / 2;
      const originY = iconRect.top + iconRect.height / 2;
      const gridRect = grid.getBoundingClientRect();
      const count = 9;
      const generated: Dot[] = Array.from({ length: count }, (_, i) => {
        const isFooterDot = i === count - 1;
        const tx = isFooterDot ? 24 : gridRect.left + Math.random() * gridRect.width;
        const ty = isFooterDot ? window.innerHeight - 24 : gridRect.top + Math.random() * gridRect.height;
        return { dx: tx - originX, dy: ty - originY, delay: i * 35 };
      });
      setDots(generated);
      requestAnimationFrame(() => setPhase("burst"));
    }, 900);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(shrinkTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== "burst") return;
    const t = setTimeout(() => setPhase("fade"), 650);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fade") return;
    const t = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 320);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  if (phase === "done") return null;

  const huge = phase === "huge";
  const iconSize = huge ? "48vmin" : target ? `${target.size}px` : "20px";

  return (
    <div
      className="fixed inset-0 z-[100] bg-white transition-opacity duration-300 ease-out"
      style={{ opacity: phase === "fade" ? 0 : 1 }}
    >
      <div
        ref={iconRef}
        className="fixed transition-all ease-in-out"
        style={{
          width: iconSize,
          height: iconSize,
          left: huge ? "50%" : target ? `${target.left}px` : "50%",
          top: huge ? "50%" : target ? `${target.top}px` : "50%",
          transform: "translate(-50%, -50%)",
          transitionDuration: "850ms",
        }}
      >
        <BureIcon className="h-full w-full" />
      </div>

      {dots.map((dot, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-[#1d1d1d] transition-all ease-out"
          style={{
            width: 7,
            height: 7,
            left: target ? `${target.left}px` : "50%",
            top: target ? `${target.top}px` : "50%",
            transform:
              phase === "burst" ? `translate(${dot.dx}px, ${dot.dy}px) scale(1)` : "translate(0, 0) scale(0)",
            opacity: phase === "burst" ? 0 : 1,
            transitionDuration: "600ms",
            transitionDelay: `${dot.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
