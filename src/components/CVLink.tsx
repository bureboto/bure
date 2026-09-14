"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CVLink({ className }: { className?: string }) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <a
      href={isSpanish ? "/cv-es.pdf" : "/cv-en.pdf"}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {isSpanish ? "Descargar CV" : "Download CV"}
    </a>
  );
}
