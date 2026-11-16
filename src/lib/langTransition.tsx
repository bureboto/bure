"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useLanguage, type Language } from "@/lib/LanguageContext";

/**
 * Site-wide "everything just refreshed" effect on language switch: text
 * erases top-to-bottom (left slide) then the new copy slides back in
 * left-to-right. `LangTransitionProvider` drives one shared `visible`
 * flag off the global language — wrap it once near the app root (see
 * src/app/(design)/layout.tsx) so the header and every page's text move
 * in lockstep. Images/logos are never wrapped in this, by design.
 */
export const EXIT_DURATION = 200;
export const EXIT_STEP = 40;
export const ENTER_DURATION = 260;
export const ENTER_STEP = 40;

// Generous ceiling so the exit phase has time to finish even for the
// page with the most staggered lines before text swaps/re-enters.
const EXIT_TOTAL = EXIT_DURATION + EXIT_STEP * 12;

const LangTransitionContext = createContext(true);

export function useLangVisible() {
  return useContext(LangTransitionContext);
}

export function LangTransitionProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(true);
  const prevLanguage = useRef(language);
  // LanguageContext starts at "es" then self-corrects to the stored/
  // detected language right after mount — that correction isn't a user
  // switch, so ignore any language change until this window has passed.
  const armedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      armedRef.current = true;
    }, 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (prevLanguage.current === language) return;
    prevLanguage.current = language;
    if (!armedRef.current) return;
    setVisible(false);
    const t = setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, EXIT_TOTAL);
    return () => clearTimeout(t);
  }, [language]);

  return <LangTransitionContext.Provider value={visible}>{children}</LangTransitionContext.Provider>;
}

/**
 * For components whose own text actually differs by language (only a
 * handful today — Home's copy, the header's CV label): delays swapping
 * to the new string until the shared exit phase above has finished, so
 * the old text is what's visible while it erases. Uses the same timing
 * constants/armed-window as the provider so both stay in sync without
 * needing to thread state through context.
 */
export function useDelayedLanguage(language: Language) {
  const [displayLanguage, setDisplayLanguage] = useState(language);
  const prevLanguage = useRef(language);
  const armedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      armedRef.current = true;
    }, 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (prevLanguage.current === language) return;
    prevLanguage.current = language;
    if (!armedRef.current) {
      setDisplayLanguage(language);
      return;
    }
    const t = setTimeout(() => setDisplayLanguage(language), EXIT_TOTAL);
    return () => clearTimeout(t);
  }, [language]);

  return displayLanguage;
}

/** Wraps one piece of text; `line` (and optionally `col`) stagger it against siblings. */
export function LangText({
  children,
  line = 0,
  col = 0,
  className = "",
}: {
  children: ReactNode;
  line?: number;
  col?: number;
  className?: string;
}) {
  const visible = useLangVisible();
  return (
    <span
      className={`inline-block transition-[opacity,transform] ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-10px)",
        transitionDuration: `${visible ? ENTER_DURATION : EXIT_DURATION}ms`,
        transitionDelay: visible ? `${line * ENTER_STEP + col * 20}ms` : `${line * EXIT_STEP}ms`,
      }}
    >
      {children}
    </span>
  );
}
