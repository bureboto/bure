import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const l16 = (file: string) => `/design/linea16/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: (string | null)[] }
  | { type: "split"; left: string; right: string[] };

const blocksIntro: Block[] = [{ type: "full", src: l16("1_Linea16_SinLimite.jpg") }];

const blocksTop: Block[] = [
  { type: "grid", items: [l16("2_Linea16_SinLimite.jpg"), l16("3_Linea16_SinLimite.jpg")] },
  { type: "full", src: l16("4_Linea16_SinLimite.mp4") },
];

const blocksMid: Block[] = [
  { type: "full", src: l16("5_Linea16_SinLimite.jpg") },
  {
    type: "grid",
    items: [l16("6_Linea16_SinLimite.mp4"), l16("7_Linea16_SinLimite.mp4")],
  },
  { type: "full", src: l16("8_Linea16_SinLimite.gif") },
  { type: "grid", items: [l16("9_Linea16_SinLimite.gif"), l16("10_Linea16_SinLimite.jpg")] },
  {
    type: "split",
    left: l16("11_Linea16_SinLimite.jpg"),
    right: [l16("12_Linea16_SinLimite.jpg"), l16("13_Linea16_SinLimite.mp4")],
  },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={block.src} alt="Linea 16 – Sin limite" />
        </div>
      </div>
    );
  }

  if (block.type === "split") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ProjectMedia src={block.left} alt="Linea 16 – Sin limite" />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          {block.right.map((src) => (
            <ProjectMedia key={src} src={src} alt="Linea 16 – Sin limite" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 md:grid-rows-2"
      }`}
    >
      {block.items.map((src, i) =>
        src ? (
          <ProjectMedia key={src} src={src} alt="Linea 16 – Sin limite" />
        ) : (
          <div key={i} className="w-full h-full bg-black min-h-[200px]" />
        )
      )}
    </div>
  );
}

export default function Project8() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Linea 16 – Sin limite</h1>
          <span className="text-sm text-black/60">Julio, 2017 · Brand</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Linea 16 es una liga de batallas escritas, concentra a los mejores exponentes de
            hip hop de habla hispana.
          </p>
          <p>
            A este se sumó la intención de dotar a los enfrentamientos de una narrativa que
            trascendiera la batalla, dándole un componente cinemático a cada batalla.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksIntro.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {blocksTop.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            La identidad esta inspirada en una estética urbana y desgastada, con un alto
            contraste entre amarillo y negros, incorporando algunos elementos del vieja Bronx
            a través de fotografías en blanco y negro que ayudaban a contrastar que aporta el
            amarillo.
          </p>
        </div>
        <div>
          <p>
            Se desarrollaron diversas aplicaciones para la marca, abarcando contenido estático
            y multimedia, tanto en linea como fuera de linea.
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
          <p>
            Moodboards, para tener referencias de otros eventos de este tipo que se hayan
            realizado, principalmente busqué referencias en asoleado de información de Red
            Bull Batalla de los Gallos.
          </p>
          <p className="mt-4">
            Con el tema del hip-hop y el graffiti me sentía muy cómodo, ya que es un ambito
            muy cercano a mí, de esos años hacia graffiti y el hip hop era de la música que
            más escuchaba.
          </p>
        </div>
        <div>
          <p>
            En 2020 fue mi primer proyecto grande, de un gran impacto a nivel nacional e
            internacional en el ámbito del hip-hop, puedo decir que fue el proyecto que me dio
            mucha seguridad para confiar en lo que hacía, ya que el apoyo de Linea 16 me dio
            toda la confianza de hacerlo.
          </p>
          <p className="mt-4">
            Brand kit, materiales para redes sociales, impresos y propuestas de merch.
          </p>
          <p className="mt-4">
            Youtube channel (
            <a
              href="https://www.youtube.com/lineadeceroo"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.youtube.com/lineadeceroo
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project8" />
    </ContentGrid>
  );
}
