"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity w-6 text-center"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
