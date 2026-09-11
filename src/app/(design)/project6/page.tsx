import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const nouns = (file: string) => `/design/nouns/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] };

const introBlocks: Block[] = [
  { type: "full", src: nouns("1_Nous_ARG.jpg") },
  { type: "full", src: nouns("2_Nous_ARG.jpg") },
  { type: "full", src: nouns("3_Nous_ARG.gif") },
  { type: "grid", items: [nouns("6_Nous_ARG.jpg"), nouns("19_Nous_ARG.jpg")] },
  { type: "full", src: nouns("5_Nous_ARG.gif") },
  { type: "grid", items: [nouns("12_Nous_ARG.jpg"), nouns("7_Cover_Nous_ARG.jpg")] },
  { type: "full", src: nouns("8_Nous_ARG.jpg") },
  { type: "full", src: nouns("9_Nous_ARG.jpg") },
];

const outroBlocks: Block[] = [
  { type: "full", src: nouns("4_Nous_ARG.gif") },
  { type: "full", src: nouns("10_Nous_ARG.jpg") },
  { type: "full", src: nouns("11_Nous_ARG.jpg") },
  { type: "full", src: nouns("13_Nous_ARG.jpg") },
  { type: "full", src: nouns("14_Nous_ARG.jpg") },
  { type: "full", src: nouns("15_Nous_ARG.jpg") },
  { type: "full", src: nouns("16_Nous_ARG.gif") },
  { type: "grid", items: [nouns("17_Nous_ARG.gif"), nouns("18_Nous_ARG.gif")] },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="Nouns | Devconnect ARG" />;

  return (
    <div
      className={`grid grid-cols-1 gap-4 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
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
            Nouns Arg es una DAO de propiedad colectiva que trabaja hacia una economía web3
            abierta y de código libre. Para Devconnect Argentina me invitaron a ilustrar y
            ambientar por completo su espacio dentro del evento.
          </p>
          <div>
            <h2 className="font-bold text-black mb-2">Colaboradores</h2>
            <p>
              Bruno y Luc, miembros de la comunidad de Nouns Amigos. El resto son parte del
              equipo de Devconnect Argentina.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {introBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            Fue un proyecto de trabajo en el que Mono y yo desconocíamos que se trataba de
            una relación con toda la comunidad, aprendiendo en equipo el uso de la Devcon.
          </p>
          <p className="mt-4">
            Una vez con la compilación de los lineamientos que debíamos aterrizar, hicimos
            exploración de moodboard y bocetos, definimos paleta de colores y personajes que
            debían de mantener el estilo del universo Nouns.
          </p>
        </div>
        <div>
          <p>
            Al terminar todos los bocetos se procesó a producción, para hacer realidad los
            murales de gran formato en el espacio. También se produjeron piezas físicas como
            calendarios, playeras, stickers y demás material de merchandising para la
            comunidad durante los días del evento.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {outroBlocks.map((block, i) => (
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
