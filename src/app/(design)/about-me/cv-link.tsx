"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { CV_HREF } from "@/components/CVLink";
import { LangLetters } from "@/lib/langTransition";
import { useRevealed } from "./reveal";

/** Same visual treatment as the page's own UnderlineLink, but picks the CV file by language. */
export function CvLink({ delay }: { delay: number }) {
  const { language } = useLanguage();
  const revealedMount = useRevealed();
  return (
    <a
      href={CV_HREF[language]}
      target="_blank"
      rel="noreferrer"
      className="text-[16px] tracking-[0.16px] text-[#1d1d1d]"
    >
      <LangLetters
        text="CV"
        revealedMount={revealedMount}
        mountStart={delay}
        mountStep={10}
        letterClassName="underline underline-offset-2"
      />
    </a>
  );
}
