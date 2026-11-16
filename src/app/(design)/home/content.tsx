"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";
import { CLICKABLE_ROW_CLASS } from "@/lib/listRow";
import { LangText, useLangVisible, useDelayedLanguage, ENTER_DURATION, EXIT_DURATION } from "@/lib/langTransition";
import HeaderContent from "@/components/HeaderContent";
import { RevealProvider, Letters, Block, FadeIn, LinesText, useRevealed } from "./reveal";

/**
 * Like LinesText, but each real rendered line re-animates on its own when
 * the language switches (not the whole paragraph as one block): measures
 * each word's offsetTop after mount/text-change to group words into their
 * actual line, same technique as LinesText.
 */
function LangParagraph({
  text,
  mountStart = 260,
  mountLineStep = 70,
  className = "",
}: {
  text: string;
  mountStart?: number;
  mountLineStep?: number;
  className?: string;
}) {
  const revealedMount = useRevealed();
  const langVisible = useLangVisible();

  const containerRef = useRef<HTMLSpanElement>(null);
  const [lineOf, setLineOf] = useState<number[]>([]);

  const words: (string | "BR")[] = [];
  const bold: boolean[] = [];
  let boldOn = false;
  text.split("\n").forEach((line, i, arr) => {
    line.split(/(\s+)/).forEach((tok) => {
      if (!tok) return;
      const hasOpen = tok.includes("**");
      let clean = tok;
      let tokenBold = boldOn;
      if (hasOpen) {
        const markerCount = (tok.match(/\*\*/g) ?? []).length;
        clean = tok.replace(/\*\*/g, "");
        tokenBold = boldOn || markerCount > 0;
        if (markerCount % 2 === 1) boldOn = !boldOn;
      }
      words.push(clean);
      bold.push(tokenBold);
    });
    if (i < arr.length - 1) {
      words.push("BR");
      bold.push(false);
    }
  });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    const tops = spans.map((s) => s.offsetTop);
    const uniqueTops = Array.from(new Set(tops)).sort((a, b) => a - b);
    setLineOf(spans.map((_, i) => uniqueTops.indexOf(tops[i])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const visible = revealedMount && langVisible;
  let wordIndex = -1;
  return (
    <span ref={containerRef} className={className}>
      {words.map((w, i) => {
        if (w === "BR") return <br key={i} />;
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        wordIndex += 1;
        const line = lineOf[wordIndex] ?? 0;
        // Language-switch re-animation moves every line together (no
        // top-to-bottom stagger) — only the initial mount reveal staggers.
        const delay = !revealedMount ? `${mountStart + line * mountLineStep}ms` : "0ms";
        const duration = !revealedMount ? 320 : visible ? ENTER_DURATION : EXIT_DURATION;
        return (
          <span
            key={i}
            data-word
            className={`inline-block transition-[opacity,transform] ease-out ${bold[i] ? "font-bold text-[#1d1d1d]" : ""}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translate(0, 0)"
                : revealedMount
                  ? "translate(-10px, 0)"
                  : "translate(0, 4px)",
              transitionDuration: `${duration}ms`,
              transitionDelay: delay,
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}

const featured = projects;

// The 5 projects to show in the list, in order.
const TABLE_HREFS = ["/projects/bando", "/project13", "/project3", "/project12", "/robopets"];
const tableProjects = TABLE_HREFS.map((href) => projects.find((p) => p.href === href)).filter(
  (p): p is Project => !!p
);

const copy = {
  es: {
    location: "México",
    role: "Diseñador de marca y producto",
    paragraph:
      "**+10 años** construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.\nExperiencia en industrias **Fintech, Banking and Gouvernment**.",
    fullAboutMe: "Todo sobre mí →",
    cocinemos: "Cocinemos algo juntos",
    verTodos: "Ver todos →",
    tableHeaders: {
      title: "Título del proyecto",
      service: "Servicio",
      client: "Cliente",
      industry: "Industria",
      year: "Año",
    },
  },
  en: {
    location: "Mexico",
    role: "Brand & Product designer",
    paragraph:
      "**+10 years** building identity systems that scale — from the logo to the last screen.\nExperience across **Fintech, Banking and Government** industries.",
    fullAboutMe: "Full about me →",
    cocinemos: "Let's cook something together",
    verTodos: "View all →",
    tableHeaders: {
      title: "Project title",
      service: "Service",
      client: "Client",
      industry: "Industry",
      year: "Year",
    },
  },
};

function yearOf(date: string) {
  const match = date.match(/\d{4}/);
  return match ? match[0] : date;
}

function Pfp({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <FadeIn delay={delay} duration={500} className={`overflow-hidden rounded-full bg-[#f0f0f5] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/design/profile/Bure_PFP.png" alt="Erick A. portrait" className="h-full w-full object-cover" />
    </FadeIn>
  );
}

function UnderlineLink({
  href,
  children,
  external = false,
  delay = 0,
  line,
}: {
  href: string;
  children: string;
  external?: boolean;
  delay?: number;
  /** When set, re-animates this link's text on language switch (see LangText). */
  line?: number;
}) {
  const link = (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-[16px] tracking-[0.16px] text-[#1d1d1d]"
    >
      <Letters text={children} start={delay} step={8} letterClassName="underline underline-offset-2" />
    </a>
  );
  return line === undefined ? link : <LangText line={line}>{link}</LangText>;
}

function ProjectRow({
  project,
  first = false,
  delay,
}: {
  project: Project;
  first?: boolean;
  delay: number;
}) {
  const service = project.tags[0] ?? "—";
  const industry = project.tags[1] ?? project.tags[0] ?? "—";
  return (
    <Block delay={delay} duration={300}>
      <Link
        href={project.href}
        className={`flex items-start gap-4 border-t border-[#909096] py-2 md:gap-0 md:justify-between ${CLICKABLE_ROW_CLASS} ${
          first ? "border-t-0" : ""
        }`}
      >
        <p className="w-[180px] shrink-0 text-[12px] text-[#1d1d1d] md:w-[222px] md:text-[16px] md:tracking-[0.16px]">
          <LangText>{project.name}</LangText>
        </p>
        <p className="hidden shrink-0 text-[16px] tracking-[0.16px] text-[#1d1d1d] md:block md:w-[137px]">
          <LangText>{service}</LangText>
        </p>
        <p className="flex-1 text-[12px] text-[#1d1d1d] md:text-[16px] md:tracking-[0.16px]">
          <LangText>{project.name}</LangText>
        </p>
        <p className="hidden flex-1 text-[16px] tracking-[0.16px] text-[#6e6e73] md:block">
          <LangText>{industry}</LangText>
        </p>
        <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:flex-1 md:text-[16px] md:tracking-[0.16px]">
          <LangText>{yearOf(project.date)}</LangText>
        </p>
      </Link>
    </Block>
  );
}

function ProjectCardV2({ project, delay }: { project: Project; delay: number }) {
  const serviceType = project.tags[0] ?? "";
  return (
    <FadeIn delay={delay} duration={400} className="group">
      <Link href={project.href} className="flex flex-col gap-2">
        <div className="relative h-[200px] w-full overflow-hidden rounded bg-[#1d1d1d]">
          {project.cover ? (
            project.cover.endsWith(".mp4") ? (
              <video
                src={project.cover}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.cover}
                alt={project.name}
                className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
              />
            )
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[12px] font-bold tracking-[0.16px] text-[#1d1d1d] md:text-[16px]">
            <LangText>{project.name}</LangText>
          </p>
          <div className="flex shrink-0 flex-col items-end text-[9px] text-[#1d1d1d] md:text-[12px]">
            <p>
              <LangText>{yearOf(project.date)}</LangText>
            </p>
            <p>
              <LangText>{serviceType}</LangText>
            </p>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function HomeV2Content() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];

  return (
    <RevealProvider>
      <div
        className="grid w-full flex-1 grid-cols-1 gap-10 px-4 py-6 md:fixed md:inset-x-0 md:top-0 md:bottom-0 md:grid-cols-2 md:grid-rows-[auto_1fr] md:items-stretch md:gap-x-10 md:overflow-hidden md:px-10 md:py-0 md:[grid-template-areas:'top_right'_'bottom_right']"
      >
        {/* Top — hero content */}
        <div className="flex flex-col gap-6 md:[grid-area:top]">
          {/* Header — scoped to this column only on desktop (Figma node 3578:39752); mobile keeps the global header */}
          <div className="hidden md:block">
            <HeaderContent />
          </div>

          {/* Head */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-0 text-[#1d1d1d]">
              <div className="flex items-start gap-0 whitespace-nowrap">
                <p className="text-[80px] font-light leading-none">
                  <Letters text="Erick A." start={0} step={12} />
                </p>
                <p className="text-[28px]">
                  <Letters text="(Bure)" start={8 * 12} step={12} />
                </p>
              </div>
              <Block delay={150} duration={300}>
                <p className="text-[28px]">
                  <LangText line={0}>{t.role}</LangText>
                </p>
              </Block>
            </div>
            <Pfp className="hidden h-[140px] w-[140px] md:block" delay={180} />
          </div>

          <Pfp className="h-[160px] w-[160px] md:hidden" delay={180} />

          {/* Paragraph — mobile only, sits between PFP and the link block */}
          <p className="text-[16px] leading-[18.5px] tracking-[0.16px] text-[#6e6e73] md:hidden">
            <LangParagraph text={t.paragraph} mountStart={260} mountLineStep={70} />
          </p>

          {/* Links — desktop: México/LinkedIn left, paragraph+Cocinemos+CV right */}
          <div className="hidden items-start gap-0 md:flex">
            <div className="flex flex-1 flex-col items-start gap-4">
              <Block delay={200} duration={280}>
                <p className="text-[18px] text-[#6e6e73]">
                  <LangText line={0}>{t.location}</LangText>
                </p>
              </Block>
              <UnderlineLink href="/about-me" delay={240} line={0}>
                {t.fullAboutMe}
              </UnderlineLink>
              <UnderlineLink href="https://www.linkedin.com/in/bureboto/" external delay={280}>
                LinkedIn
              </UnderlineLink>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="text-[16px] leading-[18.5px] tracking-[0.16px] text-[#6e6e73]">
                <LangParagraph text={t.paragraph} mountStart={260} mountLineStep={70} />
              </p>
              <UnderlineLink href="mailto:hola@bure.art" delay={420} line={0}>
                {t.cocinemos}
              </UnderlineLink>
            </div>
          </div>

          {/* Links — mobile: México/Full about me left, LinkedIn/Cocinemos right */}
          <div className="flex items-start gap-6 md:hidden">
            <div className="flex flex-1 flex-col items-start gap-4">
              <Block delay={200} duration={280}>
                <p className="text-[18px] text-[#6e6e73]">
                  <LangText line={0}>{t.location}</LangText>
                </p>
              </Block>
              <UnderlineLink href="/about-me" delay={240} line={0}>
                {t.fullAboutMe}
              </UnderlineLink>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4">
              <UnderlineLink href="https://www.linkedin.com/in/bureboto/" external delay={420}>
                LinkedIn
              </UnderlineLink>
              <UnderlineLink href="mailto:hola@bure.art" delay={460} line={0}>
                {t.cocinemos}
              </UnderlineLink>
            </div>
          </div>
        </div>

        {/* Right — featured project grid, scrolls internally on desktop */}
        <div
          id="projects"
          className="scrollbar-hidden grid grid-cols-2 content-start gap-x-2 gap-y-4 rounded-t-[4px] md:[grid-area:right] md:h-full md:gap-x-4 md:gap-y-4 md:overflow-y-auto md:pt-6"
        >
          {featured.map((project, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            return <ProjectCardV2 key={project.href} project={project} delay={row * 90 + col * 50} />;
          })}
        </div>

        {/* Bottom — full project list, with a rotated "Projects" title on desktop */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-4 md:[grid-area:bottom] md:self-end md:pb-6">
          <div className="hidden h-[131px] w-[41px] shrink-0 items-center justify-center md:flex">
            <p className="-rotate-90 whitespace-nowrap text-[36px] font-normal text-[#1d1d1d]">Projects</p>
          </div>
          <div className="flex flex-1 flex-col">
            <Block delay={480} duration={280} className="flex items-start gap-4 pb-1 md:gap-0 md:justify-between md:px-4">
              <p className="w-[180px] shrink-0 text-[12px] text-[#6e6e73] md:w-[222px]">
                <LangText line={0} col={0}>{t.tableHeaders.title}</LangText>
              </p>
              <p className="hidden shrink-0 text-[12px] text-[#6e6e73] md:block md:w-[137px]">
                <LangText line={0} col={0}>{t.tableHeaders.service}</LangText>
              </p>
              <p className="flex-1 text-[12px] text-[#6e6e73]">
                <LangText line={0} col={0}>{t.tableHeaders.client}</LangText>
              </p>
              <p className="hidden flex-1 text-[12px] text-[#6e6e73] md:block">
                <LangText line={0} col={0}>{t.tableHeaders.industry}</LangText>
              </p>
              <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:flex-1">
                <LangText line={0} col={0}>{t.tableHeaders.year}</LangText>
              </p>
            </Block>
            <div className="flex flex-col">
              {tableProjects.map((project, i) => (
                <ProjectRow
                  key={project.href}
                  project={project}
                  first={i === 0}
                  delay={520 + i * 50}
                />
              ))}
            </div>
            <Block delay={520 + tableProjects.length * 50} duration={280} className="border-t border-[#909096] py-2 text-right">
              <UnderlineLink href="/projects" delay={0} line={0}>
                {t.verTodos}
              </UnderlineLink>
            </Block>
          </div>
        </div>
      </div>
    </RevealProvider>
  );
}
