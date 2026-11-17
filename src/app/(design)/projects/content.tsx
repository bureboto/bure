"use client";

import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";
import { CLICKABLE_ROW_CLASS } from "@/lib/listRow";
import { LangLetters, LangText, useDelayedLanguage } from "@/lib/langTransition";
import { useHoverPreview, HoverPreviewBox } from "@/lib/hoverPreview";

const copy = {
  es: {
    title: "Projects",
    tableHeaders: {
      title: "Título del proyecto",
      service: "Servicio",
      client: "Cliente",
      industry: "Industria",
      year: "Año",
    },
    footer: (year: number) => `© Erick A. (Bure) ${year}. Todos los derechos reservados`,
  },
  en: {
    title: "Projects",
    tableHeaders: {
      title: "Project title",
      service: "Service",
      client: "Client",
      industry: "Industry",
      year: "Year",
    },
    footer: (year: number) => `© Erick A. (Bure) ${year}. All rights reserved`,
  },
};

function yearOf(date: string) {
  const match = date.match(/\d{4}/);
  return match ? match[0] : date;
}

function ProjectRow({
  project,
  first,
  onRowMouseMove,
  onRowMouseLeave,
}: {
  project: Project;
  first: boolean;
  onRowMouseMove: (e: React.MouseEvent, cover: string | undefined) => void;
  onRowMouseLeave: () => void;
}) {
  const service = project.tags[0] ?? "—";
  const industry = project.tags[1] ?? project.tags[0] ?? "—";
  return (
    <Link
      href={project.href}
      onMouseMove={(e) => onRowMouseMove(e, project.cover)}
      onMouseLeave={onRowMouseLeave}
      className={`flex items-start gap-4 border-t border-[#909096] py-2 md:gap-0 ${CLICKABLE_ROW_CLASS} ${
        first ? "border-t-0" : ""
      }`}
    >
      <p className="w-[180px] shrink-0 text-[12px] text-[#1d1d1d] md:w-[40%] md:text-[16px] md:tracking-[0.16px]">
        <LangText className="whitespace-normal">{project.name}</LangText>
      </p>
      <p className="hidden shrink-0 text-[16px] tracking-[0.16px] text-[#1d1d1d] md:block md:w-[20%]">
        <LangText className="whitespace-normal">{service}</LangText>
      </p>
      <p className="flex-1 text-[12px] text-[#1d1d1d] md:w-[20%] md:flex-none md:text-[16px] md:tracking-[0.16px]">
        <LangText className="whitespace-normal">{project.name}</LangText>
      </p>
      <p className="hidden flex-1 text-[16px] tracking-[0.16px] text-[#909096] md:block md:w-[15%] md:flex-none">
        <LangText className="whitespace-normal">{industry}</LangText>
      </p>
      <p className="shrink-0 text-right text-[12px] text-[#909096] md:w-[5%] md:text-[16px] md:tracking-[0.16px]">
        <LangLetters text={yearOf(project.date)} />
      </p>
    </Link>
  );
}

export default function ProjectsContent() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];
  const year = new Date().getFullYear();
  const { previewRef, cover, visible, onRowMouseMove, onRowMouseLeave } = useHoverPreview();

  return (
    <div className="flex w-full flex-1 flex-col gap-10 px-4 py-6 md:px-[240px] md:py-10">
      <p className="text-[48px] font-light leading-none text-[#1d1d1d] md:text-[80px]">
        <LangLetters text={t.title} />
      </p>

      <div className="flex flex-col">
        <div className="flex items-start gap-4 pb-1 md:gap-0 md:px-4">
          <p className="w-[180px] shrink-0 text-[12px] text-[#6e6e73] md:w-[40%]">
            <LangLetters text={t.tableHeaders.title} />
          </p>
          <p className="hidden shrink-0 text-[12px] text-[#6e6e73] md:block md:w-[20%]">
            <LangLetters text={t.tableHeaders.service} />
          </p>
          <p className="flex-1 text-[12px] text-[#6e6e73] md:w-[20%] md:flex-none">
            <LangLetters text={t.tableHeaders.client} />
          </p>
          <p className="hidden flex-1 text-[12px] text-[#6e6e73] md:block md:w-[15%] md:flex-none">
            <LangLetters text={t.tableHeaders.industry} />
          </p>
          <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:w-[5%]">
            <LangLetters text={t.tableHeaders.year} />
          </p>
        </div>
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.href}
              project={project}
              first={i === 0}
              onRowMouseMove={onRowMouseMove}
              onRowMouseLeave={onRowMouseLeave}
            />
          ))}
          <HoverPreviewBox previewRef={previewRef} cover={cover} visible={visible} />
        </div>
      </div>

      <footer className="mt-auto flex items-center justify-center py-4 text-[12px] text-[#111]">
        <LangText>{t.footer(year)}</LangText>
      </footer>
    </div>
  );
}
