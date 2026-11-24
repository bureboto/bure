"use client";

import { useEffect, useState } from "react";
import { pieces, piecesByYearDesc } from "@/lib/pieces";
import { yearIntros } from "@/lib/year-intros";
import Masonry from "@/components/Masonry";
import { useLanguage } from "@/lib/LanguageContext";
import { LangText, LangParagraph, useDelayedLanguage } from "@/lib/langTransition";
import { RevealProvider, Block, FadeIn } from "@/lib/reveal";

type Mode = "random" | "order";

const copy = {
  es: { random: "Random", order: "Order" },
  en: { random: "Random", order: "Order" },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ArchiveTabs() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];
  const [mode, setMode] = useState<Mode>("order");
  // orden estable en el server; se re-mezcla en el cliente tras montar
  // para evitar mismatches de hidratación, y de nuevo en cada recarga.
  const [randomPieces, setRandomPieces] = useState(pieces);
  useEffect(() => {
    setRandomPieces(shuffle(pieces));
  }, []);
  const grouped = piecesByYearDesc();

  return (
    <div className="flex-1">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[28px] box-border">
        <RevealProvider>
          <Block duration={280} className="flex items-center gap-6 py-6 text-sm">
            <button
              onClick={() => setMode("random")}
              className={mode === "random" ? "font-medium underline underline-offset-4" : "text-black/50 hover:text-black transition-colors"}
            >
              <LangText>{t.random}</LangText>
            </button>
            <button
              onClick={() => setMode("order")}
              className={mode === "order" ? "font-medium underline underline-offset-4" : "text-black/50 hover:text-black transition-colors"}
            >
              <LangText>{t.order}</LangText>
            </button>
          </Block>
        </RevealProvider>
      </div>

      {/* Keyed by mode so switching tabs remounts a fresh RevealProvider —
          otherwise content mounted after the initial page-load reveal
          flip would just appear instantly with no entrance animation. */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[28px] pb-12 box-border">
        <RevealProvider key={mode}>
          {mode === "random" ? (
            <FadeIn delay={120} duration={500}>
              <Masonry pieces={randomPieces} respectSpan={false} />
            </FadeIn>
          ) : (
            <div className="flex flex-col gap-12">
              {grouped.map(({ year, items }, i) => {
                const intro = yearIntros[year];
                return (
                  <Block key={year} delay={120 + i * 60} duration={400}>
                    <h2 className="text-2xl font-medium mb-4">{year}</h2>
                    {intro && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-sm text-black/70">
                        <LangParagraph text={intro[displayLanguage][0]} />
                        <LangParagraph text={intro[displayLanguage][1]} />
                      </div>
                    )}
                    <Masonry pieces={items} />
                  </Block>
                );
              })}
            </div>
          )}
        </RevealProvider>
      </div>
    </div>
  );
}
