import type { Metadata } from "next";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Bure",
};

function yearOf(date: string) {
  const match = date.match(/\d{4}/);
  return match ? match[0] : date;
}

function ProjectRow({ project, first }: { project: Project; first: boolean }) {
  const service = project.tags[0] ?? "—";
  const industry = project.tags[1] ?? project.tags[0] ?? "—";
  return (
    <Link
      href={project.href}
      className={`group flex items-start gap-4 border-t border-[#909096] py-2 md:gap-0 md:justify-between ${
        first ? "border-t-0" : ""
      }`}
    >
      <p className="w-[180px] shrink-0 text-[12px] text-[#1d1d1d] md:w-[180px] md:text-[16px] md:tracking-[0.16px]">
        {project.name}
      </p>
      <p className="hidden shrink-0 text-[16px] tracking-[0.16px] text-[#1d1d1d] md:block md:w-[160px]">{service}</p>
      <p className="flex-1 text-[12px] text-[#1d1d1d] md:text-[16px] md:tracking-[0.16px]">{project.name}</p>
      <p className="hidden flex-1 text-[16px] tracking-[0.16px] text-[#909096] md:block">{industry}</p>

      {/* Mobile: plain year, no hover interaction */}
      <p className="shrink-0 text-right text-[12px] text-[#909096] md:hidden">{yearOf(project.date)}</p>

      {/* Desktop: on hover, the year shifts left and a reveal arrow fades in */}
      <span className="hidden shrink-0 items-center justify-end gap-1 md:flex md:flex-1">
        <span className="text-[16px] tracking-[0.16px] text-[#909096] transition-transform duration-200 group-hover:-translate-x-2">
          {yearOf(project.date)}
        </span>
        <span aria-hidden className="text-[16px] text-[#909096] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          →
        </span>
      </span>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-10 px-4 py-6 md:px-[120px] md:py-10">
      <p className="text-[48px] font-light leading-none text-[#1d1d1d] md:text-[80px]">Projects</p>

      <div className="flex flex-col">
        <div className="flex items-start gap-4 pb-1 md:gap-0 md:justify-between">
          <p className="w-[180px] shrink-0 text-[12px] text-[#6e6e73] md:w-[180px]">Titulo del proyecto</p>
          <p className="hidden shrink-0 text-[12px] text-[#6e6e73] md:block md:w-[160px]">Service</p>
          <p className="flex-1 text-[12px] text-[#6e6e73]">Cliente</p>
          <p className="hidden flex-1 text-[12px] text-[#6e6e73] md:block">Industry</p>
          <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:flex-1">Year</p>
        </div>
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow key={project.href} project={project} first={i === 0} />
          ))}
        </div>
      </div>

      <footer className="mt-auto flex items-center justify-center py-4 text-[12px] text-[#111]">
        © Erick A. (Bure) {new Date().getFullYear()}. Todos los derechos reservados
      </footer>
    </div>
  );
}
