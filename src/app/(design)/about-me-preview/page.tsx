import type { Metadata } from "next";
import ContentGrid from "@/components/ContentGrid";
import { JumboTitle, BodyText } from "@/components/caseStudy/Typography";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type ExperienceItem = { company: string; years: string; description: string };

/** All 7 slots share the same placeholder copy in the Figma frame — swap in the real per-role text/years. */
const experienceItems: ExperienceItem[] = Array.from({ length: 7 }, () => ({
  company: "Espacio",
  years: "(2024-2026)",
  description:
    "Convergieron todas las skills acumuladas hasta este punto: Branding, UX, UI, motion, coding, sistemas de diseño — todo aplicado en productos.",
}));

function Body18({ children }: { children: React.ReactNode }) {
  return <p className="text-[18px] text-[#6e6e73]">{children}</p>;
}

function Focus28({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[28px] text-[#6e6e73] ${className}`}>{children}</p>;
}

function UnderlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2">
      {children}
    </a>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="text-[21px] text-[#1d1d1d]">{item.company}</p>
        <p className="text-[12px] text-[#6e6e73]">{item.years}</p>
      </div>
      <p className="text-[12px] text-[#6e6e73]">{item.description}</p>
    </div>
  );
}

/**
 * About me page, scaffolded from the Figma "About me" section (node
 * 3591:41758): desktop (3591:40804) and mobile (3591:41706) frames. The
 * page's own Header shown in Figma is an in-progress experiment, not
 * built here — this page sits under the existing global DesignHeader.
 * PFP photo: public/design/profile/Bure_PFP.png. Unlisted (noindex,
 * not linked from /home) until reviewed, same as /bando-preview
 * before it went live.
 */
export default function AboutMePreview() {
  return (
    <ContentGrid className="flex flex-col gap-10 py-10 pb-24">
      {/* Name + tagline — full width on both breakpoints */}
      <div className="flex flex-col items-start gap-0 text-[#1d1d1d]">
        <div className="flex items-start gap-0 whitespace-nowrap">
          <p className="text-[48px] font-light leading-none md:text-[80px]">Erick A.</p>
          <p className="text-[20px] md:text-[28px]">(Bure)</p>
        </div>
        <p className="text-[28px]">Brand &amp; Product designer</p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-10">
          {/* PFP — mobile only, sits right under the name */}
          <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full bg-[#f0f0f5] md:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/design/profile/Bure_PFP.png" alt="Erick A. portrait" className="h-full w-full object-cover" />
          </div>

          <div className="flex items-start gap-0">
            <div className="flex flex-1 flex-col gap-4">
              <Body18>México</Body18>
              <UnderlineLink href="https://www.linkedin.com/in/bureboto/">LinkedIn</UnderlineLink>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <UnderlineLink href="mailto:hola@bure.art">Cocinemos algo juntos</UnderlineLink>
              <UnderlineLink href="/cv.pdf">CV</UnderlineLink>
            </div>
          </div>

          <Focus28>
            +10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.
            <br />
            Experiencia en industrias Fintech, Banking and Gouvernment.
          </Focus28>

          <div className="flex flex-col gap-10 md:flex-row">
            <BodyText>
              Mi trabajo vive en el cruce entre marca y producto: desarrollo sistemas visuales sólidos y los
              llevo hasta UX, UI, motion y código, trabajando en sincronía con cada punto de contacto del
              producto.
              <br />
              <br />
              Empecé en 2013 en un despacho de diseño, después pasé al sector gobierno en México, luego a
              BBVA, y de ahí salté al mundo blockchain surfeando las olas de las fintech.
            </BodyText>
            <BodyText>
              Ese recorrido me enseñó a moverme entre reglas rígidas (banca, gobierno) y terrenos sin mapa
              (blockchain) — y a construir sistemas de marca que funcionan en ambos extremos.
              <br />
              <br />
              No me limito a una sola etiqueta: branding, UX, UI, motion y código son ingredientes del mismo
              proceso para mí, no recetas separadas.
            </BodyText>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-10">
          {/* PFP — desktop only */}
          <div className="relative hidden h-[280px] w-[280px] overflow-hidden rounded-full bg-[#f0f0f5] md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/design/profile/Bure_PFP.png" alt="Erick A. portrait" className="h-full w-full object-cover" />
          </div>

          {/* Experience — horizontal label + 3-col grid on desktop, rotated label + single column on mobile */}
          <div className="flex items-start gap-4 md:flex-col md:gap-6">
            <div className="relative h-[501px] w-[92px] shrink-0 md:hidden">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 -rotate-90 items-start gap-0 whitespace-nowrap text-[#1d1d1d]">
                <p className="text-[80px] font-light leading-none">Experience</p>
                <p className="text-[28px]">S. 2013</p>
              </div>
            </div>
            <div className="hidden items-start gap-0 whitespace-nowrap text-[#1d1d1d] md:flex">
              <p className="text-[80px] font-light leading-none">Experience</p>
              <p className="text-[28px]">S. 2013</p>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
              {experienceItems.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentGrid>
  );
}
