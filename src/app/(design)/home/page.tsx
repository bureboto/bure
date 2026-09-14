"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/lib/LanguageContext";

const timeline = [
  {
    company: { es: "Espacio", en: "Espacio" },
    years: "2024-2026",
    description: {
      es: "Convergieron todas las skills acumuladas hasta este punto: Branding, UX, UI, motion, coding, sistemas de diseño — todo aplicado en productos.",
      en: "Converged skills accumulated up to this point: branding, UX, UI, motion, coding, design systems — applied to brand, products, social media and events.",
    },
  },
  {
    company: { es: "Bueno", en: "Bueno" },
    years: "2021-2024",
    description: {
      es: "Mi entrada al mundo cripto, creando pequeños sistemas de ilustraciones, branding, UX y UI.",
      en: "My entry to the crypto world, creating small illustration systems, branding, UX and UI.",
    },
  },
  {
    company: { es: "BBVA", en: "BBVA" },
    years: "2019-2021",
    description: {
      es: "Trabajé directamente en el sistema de diseño del banco, colaborando con otros países como España, Colombia, Argentina y Estados Unidos. También ayudé en la refactorización de los ATM, fue uno de los proyectos más representativos donde participé en el banco.",
      en: "I worked on the design system of the bank, collaborating with other countries like Spain, Colombia, Argentina and the United States. I also helped with the ATM redesign, one of the most representative projects I worked on at the bank.",
    },
  },
  {
    company: { es: "INE (Instituto Nacional Electoral)", en: "INE (National Electoral Institute)" },
    years: "2015-2018",
    description: {
      es: "Estuve como UX/UI en el equipo que dio un rediseño al sitio web principal, posterior lideré un equipo de diseño interno, para las elecciones nacionales de México en el 2018.",
      en: "I worked as a UX/UI designer on the team that redesigned the main website, and afterward led an internal design team for the national elections in Mexico in 2018.",
    },
  },
  {
    company: { es: "Despacho de diseño", en: "Design Studio" },
    years: "2013-2015",
    description: {
      es: "Mi primer acercamiento al diseño profesional. Empecé haciendo branding y diseño web, justo aquí es donde el UX/UI empezó a tomar fuerza en mi carrera.",
      en: "My first introduction to professional design. I started doing branding and web design — this is where UX/UI began to gain momentum in my career.",
    },
  },
  {
    company: { es: "Universidad Insurgentes", en: "Universidad Insurgentes" },
    years: "2010-2013",
    description: {
      es: "Cursé la licenciatura en Diseño Gráfico en la Ciudad de México.",
      en: "I studied Graphic Design in Mexico City.",
    },
  },
  {
    company: { es: "Nací :)", en: "I was born :)" },
    years: "1992",
    description: { es: "", en: "" },
  },
];

export default function DesignHome() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="w-full px-[28px] pb-16 flex flex-col gap-16">
      {/* Bio / hero */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl">Erick Alvarez (Bure)</h1>
          </div>
          <div>
            <p>{isEs ? "Ciudad de México" : "Mexico City, MX"}</p>
            <p>{isEs ? "34 años" : "34yo"}</p>
          </div>
          <p className="text-black/70">
            {isEs
              ? "Diseñador de marca y producto, con más de 10 años construyendo sistemas de identidad que escalan — desde el logo hasta la última pantalla."
              : "Brand & Product Designer — more than 10 years building scalable identity systems, from the logo to the last screen."}
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-1">
              <span>t. 56 5232 0560</span>
              <a href="mailto:bureboto@gmail.com" className="underline underline-offset-4">
                bureboto@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1 text-black/70">
              <span>{isEs ? "Español (Nativo)" : "Spanish (Native)"}</span>
              <span>{isEs ? "Inglés (B1)" : "English (B1)"}</span>
            </div>
          </div>
          <div className="text-sm text-black/70">
            <a
              href="https://www.linkedin.com/in/bureboto/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              linkedin.com/in/bureboto
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-black/70">
          <p>
            {isEs
              ? "Mi trabajo vive en el cruce entre marca y producto: desarrollo sistemas visuales sólidos y los llevo hasta UX, UI, motion y código, trabajando en sincronía con cada punto de contacto del producto."
              : "My work lives between brand and product: I develop solid visual systems and take them through UX, UI, motion and code — working in sync with every touchpoint of the product."}
          </p>
          <p>
            {isEs
              ? "Empecé en 2013 en un despacho de diseño, después pasé al sector gobierno en México, luego a BBVA, y de ahí salté al mundo blockchain surfeando las olas de las fintech."
              : "I started in 2013 at a design studio, then moved to the government sector in Mexico, after that to BBVA, and from there jumped into the blockchain world, surfing the fintech waves."}
          </p>
          <p>
            {isEs
              ? "Ese recorrido me enseñó a moverme entre reglas rígidas (banca, gobierno) y terrenos sin mapa (blockchain) — y a construir sistemas de marca que funcionan en ambos extremos."
              : "That journey taught me to move between rigid rules (banking, government) and uncharted territory (blockchain) — and to build brand systems that work on both extremes."}
          </p>
          <p>
            {isEs
              ? "No me limito a una sola etiqueta: branding, UX, UI, motion y código son ingredientes del mismo proceso para mí, no recetas separadas."
              : "I don't limit myself to a single label: branding, UX, UI, motion and code are ingredients of the same process for me, not separate recipes."}
          </p>
          <a href="mailto:bureboto@gmail.com" className="underline underline-offset-4 text-black">
            {isEs ? "Cocinemos algo juntos." : "Let's cook something together."}
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/design/profile/pfp-bure.jpg"
              alt="Bure"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="overflow-x-auto scrollbar-hidden -mr-[28px] pt-2">
        <div className="flex min-w-max border-t border-black/20 pt-8 gap-16">
          {timeline.map((item) => (
            <div key={item.years + item.company.en} className="w-72 flex flex-col gap-3 relative">
              <span className="absolute -top-[35px] left-0 w-2 h-2 rounded-full bg-black" />
              <h3 className="text-lg flex flex-col">
                <span className="text-sm text-black/60">{item.years}</span>
                {isEs ? item.company.es : item.company.en}
              </h3>
              <p className="text-sm text-black/70">{isEs ? item.description.es : item.description.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">{isEs ? "Proyectos" : "Projects"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
