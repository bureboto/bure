"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { LangText, LangParagraph, useDelayedLanguage } from "@/lib/langTransition";
import { RevealProvider, Letters, Block, FadeIn, useRevealed } from "@/lib/reveal";

type TableRow = { event: string; place: string; year: string };

const copy = {
  es: {
    bio: "(México, 1992)\nartista multidisciplinario desde 2007.\n\nFormado en diseño, el graffiti y ha llevado la estructura de la letra hacia una abstracción orgánica y cromática, apoyado de los contrastes, peso, color y línea.\n\nGusto por explorar formatos para el **estudio de la forma.**",
    contact: "Contact",
    paragraph1: "Hay formas que sostienen la realidad y casi nunca vemos. Mi trabajo consiste en encontrarlas y hacerlas visibles.\n\nEmpecé pintando letras en 2007.\nCon los años la letra dejé de leerla y empecé a ver su estructura, sus curvas, pesos y tensiones.",
    paragraph1Small: "De ahí nacen mis composiciones abstractas, orgánicas y cromáticas, con degradados radiales dando la sensación de movimiento con luces y sombras.\n\nTrabajo con contrastes: gordo y delgado, grotesco y sutil, claro y oscuro, complejo y simple. Son fuerzas que ordenan nuestro entorno y en las que rara vez nos detenemos a observar.",
    inspiration: "Mi inspiración es el día a día, la calle, la naturaleza, las personas.\n\nA veces dejo que el trazo fluya y voy revelando la forma. Otras parto de una letra o de un paisaje y lo desarmo hasta que aparece algo nuevo.",
    quote: "En todos los formatos busco lo mismo: **hacer visible lo invisible.**",
    intro1: "Ha participado en festivales como Meeting of Styles de 2019 a 2025, en Quintana Roo, Guadalajara y el Estado de México.",
    intro2: "Presentó la exposición Luces y sombras en la Casa Taller Alfredo Zalce, en Morelia (2022), y formó parte de una exhibición de arte digital, Bueno Art Gallery, Nueva York (2023).",
    tableHeaders: { event: "Evento", place: "Lugar", year: "Año" },
    tableRows: [
      { event: "Meeting of styles", place: "MX", year: "2015, 2019-2024" },
      { event: "Bueno Galery NYC", place: "New York, US", year: "Abril, 2023" },
      { event: "Solo show “Luces y Sombras”", place: "Morelia, Casa Zalce, MX", year: "Noviembre, 2022" },
    ] as TableRow[],
  },
  en: {
    bio: "(Mexico, 1992)\nmultidisciplinary artist since 2007.\n\nTrained in design and graffiti, taking the structure of the letter toward an organic, chromatic abstraction, supported by contrasts, weight, color and line.\n\nI enjoy exploring formats for the **study of form.**",
    contact: "Contact",
    paragraph1: "There are forms that hold up reality and we almost never see them. My work is about finding them and making them visible.\n\nI started painting letters in 2007.\nOver the years I stopped reading the letter and began to see its structure, its curves, weights and tensions.",
    paragraph1Small: "From there my abstract, organic and chromatic compositions are born, with radial gradients giving a sense of movement through light and shadow.\n\nI work with contrasts: thick and thin, grotesque and subtle, light and dark, complex and simple. These are forces that order our surroundings and that we rarely stop to notice.",
    inspiration: "My inspiration is everyday life, the street, nature, people.\n\nSometimes I let the stroke flow and let the form reveal itself. Other times I start from a letter or a landscape and take it apart until something new appears.",
    quote: "In every format I look for the same thing: **making the invisible visible.**",
    intro1: "They have taken part in festivals like Meeting of Styles from 2019 to 2025, in Quintana Roo, Guadalajara and the State of Mexico.",
    intro2: "They presented the exhibition Luces y sombras (Lights and Shadows) at Casa Taller Alfredo Zalce, in Morelia (2022), and took part in a digital art exhibition, Bueno Art Gallery, New York (2023).",
    tableHeaders: { event: "Event", place: "Place", year: "Year" },
    tableRows: [
      { event: "Meeting of styles", place: "MX", year: "2015, 2019-2024" },
      { event: "Bueno Galery NYC", place: "New York, US", year: "April 2023" },
      { event: "Solo show “Luces y Sombras”", place: "Morelia, Casa Zalce, MX", year: "November 2022" },
    ] as TableRow[],
  },
};

function BioParagraph({
  text,
  delay = 420,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const revealedMount = useRevealed();
  return (
    <p className={className}>
      <LangParagraph text={text} revealedMount={revealedMount} mountStart={delay} mountLineStep={60} />
    </p>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const displayLanguage = useDelayedLanguage(language);
  const t = copy[displayLanguage];

  return (
    <RevealProvider>
      <div className="flex flex-1 flex-col justify-between gap-8 px-[28px] pb-10 md:gap-5">
        {/* 1 — Bio + photo. DOM order matches the mobile frame (text, then
            image); md:order flips the visual order back to image-left for
            desktop, where the two sit directly next to each other. */}
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
          <div className="flex w-full md:order-2 md:w-auto md:flex-1 md:self-stretch">
            <div className="flex w-full flex-col justify-center text-[#1d1d1d] md:w-[314px] md:shrink-0">
              <p className="whitespace-nowrap">
                <span className="text-[48px] font-light leading-none md:text-[80px]">
                  <Letters text="Bure" start={0} step={30} />
                </span>
                <span className="text-[20px] md:text-[28px]">
                  <Letters text="®" start={120} step={30} />
                </span>
              </p>
              <div className="mt-2 flex flex-col gap-4 text-[21px] text-[#1d1d1d] md:gap-2 md:text-[19px]">
                <BioParagraph text={t.bio} />
              </div>
              <Block delay={760} duration={300}>
                <a
                  href="mailto:bureboto@gmail.com"
                  className="mt-4 inline-block text-[16px] tracking-[0.16px] text-[#1d1d1d]"
                >
                  <LangText className="underline underline-offset-2">{t.contact}</LangText>
                </a>
              </Block>
            </div>
          </div>

          <FadeIn delay={180} duration={600} className="relative h-[284px] w-full md:order-1 md:h-auto md:flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/About.jpg" alt="Bure" className="absolute inset-0 h-full w-full object-cover" />
          </FadeIn>
        </div>

        {/* 2 — Body copy, quote, exhibitions table */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-6">
          {/* Left: two paragraph columns */}
          <div className="flex flex-1 flex-col gap-10 md:flex-row md:items-end md:gap-6">
            <div className="flex flex-1 flex-col gap-2 text-[16px] tracking-[0.16px] text-[#1d1d1d]">
              <BioParagraph text={t.paragraph1} delay={520} />
              <BioParagraph text={t.paragraph1Small} delay={640} className="text-[12px] tracking-normal" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <BioParagraph text={t.inspiration} delay={560} className="text-[12px] text-[#1d1d1d]" />
              <Block delay={900} duration={300}>
                <div className="w-full max-w-[320px] border-l border-[#909096] pl-4 text-[16px] tracking-[0.16px] text-[#1d1d1d]">
                  <LangParagraph text={t.quote} />
                </div>
              </Block>
            </div>
          </div>

          {/* Right: intro + exhibitions table */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-2 text-[12px] text-[#1d1d1d] md:flex-row md:gap-10">
              <BioParagraph text={t.intro1} delay={700} className="flex-1" />
              <BioParagraph text={t.intro2} delay={760} className="flex-1" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-10 text-[9px] text-[#909096]">
                <p className="flex-1">
                  <LangText>{t.tableHeaders.event}</LangText>
                </p>
                <p className="flex-1">
                  <LangText>{t.tableHeaders.place}</LangText>
                </p>
                <p className="flex-1">
                  <LangText>{t.tableHeaders.year}</LangText>
                </p>
              </div>
              <div className="flex flex-col">
                {t.tableRows.map((row, i) => (
                  <div
                    key={i}
                    className={`flex gap-10 py-1 text-[12px] text-[#1d1d1d] ${i > 0 ? "border-t border-[#6e6e73]" : ""}`}
                  >
                    <p className="flex-1">
                      <LangText className="whitespace-normal">{row.event}</LangText>
                    </p>
                    <p className="flex-1">
                      <LangText className="whitespace-normal">{row.place}</LangText>
                    </p>
                    <p className="flex-1">
                      <LangText className="whitespace-normal">{row.year}</LangText>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealProvider>
  );
}
