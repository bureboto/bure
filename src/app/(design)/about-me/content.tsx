"use client";

import { BodyText } from "@/components/caseStudy/Typography";
import { useLanguage } from "@/lib/LanguageContext";
import { LangLetters, LangText, LangParagraph, useDelayedLanguage } from "@/lib/langTransition";
import { RevealProvider, Letters, Block, FadeImage, useRevealed } from "./reveal";
import { CvLink } from "./cv-link";

type ExperienceItem = { company: string; years: string; description: string };

const copy = {
  es: {
    role: "Brand & Product designer",
    location: "México",
    cocinemos: "Cocinemos algo juntos",
    focus:
      "+10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla.\nExperiencia en industrias Fintech, Banking and Gouvernment.",
    paragraph1:
      "Mi trabajo vive en el cruce entre marca y producto: **desarrollo sistemas visuales** sólidos y los llevo hasta UX, UI, motion y código, trabajando en sincronía con cada punto de contacto del producto.\n\n**Empecé en 2013** en un despacho de diseño, después pasé al sector gobierno en México, luego a BBVA, y de ahí salté al mundo blockchain surfeando las olas de las fintech.",
    paragraph2:
      "Ese recorrido me enseñó a moverme entre reglas rígidas (banca, gobierno) y terrenos sin mapa (blockchain) — y a construir sistemas de marca que funcionan en ambos extremos.\n\n**No me limito a una sola etiqueta**: branding, UX, UI, motion y código son ingredientes del mismo proceso para mí, no recetas separadas.",
    experienceItems: [
      {
        company: "Espacio",
        years: "(2024-2026)",
        description:
          "Convergieron todas las skills acumuladas hasta este punto: Branding, UX, UI, motion, coding, sistemas de diseño — todo aplicado en productos.",
      },
      {
        company: "Bueno",
        years: "(2023-2024)",
        description: "Creando pequeños sistemas de ilustraciones, branding, UX y UI.",
      },
      {
        company: "Robotos",
        years: "(2021-2024)",
        description:
          "Mi entrada al mundo cripto. Diseñador e ilustrador en la colección, además de apoyo visual a equipo de markting.",
      },
      {
        company: "BBVA",
        years: "(2019-2021)",
        description:
          "Fui parte del equipo del design system, colaborando con otros países como España, Colombia, Argentina y Estados Unidos. También ayudé en la refactorización de los ATM, fue uno de los proyectos más representativos donde participé en el banco.",
      },
      {
        company: "INE (Instituto Nacional Electoral)",
        years: "(2015-2018)",
        description:
          "Estuve como UX/UI en el equipo que dio un rediseño al sitio web principal, posterior lideré un equipo de diseño interno, para las elecciones nacionales de México en el 2018.",
      },
    ] as ExperienceItem[],
  },
  en: {
    role: "Brand & Product designer",
    location: "Mexico",
    cocinemos: "Let's cook something together",
    focus:
      "+10 years building identity systems that scale — from the logo to the last screen.\nExperience across Fintech, Banking and Government industries.",
    paragraph1:
      "My work lives at the intersection of brand and product: **I develop solid visual systems** and carry them through UX, UI, motion and code, working in sync with every touchpoint of the product.\n\n**I started in 2013** at a design studio, then moved to the government sector in Mexico, then to BBVA, and from there jumped into the blockchain world riding the fintech wave.",
    paragraph2:
      "That journey taught me to move between rigid rules (banking, government) and uncharted territory (blockchain) — and to build brand systems that work at both extremes.\n\n**I don't limit myself to one label**: branding, UX, UI, motion and code are ingredients of the same process for me, not separate recipes.",
    experienceItems: [
      {
        company: "Espacio",
        years: "(2024-2026)",
        description:
          "Everything I'd learned up to this point converged: Branding, UX, UI, motion, coding, design systems — all applied to products.",
      },
      {
        company: "Bueno",
        years: "(2023-2024)",
        description: "Building small illustration systems, branding, UX and UI.",
      },
      {
        company: "Robotos",
        years: "(2021-2024)",
        description:
          "My entry into the crypto world. Designer and illustrator on the collection, plus visual support for the marketing team.",
      },
      {
        company: "BBVA",
        years: "(2019-2021)",
        description:
          "I was part of the design system team, collaborating with other countries like Spain, Colombia, Argentina and the United States. I also helped refactor the ATMs, one of the most representative projects I worked on at the bank.",
      },
      {
        company: "INE (Instituto Nacional Electoral)",
        years: "(2015-2018)",
        description:
          "I was UX/UI on the team that redesigned the main website, then led an internal design team for Mexico's 2018 national elections.",
      },
    ] as ExperienceItem[],
  },
};

function Body18({ children }: { children: React.ReactNode }) {
  return <p className="text-[18px] text-[#6e6e73]">{children}</p>;
}

function Focus28({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[28px] text-[#6e6e73] ${className}`}>{children}</p>;
}

function UnderlineLink({ href, delay, children }: { href: string; delay: number; children: string }) {
  const revealedMount = useRevealed();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2"
    >
      <LangLetters text={children} revealedMount={revealedMount} mountStart={delay} mountStep={10} />
    </a>
  );
}

function ExperienceCard({ item, delay }: { item: ExperienceItem; delay: number }) {
  const revealedMount = useRevealed();
  return (
    <div className="flex flex-col gap-2">
      <Block delay={delay} duration={280} className="flex flex-col gap-1">
        <p className="text-[21px] text-[#1d1d1d]">
          <LangText className="whitespace-normal">{item.company}</LangText>
        </p>
        <p className="text-[12px] text-[#6e6e73]">
          <LangLetters text={item.years} />
        </p>
      </Block>
      <p className="text-[12px] text-[#6e6e73]">
        <LangParagraph text={item.description} revealedMount={revealedMount} mountStart={delay + 60} mountLineStep={55} />
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

function FocusParagraph() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const revealedMount = useRevealed();
  return (
    <LangParagraph
      text={copy[displayLanguage].focus}
      revealedMount={revealedMount}
      mountStart={500}
      mountLineStep={80}
    />
  );
}

function BodyParagraph({ text }: { text: string }) {
  const revealedMount = useRevealed();
  return <LangParagraph text={text} revealedMount={revealedMount} mountStart={650} mountLineStep={60} />;
}

/**
 * About me page, scaffolded from the Figma "About me" section (node
 * 3591:41758): desktop (3591:40804) and mobile (3591:41706) frames. The
 * page's own Header shown in Figma is an in-progress experiment, not
 * built here — this page sits under the existing global DesignHeader.
 * PFP photo: public/design/profile/Bure_PFP.png.
 *
 * Bilingual (es/en) via the shared language context + langTransition
 * system, same as Home — see `copy` above and the Google Doc this is
 * sourced from.
 */
export default function AboutMeContent() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];

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
                  <p className="text-[28px]">
                    <LangLetters text={t.role} />
                  </p>
                </Block>
              </div>

              {/* PFP — mobile only, sits right under the name */}
              <Pfp className="h-[160px] w-[160px] md:hidden" />

              <div className="flex items-start gap-0">
                <div className="flex flex-1 flex-col gap-4">
                  <Block delay={300} duration={280}>
                    <Body18>
                      <LangLetters text={t.location} />
                    </Body18>
                  </Block>
                  <UnderlineLink href="https://www.linkedin.com/in/bureboto/" delay={360}>
                    LinkedIn
                  </UnderlineLink>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <UnderlineLink href="mailto:bureboto@gmail.com" delay={420}>
                    {t.cocinemos}
                  </UnderlineLink>
                  <CvLink delay={480} />
                </div>
              </div>
            </div>

            <Focus28 className="md:pr-[120px]">
              <FocusParagraph />
            </Focus28>

            <div className="flex flex-col gap-10 md:flex-row">
              <BodyText>
                <BodyParagraph text={t.paragraph1} />
              </BodyText>
              <BodyText>
                <BodyParagraph text={t.paragraph2} />
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
                {t.experienceItems.map((item, i) => (
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
