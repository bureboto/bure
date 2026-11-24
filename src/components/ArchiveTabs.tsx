"use client";

import { useEffect, useRef, useState } from "react";
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

const FIRST_YEAR = 2007;
const LAST_YEAR = 2026;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Figma's segmented Order/Random pill — same sliding-indicator recipe as LanguageSwitch. */
function ModeSwitch({
  mode,
  setMode,
  labels,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  labels: { order: string; random: string };
}) {
  const isOrder = mode === "order";
  return (
    <div className="relative grid grid-cols-2 rounded-[4px] border border-[#1d1d1d]">
      <div
        aria-hidden
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#1d1d1d] transition-transform duration-300 ease-out ${
          isOrder ? "translate-x-0 rounded-l-[4px]" : "translate-x-full rounded-r-[4px]"
        }`}
      />
      <button
        type="button"
        onClick={() => setMode("order")}
        aria-pressed={isOrder}
        className={`relative z-10 px-3 py-2 text-[16px] tracking-[0.16px] transition-colors duration-300 ${
          isOrder ? "text-white" : "text-[#1d1d1d]"
        }`}
      >
        <LangText>{labels.order}</LangText>
      </button>
      <button
        type="button"
        onClick={() => setMode("random")}
        aria-pressed={!isOrder}
        className={`relative z-10 px-3 py-2 text-[16px] tracking-[0.16px] transition-colors duration-300 ${
          !isOrder ? "text-white" : "text-[#1d1d1d]"
        }`}
      >
        <LangText>{labels.random}</LangText>
      </button>
    </div>
  );
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
  const yearsWithContent = new Set(grouped.map((g) => g.year));
  const allYears = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => LAST_YEAR - i);

  const [activeYear, setActiveYear] = useState<number | null>(grouped[0]?.year ?? null);
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Sidebar scroll-spy: highlight whichever year section is currently at
  // the top of the viewport, so the "fixed" year list stays in sync with
  // what the user is scrolled to (only meaningful in Order mode).
  useEffect(() => {
    if (mode !== "order") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const top = visible[0];
        if (top) setActiveYear(Number((top.target as HTMLElement).dataset.year));
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mode, grouped.length]);

  function scrollToYear(year: number) {
    sectionRefs.current[year]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex-1">
      {/* Tabs — centered pill */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[28px] box-border">
        <RevealProvider>
          <Block duration={280} className="flex items-center justify-center py-6">
            <ModeSwitch mode={mode} setMode={setMode} labels={t} />
          </Block>
        </RevealProvider>
      </div>

      {/* Keyed by mode so switching tabs remounts a fresh RevealProvider —
          otherwise content mounted after the initial page-load reveal
          flip would just appear instantly with no entrance animation. */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[28px] pb-12 box-border">
        <RevealProvider key={mode}>
          <div className="flex items-start gap-6">
            {/* Year anchor list — desktop only, sticky while the content scrolls past it */}
            {mode === "order" && (
              <div className="sticky top-[88px] hidden shrink-0 flex-col gap-2 self-start text-[16px] tracking-[0.16px] lg:flex">
                {allYears.map((year) => {
                  const has = yearsWithContent.has(year);
                  const active = has && year === activeYear;
                  return has ? (
                    <button
                      key={year}
                      type="button"
                      onClick={() => scrollToYear(year)}
                      className={`text-left transition-colors ${
                        active ? "font-bold text-[#1d1d1d]" : "text-[#909096] hover:text-[#1d1d1d]"
                      }`}
                    >
                      {year}
                    </button>
                  ) : (
                    <span key={year} className="text-[#909096]">
                      {year}
                    </span>
                  );
                })}
              </div>
            )}

            <div className="min-w-0 flex-1">
              {mode === "random" ? (
                <FadeIn delay={120} duration={500}>
                  <Masonry pieces={randomPieces} respectSpan={false} />
                </FadeIn>
              ) : (
                <div className="flex flex-col gap-10">
                  {grouped.map(({ year, items }, i) => {
                    const intro = yearIntros[year];
                    return (
                      <Block
                        key={year}
                        delay={120 + i * 60}
                        duration={400}
                        className={i > 0 ? "border-t border-[#909096] pt-10" : ""}
                      >
                        <div
                          ref={(el) => {
                            sectionRefs.current[year] = el;
                          }}
                          data-year={year}
                          className="flex scroll-mt-[88px] flex-col gap-10"
                        >
                          <div className="flex items-start gap-6">
                            <div className="flex h-[107px] w-[48px] shrink-0 items-center justify-center lg:h-[178px] lg:w-[92px]">
                              <p className="-rotate-90 whitespace-nowrap text-[48px] font-light leading-none text-[#1d1d1d] lg:text-[80px]">
                                {year}
                              </p>
                            </div>
                            {intro && (
                              <div className="flex flex-1 flex-col gap-6 text-[16px] tracking-[0.16px] text-[#1d1d1d] lg:flex-row lg:gap-10">
                                <p className="lg:w-[332px] lg:shrink-0">
                                  <LangParagraph text={intro[displayLanguage][0]} />
                                </p>
                                <p className="lg:w-[332px] lg:shrink-0">
                                  <LangParagraph text={intro[displayLanguage][1]} />
                                </p>
                              </div>
                            )}
                          </div>
                          <Masonry pieces={items} />
                        </div>
                      </Block>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </RevealProvider>
      </div>
    </div>
  );
}
