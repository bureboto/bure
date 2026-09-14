"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const nouns = (file: string) => `/design/nouns/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] };

const blocksBeforeCollab: Block[] = [{ type: "full", src: nouns("1_Nous_ARG.jpg") }];

const blocksAfterCollab: Block[] = [
  { type: "full", src: nouns("2_Nous_ARG.jpg") },
  { type: "full", src: nouns("3_Nous_ARG.gif") },
  { type: "grid", items: [nouns("5_Nous_ARG.gif"), nouns("19_Nous_ARG.jpg")] },
  { type: "full", src: nouns("6_Nous_ARG.jpg") },
  { type: "grid", items: [nouns("7_Cover_Nous_ARG.jpg"), nouns("8_Nous_ARG.jpg")] },
  { type: "grid", items: [nouns("13_Nous_ARG.jpg"), nouns("14_Nous_ARG.jpg")] },
  { type: "full", src: nouns("15_Nous_ARG.jpg") },
  { type: "grid", items: [nouns("16_Nous_ARG.gif"), nouns("17_Nous_ARG.gif"), nouns("18_Nous_ARG.gif")] },
  { type: "full", src: nouns("9_Nous_ARG.jpg") },
  { type: "grid", items: [nouns("10_Nous_ARG.jpg"), nouns("11_Nous_ARG.jpg")] },
  { type: "full", src: nouns("12_Nous_ARG.jpg") },
  { type: "full", src: nouns("4_Nous_ARG.gif") },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="Nouns | Devconnect ARG" />;

  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${
        block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Nouns | Devconnect ARG" />
      ))}
    </div>
  );
}

export default function Project6() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Nouns | Devconnect ARG</h1>
          <span className="text-sm text-black/60">{isEs ? "Noviembre, 2025 · Brand" : "November, 2025 · Brand"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs
              ? "Nouns es una DAO (organización de propiedad colectiva que trabaja hacia una misión compartida.) derivada de una colección de NFTs, las personas pueden hacer propuestas para realizar actividades en torno a la DAO y la comunidad las acepta o rechaza."
              : "Nouns is a DAO (a collectively owned organization working toward a shared mission) derived from an NFT collection — people can submit proposals for activities around the DAO, and the community accepts or rejects them."}
          </p>
          <p>
            {isEs
              ? "En esta ocasión me invitaron a colaborar en una prop de hacer una activación en Devconnect Argentina, Dándole vida a toda la identidad del stand."
              : "This time I was invited to collaborate on a proposal to run an activation at Devconnect Argentina, bringing the entire booth identity to life."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksBeforeCollab.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Colaboradores" : "Collaborators"}</h2>
          <p>{isEs ? "Mono y Lex, miembros de la comunidad de Nouns Amigos." : "Mono and Lex, members of the Nouns Amigos community."}</p>
          <p className="mt-4">{isEs ? "El reto era brandear todo un stand dentro de la Devcon." : "The challenge was to brand an entire booth inside Devcon."}</p>
          <p className="mt-4">
            {isEs
              ? "Nouns tenía un espacio grande en la Devconnect de este año, asi que querian brandear todo con ilustraciones, utilizando sus personajes mas iconicos y representativos para la comunidad, buscaban a su vez tener consistencia con el estilo de dibujo, paleta de colores y comunicación en general."
              : "Nouns had a large space at this year's Devconnect, so they wanted to brand everything with illustrations, using their most iconic and representative characters for the community, while also keeping consistency in drawing style, color palette, and overall communication."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "El principal reto era crear el arte y mandarlo a imprimir a distancia, los impresores estaban en Argentina y yo en México."
              : "The main challenge was creating the art and sending it to be printed remotely — the printers were in Argentina and I was in Mexico."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Debía confiar en que las especificaciones y medidas brindadas eran las correctas y que el arte se viera justo como lo teníamos diseñado (spoiler alert, pequeños detalles de las impresiones no salieron tan bien jeje)."
              : "I had to trust that the specifications and measurements provided were correct and that the art would look exactly as we had designed it (spoiler alert, a few small print details didn't turn out so well haha)."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksAfterCollab.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Resultado" : "Result"}</h2>
          <p>
            {isEs
              ? "Se ambientó por completo el espacio de Nouns dentro de Devconnect Argentina: murales, señalética, ilustraciones para redes y merchandising físico para la comunidad que asistió al evento."
              : "We fully dressed the Nouns space at Devconnect Argentina: murals, signage, illustrations for social media, and physical merchandising for the community that attended the event."}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Aprendizaje" : "Learnings"}</h2>
          <p>
            {isEs
              ? "Trabajar en equipo a nivel internacional dentro de un espacio significativo con personal muy talentoso que compartía la visión del proyecto, fue una experiencia muy enriquecedora."
              : "Working as a team internationally, within a meaningful space alongside very talented people who shared the project's vision, was a very enriching experience."}
          </p>
          <p className="mt-4">
            IG (
            <a
              href="https://www.instagram.com/nounsargentina"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.instagram.com/nounsargentina
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project6" />
    </ContentGrid>
  );
}
