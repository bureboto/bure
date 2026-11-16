"use client";

import { useLanguage } from "@/lib/LanguageContext";

/** Figma node 3603:44219 — joined En/Es segmented pill in the header. */
export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex h-full items-center border-l border-[#6e6e73] pl-4 ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-l-[4px] border border-[#1d1d1d] px-2 py-2 text-[16px] tracking-[0.16px] ${
          language === "en" ? "bg-[#1d1d1d] text-white" : "bg-white text-[#1d1d1d]"
        }`}
      >
        En
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`-ml-px rounded-r-[4px] border border-[#1d1d1d] px-2 py-2 text-[16px] tracking-[0.16px] ${
          language === "es" ? "bg-[#1d1d1d] text-white" : "bg-white text-[#1d1d1d]"
        }`}
      >
        Es
      </button>
    </div>
  );
}
