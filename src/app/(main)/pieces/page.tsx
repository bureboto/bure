"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useDelayedLanguage, LangText } from "@/lib/langTransition";
import { RevealProvider, Block } from "@/lib/reveal";

const copy = {
  es: { comingSoon: "Próximamente." },
  en: { comingSoon: "Coming soon." },
};

export default function PiecesPage() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];

  return (
    <RevealProvider>
      <div className="px-5 flex-1 flex items-center justify-center">
        <Block duration={400}>
          <p className="text-sm text-black/50">
            <LangText>{t.comingSoon}</LangText>
          </p>
        </Block>
      </div>
    </RevealProvider>
  );
}
