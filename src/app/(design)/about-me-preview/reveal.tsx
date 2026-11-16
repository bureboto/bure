"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const RevealContext = createContext(false);

/**
 * Drives the page's entrance animation: everything starts hidden, then one
 * frame after mount (so the hidden state actually paints first) flips to
 * revealed, letting every Letters/Block/FadeImage below transition in on
 * its own delay. Respects prefers-reduced-motion by skipping straight to
 * revealed.
 */
export function RevealProvider({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const raf = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>;
}

function useRevealed() {
  return useContext(RevealContext);
}

/** Splits text into per-character spans that fade+rise in with a small stagger. Reserve for short strings (headings, labels, links) — not for long paragraphs. */
export function Letters({
  text,
  start = 0,
  step = 10,
  duration = 280,
  className = "",
}: {
  text: string;
  start?: number;
  step?: number;
  duration?: number;
  className?: string;
}) {
  const revealed = useRevealed();
  return (
    <span className={className}>
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="inline-block transition-[opacity,transform] ease-out"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(0.2em)",
            transitionDuration: `${duration}ms`,
            transitionDelay: `${start + i * step}ms`,
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}

/** Fades+rises a whole block in at once — for paragraphs and other content too long to split per-letter. */
export function Block({
  children,
  delay = 0,
  duration = 350,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const revealed = useRevealed();
  return (
    <div
      className={`transition-[opacity,transform] ease-out ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(6px)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** Opacity-only fade for images, per the request (0% to 100%, no movement). */
export function FadeImage({
  children,
  delay = 0,
  duration = 500,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const revealed = useRevealed();
  return (
    <div
      className={`transition-opacity ease-out ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
