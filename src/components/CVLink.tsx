"use client";

import { useLanguage } from "@/lib/LanguageContext";

export const CV_HREF = {
  es: "/design/profile/CV_ErickAlvarez_Spanish.pdf",
  en: "/design/profile/CV_ErickAlvarez_English.pdf",
};

export default function CVLink({ className }: { className?: string }) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <a
      href={CV_HREF[language]}
      target="_blank"
      rel="noreferrer"
      aria-label={isSpanish ? "Descargar CV" : "Download CV"}
      className={`inline-flex items-center gap-1.5 ${className ?? ""}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>CV</span>
    </a>
  );
}
