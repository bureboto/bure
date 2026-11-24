"use client";

import { useLanguage } from "@/lib/LanguageContext";

type TableRow = { event: string; place: string; year: string };

const copy = {
  es: {
    bio: {
      intro: "(México, 1992)\nartista multidisciplinario desde 2007.",
      body: "Formado en diseño, el graffiti y ha llevado la estructura de la letra hacia una abstracción orgánica y cromática, apoyado de los contrastes, peso, color y línea.",
      closing: "Gusto por explorar formatos para el ",
      closingBold: "estudio de la forma.",
    },
    contact: "Contact",
    paragraph1: "Hay formas que sostienen la realidad y casi nunca vemos. Mi trabajo consiste en encontrarlas y hacerlas visibles.",
    paragraph1b: "Empecé pintando letras en 2007.\nCon los años la letra dejé de leerla y empecé a ver su estructura, sus curvas, pesos y tensiones.",
    paragraph1c: "De ahí nacen mis composiciones abstractas, orgánicas y cromáticas, con degradados radiales dando la sensación de movimiento con luces y sombras.",
    paragraph1d: "Trabajo con contrastes: gordo y delgado, grotesco y sutil, claro y oscuro, complejo y simple. Son fuerzas que ordenan nuestro entorno y en las que rara vez nos detenemos a observar.",
    inspiration: "Mi inspiración es el día a día, la calle, la naturaleza, las personas.\n\nA veces dejo que el trazo fluya y voy revelando la forma. Otras parto de una letra o de un paisaje y lo desarmo hasta que aparece algo nuevo.",
    quote: "En todos los formatos busco lo mismo: ",
    quoteBold: "hacer visible lo invisible.",
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
    bio: {
      intro: "(Mexico, 1992)\nmultidisciplinary artist since 2007.",
      body: "Trained in design and graffiti, taking the structure of the letter toward an organic, chromatic abstraction, supported by contrasts, weight, color and line.",
      closing: "I enjoy exploring formats for the ",
      closingBold: "study of form.",
    },
    contact: "Contact",
    paragraph1: "There are forms that hold up reality and we almost never see them. My work is about finding them and making them visible.",
    paragraph1b: "I started painting letters in 2007.\nOver the years I stopped reading the letter and began to see its structure, its curves, weights and tensions.",
    paragraph1c: "From there my abstract, organic and chromatic compositions are born, with radial gradients giving a sense of movement through light and shadow.",
    paragraph1d: "I work with contrasts: thick and thin, grotesque and subtle, light and dark, complex and simple. These are forces that order our surroundings and that we rarely stop to notice.",
    inspiration: "My inspiration is everyday life, the street, nature, people.\n\nSometimes I let the stroke flow and let the form reveal itself. Other times I start from a letter or a landscape and take it apart until something new appears.",
    quote: "In every format I look for the same thing: ",
    quoteBold: "making the invisible visible.",
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

function Paragraphs({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <p key={i} className={className}>
          {line}
        </p>
      ))}
    </>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 px-[28px] pb-10 md:gap-5">
      {/* 1 — Bio + photo. DOM order matches the mobile frame (text, then
          image); md:order flips the visual order back to image-left for
          desktop, where the two sit directly next to each other. */}
      <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
        <div className="flex w-full md:order-2 md:w-auto md:flex-1 md:self-stretch">
          <div className="flex w-full flex-col justify-center text-[#1d1d1d] md:w-[314px] md:shrink-0">
            <p className="whitespace-nowrap">
              <span className="text-[48px] font-light leading-none md:text-[80px]">Bure</span>
              <span className="text-[20px] md:text-[28px]">®</span>
            </p>
            <div className="mt-2 flex flex-col gap-4 text-[21px] text-[#1d1d1d] md:gap-2 md:text-[19px]">
              <Paragraphs text={t.bio.intro} />
              <p>{t.bio.body}</p>
              <p>
                {t.bio.closing}
                <strong className="font-bold">{t.bio.closingBold}</strong>
              </p>
            </div>
            <a
              href="mailto:hola@bure.art"
              className="mt-4 text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2"
            >
              {t.contact}
            </a>
          </div>
        </div>

        <div className="relative h-[284px] w-full md:order-1 md:h-auto md:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/About.jpg" alt="Bure" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>

      {/* 2 — Body copy, quote, exhibitions table */}
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-6">
        {/* Left: two paragraph columns */}
        <div className="flex flex-1 flex-col gap-10 md:flex-row md:items-end md:gap-6">
          <div className="flex flex-1 flex-col gap-2 text-[16px] tracking-[0.16px] text-[#1d1d1d]">
            <p>{t.paragraph1}</p>
            <Paragraphs text={t.paragraph1b} />
            <p className="text-[12px] tracking-normal">{t.paragraph1c}</p>
            <p className="text-[12px] tracking-normal">{t.paragraph1d}</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-[12px] text-[#1d1d1d]">
              <Paragraphs text={t.inspiration} />
            </p>
            <div className="w-full max-w-[320px] border-l border-[#909096] pl-4 text-[16px] tracking-[0.16px] text-[#1d1d1d]">
              {t.quote}
              <strong className="font-bold">{t.quoteBold}</strong>
            </div>
          </div>
        </div>

        {/* Right: intro + exhibitions table */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2 text-[12px] text-[#1d1d1d] md:flex-row md:gap-10">
            <p className="flex-1">{t.intro1}</p>
            <p className="flex-1">{t.intro2}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-10 text-[9px] text-[#909096]">
              <p className="flex-1">{t.tableHeaders.event}</p>
              <p className="flex-1">{t.tableHeaders.place}</p>
              <p className="flex-1">{t.tableHeaders.year}</p>
            </div>
            <div className="flex flex-col">
              {t.tableRows.map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-10 py-1 text-[12px] text-[#1d1d1d] ${i > 0 ? "border-t border-[#6e6e73]" : ""}`}
                >
                  <p className="flex-1">{row.event}</p>
                  <p className="flex-1">{row.place}</p>
                  <p className="flex-1">{row.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
