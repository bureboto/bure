"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { CV_HREF } from "@/components/CVLink";
import { Letters } from "./reveal";

/** Same visual treatment as the page's own UnderlineLink, but picks the CV file by language. */
export function CvLink({ delay }: { delay: number }) {
  const { language } = useLanguage();
  return (
    <a
      href={CV_HREF[language]}
      target="_blank"
      rel="noreferrer"
      className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2"
    >
      <Letters text="CV" start={delay} />
    </a>
  );
}
