"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const bando = (file: string) => `/design/bando/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "wide"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string[] }
  | { type: "matchHeight"; cover: string; reference: string };

const blockHero: Block = { type: "split", left: bando("1_Bando.jpg"), right: [bando("2_Bando.jpg")] };

const blocksMid: Block[] = [
  { type: "full", src: bando("3_Bando.jpg") },
];

const blocksLower: Block[] = [
  { type: "wide", src: bando("8_Bando.mp4") },
  { type: "matchHeight", cover: bando("4_Bando.jpg"), reference: bando("5_Bando.jpg") },
  { type: "full", src: bando("6_Bando.jpg") },
  {
    type: "grid",
    items: [bando("9_Bando.mp4"), bando("10_Bando.mp4"), bando("12_Bando.mp4"), bando("13_Bando.mp4")],
  },
  { type: "full", src: bando("7_Bando.jpg") },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "wide") {
    return <ProjectMedia src={block.src} alt="Bando" />;
  }

  if (block.type === "full") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={block.src} alt="Bando" />
        </div>
      </div>
    );
  }

  if (block.type === "split") {
    return (
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ProjectMedia src={block.left} alt="Bando" />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          {block.right.map((src) => (
            <ProjectMedia key={src} src={src} alt="Bando" />
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "matchHeight") {
    return (
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full min-h-0">
          <ProjectMedia src={block.cover} alt="Bando" className="w-full h-full object-cover" />
        </div>
        <ProjectMedia src={block.reference} alt="Bando" />
      </div>
    );
  }

  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Bando" />
      ))}
    </div>
  );
}

const linkClass = "underline underline-offset-4";

export default function Project10() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Bando</h1>
          <span className="text-sm text-black/60">2024 – 2025 · Brand | Design System | UX/UI</span>
        </div>
        <p className="max-w-2xl text-black/70">
          {isEs
            ? "Bando, fintech que busca conectar la blockchain y el procesamiento de pagos con la banca tradicional, conectando servicios y la bolsa de valores a usuarios finales."
            : "Bando, a fintech connecting blockchain and payment processing with traditional banking — bringing services and the stock market to end users."}
        </p>
      </div>

      <MediaBlock block={blockHero} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Mi aporte" : "My contribution"}</h2>
          <p>
            {isEs ? (
              <>
                Fui el diseñador principal del proyecto. Trabajé muy de la mano con{" "}
                <a href="https://www.linkedin.com/in/abrahamcobos/" target="_blank" rel="noreferrer" className={linkClass}>
                  Ab
                </a>
                , haciendo research, UI testings, mockups, testeando ideas y prototipos.
              </>
            ) : (
              <>
                I was the lead designer on the project. I worked closely with{" "}
                <a href="https://www.linkedin.com/in/abrahamcobos/" target="_blank" rel="noreferrer" className={linkClass}>
                  Ab
                </a>
                , doing research, UI testing, mockups, and testing ideas and prototypes.
              </>
            )}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Nuestro objetivo era hacer un producto escalable, que contará con un sistema de diseño que se pueda adaptar a los clientes potenciales para implementarlo de manera fluida."
              : "Our goal was to build a scalable product, with a design system that could adapt to potential clients for a smooth implementation."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Para que todo esto funcionara, fue prioritario de inicio tener un branding, un sistema de diseño y una UI hacia los clientes. Constantemente se tenía que trabajar con el equipo dev para comunicar y sincronizar las implementaciones que se tenían en producto y conocer la viabilidad de estas."
              : "For all of this to work, it was a priority from day one to have branding, a design system, and a UI for clients. We constantly had to work with the dev team to communicate and sync up product implementations and understand their feasibility."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksMid.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Proceso" : "Process"}</h2>
          <p>
            {isEs ? (
              <>
                Se hacía un research y pruebas de usuario constante, era mucho de prueba, error e
                iteración. En Bando teníamos la facilidad de conseguir clientes potenciales, ya que
                se contaba con la comunidad de{" "}
                <a href="https://www.instagram.com/espacio.media/" target="_blank" rel="noreferrer" className={linkClass}>
                  Espacio
                </a>
                , entonces nuestros usuarios estaban a un mensaje de distancia.
              </>
            ) : (
              <>
                We did constant research and user testing — a lot of trial, error, and iteration.
                At Bando we had an edge in reaching potential clients, since we had{" "}
                <a href="https://www.instagram.com/espacio.media/" target="_blank" rel="noreferrer" className={linkClass}>
                  Espacio
                </a>
                &apos;s community behind us, so our users were just a message away.
              </>
            )}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Partiendo de los resultados de los test, regresaba a los wireframes de baja fidelidad, iterábamos y puliamos el producto, encontrando patrones de errores, aciertos y buscando formas de optimizar nuestro producto. Equivocarnos rápido, actuar rápido, fue nuestra bandera."
              : "Based on the test results, I'd go back to low-fidelity wireframes — we'd iterate and polish the product, finding patterns of errors and wins, and looking for ways to optimize it. Fail fast, act fast was our flag."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksLower.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Resultado" : "Result"}</h2>
          <p>
            {isEs
              ? "Al finalizar el MVP del proyecto, conseguimos tener nuestro Brand Kit que también incluía un apartado de UI Kit, lineamientos editoriales para reportes y Motions kit de interacciones."
              : "By the end of the project's MVP, we had our Brand Kit, which also included a UI Kit, editorial guidelines for reports, and a motion kit for interactions."}
          </p>
          <p className="mt-4">
            {isEs
              ? "El producto pasó a la fase de implementación con clientes potenciales."
              : "The product moved on to the implementation phase with potential clients."}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Aprendizaje" : "Learnings"}</h2>
          <p>
            {isEs
              ? "Trabajar con las diferentes áreas de Bando fue enriquecedor, buscando que el producto lograra sacar su máximo potencial, corriendo riesgos y abriendo nuevos. Colaborar con mas personas siempre es gratificante al contemplar todos los puntos débiles y fuertes del producto, ayudando a su optimización."
              : "Working across Bando's different areas was enriching, always pushing the product toward its full potential, taking risks and opening new ones. Collaborating with more people is always rewarding when you consider all of a product's weak and strong points, helping optimize it."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Ver el resultado de este gran proyecto es muy gratificante, ya que fueron muchas horas de trabajo, debate, diseño y mucha prueba y error."
              : "Seeing the result of this great project is very rewarding, since it took many hours of work, debate, design, and a lot of trial and error."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Bando quedó en una muy buena posición para la conexión de banca tradicional y la blockchain en el procesamiento de pagos e inversiones, lo mejor de todo, sin que el usuario sienta frustración de no conocer los temas nuevos de cripto."
              : "Bando ended up in a great position to connect traditional banking and blockchain for payment processing and investments — best of all, without users feeling frustrated by not knowing the new world of crypto."}
          </p>
          <p className="mt-4">
            LinkedIn (
            <a
              href="https://www.linkedin.com/company/bando-cool/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              https://www.linkedin.com/company/bando-cool/posts/?feedView=all
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project10" />
    </ContentGrid>
  );
}
