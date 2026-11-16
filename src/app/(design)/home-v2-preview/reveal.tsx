"use client";

import { createContext, useContext, type ReactNode } from "react";

const RevealContext = createContext(false);

export function RevealProvider({ revealed, children }: { revealed: boolean; children: ReactNode }) {
  return <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>;
}

function useRevealed() {
  return useContext(RevealContext);
}

/** Splits text into per-character spans that fade+rise in with a small stagger — for short strings. */
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
