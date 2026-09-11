import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

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
      className={`grid grid-cols-1 gap-4 ${
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
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Nouns | Devconnect ARG</h1>
          <span className="text-sm text-black/60">Noviembre, 2025 · Brand</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Nouns es una DAO (organización de propiedad colectiva que trabaja hacia una
            misión compartida.) derivada de una colección de NFTs, las personas pueden hacer
            propuestas para realizar actividades en torno a la DAO y la comunidad las acepta
            o rechaza.
          </p>
          <p>
            En esta ocasión me invitaron a colaborar en una prop de hacer una activación en
            Devconnect Argentina, Dándole vida a toda la identidad del stand.
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
          <h2 className="font-bold text-black mb-2">Colaboradores</h2>
          <p>Mono y Lex, miembros de la comunidad de Nouns Amigos.</p>
          <p className="mt-4">El reto era brandear todo un stand dentro de la Devcon.</p>
          <p className="mt-4">
            Nouns tenía un espacio grande en la Devconnect de este año, asi que querian
            brandear todo con ilustraciones, utilizando sus personajes mas iconicos y
            representativos para la comunidad, buscaban a su vez tener consistencia con el
            estilo de dibujo, paleta de colores y comunicación en general.
          </p>
        </div>
        <div>
          <p>
            El principal reto era crear el arte y mandarlo a imprimir a distancia, los
            impresores estaban en Argentina y yo en México.
          </p>
          <p className="mt-4">
            Debía confiar en que las especificaciones y medidas brindadas eran las correctas
            y que el arte se viera justo como lo teníamos diseñado (spoiler alert, pequeños
            detalles de las impresiones no salieron tan bien jeje).
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
          <h2 className="font-bold text-black mb-2">Resultado</h2>
          <p>
            Se ambientó por completo el espacio de Nouns dentro de Devconnect Argentina:
            murales, señalética, ilustraciones para redes y merchandising físico para la
            comunidad que asistió al evento.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Aprendizaje</h2>
          <p>
            Trabajar en equipo a nivel internacional dentro de un espacio significativo con
            personal muy talentoso que compartía la visión del proyecto, fue una experiencia
            muy enriquecedora.
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
