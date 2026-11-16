import { BodyText } from "@/components/caseStudy/Typography";
import { RevealProvider, Letters, Block, LinesText, FadeImage } from "./reveal";
import { CvLink } from "./cv-link";

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

function UnderlineLink({ href, delay, children }: { href: string; delay: number; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2">
      <Letters text={children} start={delay} />
    </a>
  );
}

function ExperienceCard({ item, delay }: { item: ExperienceItem; delay: number }) {
  return (
    <div className="flex flex-col gap-2">
      <Block delay={delay} duration={280} className="flex flex-col gap-1">
        <p className="text-[21px] text-[#1d1d1d]">{item.company}</p>
        <p className="text-[12px] text-[#6e6e73]">{item.years}</p>
      </Block>
      <p className="text-[12px] text-[#6e6e73]">
        <LinesText text={item.description} start={delay + 60} lineStep={55} duration={280} />
      </p>
    </div>
  );
}

function Pfp({ className = "" }: { className?: string }) {
  return (
    <FadeImage delay={0} duration={2000} className={`relative overflow-hidden rounded-full bg-[#f0f0f5] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/design/profile/Bure_PFP.png" alt="Erick A. portrait" className="h-full w-full object-cover" />
    </FadeImage>
  );
}

/**
 * About me page, scaffolded from the Figma "About me" section (node
 * 3591:41758): desktop (3591:40804) and mobile (3591:41706) frames. The
 * page's own Header shown in Figma is an in-progress experiment, not
 * built here — this page sits under the existing global DesignHeader.
 * PFP photo: public/design/profile/Bure_PFP.png.
 *
 * Full-width (not the site's ContentGrid) to match Figma's edge-to-edge
 * Container. On desktop the Left/Right columns stretch to fill the
 * available viewport height (below the header) and each spread their
 * own blocks with justify-between — on mobile it's a normal scrolling
 * stack instead.
 *
 * Entrance animation (see ./reveal.tsx): everything but the header
 * starts hidden, then reveals top-to-bottom. Short text (name, labels,
 * links, "Experience") animates letter-by-letter; long paragraphs and
 * the Experience item cards fade up as whole blocks instead — splitting
 * hundreds of characters of body copy into per-letter spans would add a
 * lot of DOM weight for a stagger too fast to read as "letter by letter"
 * anyway inside a 2s budget. The PFP fades 0→100% opacity only, no
 * movement, per the request. Last element finishes well under 2s
 * (verified ~1.6s end-to-end).
 */
export default function AboutMePreview() {
  return (
    <RevealProvider>
      <div className="flex w-full flex-1 flex-col px-4 py-6 md:px-10 md:py-4">
        <div className="flex flex-1 flex-col gap-10 md:flex-row md:gap-10">
          {/* Left column */}
          <div className="flex flex-1 flex-col gap-10 md:justify-between md:gap-0">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-0 text-[#1d1d1d]">
                <div className="flex items-start gap-0 whitespace-nowrap">
                  <p className="text-[48px] font-light leading-none md:text-[80px]">
                    <Letters text="Erick A." start={0} step={12} />
                  </p>
                  <p className="text-[20px] md:text-[28px]">
                    <Letters text="(Bure)" start={8 * 12} step={12} />
                  </p>
                </div>
                <Block delay={150} duration={300}>
                  <p className="text-[28px]">Brand &amp; Product designer</p>
                </Block>
              </div>

              {/* PFP — mobile only, sits right under the name */}
              <Pfp className="h-[160px] w-[160px] md:hidden" />

              <div className="flex items-start gap-0">
                <div className="flex flex-1 flex-col gap-4">
                  <Block delay={300} duration={280}>
                    <Body18>México</Body18>
                  </Block>
                  <UnderlineLink href="https://www.linkedin.com/in/bureboto/" delay={360}>
                    LinkedIn
                  </UnderlineLink>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <UnderlineLink href="mailto:hola@bure.art" delay={420}>
                    Cocinemos algo juntos
                  </UnderlineLink>
                  <CvLink delay={480} />
                </div>
              </div>
            </div>

            <Focus28 className="md:pr-[120px]">
              <LinesText
                start={500}
                lineStep={80}
                duration={320}
                text={
                  "+10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.\nExperiencia en industrias Fintech, Banking and Gouvernment."
                }
              />
            </Focus28>

            <div className="flex flex-col gap-10 md:flex-row">
              <BodyText>
                <LinesText
                  start={650}
                  lineStep={60}
                  duration={320}
                  text={
                    "Mi trabajo vive en el cruce entre marca y producto: desarrollo sistemas visuales sólidos y los llevo hasta UX, UI, motion y código, trabajando en sincronía con cada punto de contacto del producto.\n\nEmpecé en 2013 en un despacho de diseño, después pasé al sector gobierno en México, luego a BBVA, y de ahí salté al mundo blockchain surfeando las olas de las fintech."
                  }
                />
              </BodyText>
              <BodyText>
                <LinesText
                  start={650}
                  lineStep={60}
                  duration={320}
                  text={
                    "Ese recorrido me enseñó a moverme entre reglas rígidas (banca, gobierno) y terrenos sin mapa (blockchain) — y a construir sistemas de marca que funcionan en ambos extremos.\n\nNo me limito a una sola etiqueta: branding, UX, UI, motion y código son ingredientes del mismo proceso para mí, no recetas separadas."
                  }
                />
              </BodyText>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-1 flex-col gap-10 md:justify-between md:gap-0">
            {/* PFP — desktop only */}
            <Pfp className="hidden h-[240px] w-[240px] md:block" />

            {/* Experience — horizontal label + 3-col grid on desktop, rotated label + single column on mobile */}
            <div className="flex items-start gap-4 md:flex-col md:gap-6">
              <div className="relative h-[501px] w-[92px] shrink-0 md:hidden">
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 -rotate-90 items-start gap-0 whitespace-nowrap text-[#1d1d1d]">
                  <p className="text-[80px] font-light leading-none">
                    <Letters text="Experience" start={300} step={10} />
                  </p>
                  <p className="text-[28px]">
                    <Letters text="S. 2013" start={400} step={10} />
                  </p>
                </div>
              </div>
              <div className="hidden items-start gap-0 whitespace-nowrap text-[#1d1d1d] md:flex">
                <p className="text-[80px] font-light leading-none">
                  <Letters text="Experience" start={300} step={10} />
                </p>
                <p className="text-[28px]">
                  <Letters text="S. 2013" start={400} step={10} />
                </p>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
                {experienceItems.map((item, i) => (
                  <ExperienceCard key={i} item={item} delay={600 + i * 90} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealProvider>
  );
}
