"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

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

export function useRevealed() {
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

/**
 * Reveals real wrapped lines of a paragraph in sequence, top to bottom —
 * not the whole block at once, and not per-letter (too heavy for body
 * copy). Each word is its own inline-block span; after mount we measure
 * each word's offsetTop to group them into their actual rendered line
 * (works at any viewport width), then every word in the same line shares
 * one transition delay. A literal "\n" in `text` becomes a forced line
 * break (plain string marker, not a <br/> element — raw JSX elements
 * inside an array prop don't survive the Server→Client Component
 * boundary identically and caused a hydration mismatch here before).
 */
export function LinesText({
  text,
  start = 0,
  lineStep = 70,
  duration = 320,
  className = "",
}: {
  text: string;
  start?: number;
  lineStep?: number;
  duration?: number;
  className?: string;
}) {
  const revealed = useRevealed();
  const containerRef = useRef<HTMLSpanElement>(null);
  const [lineOf, setLineOf] = useState<number[]>([]);

  const words: (string | "BR")[] = [];
  text.split("\n").forEach((line, i, arr) => {
    line.split(/(\s+)/).forEach((tok) => {
      if (tok) words.push(tok);
    });
    if (i < arr.length - 1) words.push("BR");
  });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    const tops = spans.map((s) => s.offsetTop);
    const uniqueTops = Array.from(new Set(tops)).sort((a, b) => a - b);
    setLineOf(spans.map((_, i) => uniqueTops.indexOf(tops[i])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  let wordIndex = -1;
  return (
    <span ref={containerRef} className={className}>
      {words.map((w, i) => {
        if (w === "BR") return <br key={i} />;
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        wordIndex += 1;
        const line = lineOf[wordIndex] ?? 0;
        return (
          <span
            key={i}
            data-word
            className="inline-block transition-[opacity,transform] ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(4px)",
              transitionDuration: `${duration}ms`,
              transitionDelay: `${start + line * lineStep}ms`,
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
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
