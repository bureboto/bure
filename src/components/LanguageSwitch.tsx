"use client";

import { useLanguage } from "@/lib/LanguageContext";

/**
 * Figma node 3603:44219 — joined En/Es segmented pill in the header.
 * A sliding dark indicator animates between the two segments instead of
 * the background snapping between them, since background-color on a
 * same-shaped box is the one thing that doesn't read as "sliding" —
 * moving an absolutely-positioned indicator with `translate-x` does.
 */
export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={`flex h-full items-center border-l border-[#6e6e73] pl-4 ${className}`}>
      <div className="relative grid grid-cols-2 rounded-[4px] border border-[#1d1d1d]">
        <div
          aria-hidden
          className={`absolute inset-y-0 left-0 w-1/2 rounded-[4px] bg-[#1d1d1d] transition-transform duration-300 ease-out ${
            isEs ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={!isEs}
          className={`relative z-10 px-2 py-2 text-[16px] tracking-[0.16px] transition-colors duration-300 ${
            isEs ? "text-[#1d1d1d]" : "text-white"
          }`}
        >
          En
        </button>
        <button
          type="button"
          onClick={() => setLanguage("es")}
          aria-pressed={isEs}
          className={`relative z-10 px-2 py-2 text-[16px] tracking-[0.16px] transition-colors duration-300 ${
            isEs ? "text-white" : "text-[#1d1d1d]"
          }`}
        >
          Es
        </button>
      </div>
    </div>
  );
}
