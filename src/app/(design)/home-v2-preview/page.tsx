import type { Metadata } from "next";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const featured = projects;
// Placeholder selection — swap these once the final picks are decided.
// Figma: desktop shows 6 rows, mobile shows 5 (the 6th is hidden on mobile below).
const tableProjects = projects.slice(0, 6);

function yearOf(date: string) {
  const match = date.match(/\d{4}/);
  return match ? match[0] : date;
}

function Pfp({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-full bg-[#f0f0f5] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/design/profile/Bure_PFP.png" alt="Erick A. portrait" className="h-full w-full object-cover" />
    </div>
  );
}

function UnderlineLink({ href, children, external = false }: { href: string; children: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2"
    >
      {children}
    </a>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const service = project.tags[0] ?? "—";
  const industry = project.tags[1] ?? project.tags[0] ?? "—";
  return (
    <div className="flex items-start gap-4 border-t border-[#909096] py-2 first:border-t-0 md:gap-0 md:justify-between">
      <p className="w-[180px] shrink-0 text-[12px] text-[#1d1d1d] md:w-[273px] md:text-[16px] md:tracking-[0.16px]">
        {project.name}
      </p>
      <p className="hidden shrink-0 text-[16px] tracking-[0.16px] text-[#1d1d1d] md:block md:w-[137px]">{service}</p>
      <p className="flex-1 text-[12px] text-[#1d1d1d] md:text-[16px] md:tracking-[0.16px]">{project.name}</p>
      <p className="hidden flex-1 text-[16px] tracking-[0.16px] text-[#6e6e73] md:block">{industry}</p>
      <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:flex-1 md:text-[16px] md:tracking-[0.16px]">
        {yearOf(project.date)}
      </p>
    </div>
  );
}

function ProjectCardV2({ project }: { project: Project }) {
  const serviceType = project.tags[0] ?? "";
  return (
    <Link href={project.href} className="group flex flex-col gap-2">
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
        <p className="text-[12px] font-bold tracking-[0.16px] text-[#1d1d1d] md:text-[16px]">{project.name}</p>
        <div className="flex shrink-0 flex-col items-end text-[9px] text-[#1d1d1d] md:text-[12px]">
          <p>{yearOf(project.date)}</p>
          <p>{serviceType}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomeV2Preview() {
  return (
    <div
      className="grid w-full flex-1 grid-cols-1 gap-10 px-4 py-6 md:fixed md:inset-x-0 md:top-[72px] md:bottom-0 md:grid-cols-2 md:items-stretch md:gap-x-10 md:gap-y-6 md:overflow-hidden md:px-10 md:py-6 md:[grid-template-areas:'top_right'_'bottom_right']"
    >
      {/* Top — hero content */}
      <div className="flex flex-col gap-6 md:[grid-area:top]">
          {/* Head */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-0 text-[#1d1d1d]">
              <div className="flex items-start gap-0 whitespace-nowrap">
                <p className="text-[80px] font-light leading-none">Erick A.</p>
                <p className="text-[28px]">(Bure)</p>
              </div>
              <p className="text-[28px]">Brand &amp; Product designer</p>
            </div>
            <Pfp className="hidden h-[140px] w-[140px] md:block" />
          </div>

          <Pfp className="h-[160px] w-[160px] md:hidden" />

          {/* Paragraph — mobile only, sits between PFP and the link block */}
          <p className="text-[12px] text-[#6e6e73] md:hidden">
            +10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.
            <br />
            Experiencia en industrias Fintech, Banking and Gouvernment.
          </p>

          {/* Links — desktop: México/LinkedIn left, paragraph+Cocinemos+CV right */}
          <div className="hidden items-start gap-0 md:flex">
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="text-[18px] text-[#6e6e73]">México</p>
              <UnderlineLink href="/home-v2-preview#projects">Full about me →</UnderlineLink>
              <UnderlineLink href="https://www.linkedin.com/in/bureboto/" external>
                LinkedIn
              </UnderlineLink>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="text-[12px] text-[#6e6e73]">
                +10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.
                <br />
                Experiencia en industrias Fintech, Banking and Gouvernment.
              </p>
              <UnderlineLink href="mailto:hola@bure.art">Cocinemos algo juntos</UnderlineLink>
              <UnderlineLink href="/cv.pdf">CV</UnderlineLink>
            </div>
          </div>

          {/* Links — mobile: México/Full about me left, LinkedIn/Cocinemos/CV right */}
          <div className="flex items-start gap-6 md:hidden">
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="text-[18px] text-[#6e6e73]">México</p>
              <UnderlineLink href="/home-v2-preview#projects">Full about me →</UnderlineLink>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4">
              <UnderlineLink href="https://www.linkedin.com/in/bureboto/" external>
                LinkedIn
              </UnderlineLink>
              <UnderlineLink href="mailto:hola@bure.art">Cocinemos algo juntos</UnderlineLink>
              <UnderlineLink href="/cv.pdf">CV</UnderlineLink>
            </div>
          </div>
      </div>

      {/* Right — featured project grid, scrolls internally on desktop */}
      <div
        id="projects"
        className="grid grid-cols-2 content-start gap-x-2 gap-y-4 md:[grid-area:right] md:h-full md:gap-x-4 md:gap-y-4 md:overflow-y-auto md:pb-6"
      >
        {featured.map((project) => (
          <ProjectCardV2 key={project.href} project={project} />
        ))}
      </div>

      {/* Bottom — full project list */}
      <div className="flex flex-col md:[grid-area:bottom]">
        <div className="flex items-start gap-4 pb-1 md:gap-0 md:justify-between">
          <p className="w-[180px] shrink-0 text-[12px] text-[#6e6e73] md:w-[273px]">Titulo del proyecto</p>
          <p className="hidden shrink-0 text-[12px] text-[#6e6e73] md:block md:w-[137px]">Service</p>
          <p className="flex-1 text-[12px] text-[#6e6e73]">Cliente</p>
          <p className="hidden flex-1 text-[12px] text-[#6e6e73] md:block">Industry</p>
          <p className="shrink-0 text-right text-[12px] text-[#6e6e73] md:flex-1">Year</p>
        </div>
        <div className="flex flex-col">
          {tableProjects.map((project, i) => (
            <div key={project.href} className={i === 5 ? "hidden md:block" : undefined}>
              <ProjectRow project={project} />
            </div>
          ))}
        </div>
        <div className="border-t border-[#909096] py-2 text-right">
          <UnderlineLink href="/projects-glossary-preview">Ver todos →</UnderlineLink>
        </div>
      </div>
    </div>
  );
}
