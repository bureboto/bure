"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const l16 = (file: string) => `/design/linea16-sinsalida/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string[] };

const blocksIntro: Block[] = [{ type: "full", src: l16("1_Cover_Linea16_SinLimite.jpg") }];

const blocksTop: Block[] = [{ type: "full", src: l16("5_Linea16_SinLimite.gif") }];

const blocksMid: Block[] = [
  {
    type: "grid",
    items: [
      l16("6_Linea16_SinLimite.jpg"),
      l16("7_Linea16_SinLimite.jpg"),
      l16("8_Linea16_SinLimite.jpg"),
    ],
  },
  { type: "full", src: l16("9_Linea16_SinLimite.mp4") },
];

const blocksBottom: Block[] = [
  {
    type: "split",
    left: l16("10_Linea16_SinLimite.jpg"),
    right: [
      l16("11_Linea16_SinLimite.jpg"),
      l16("12_Linea16_SinLimite.jpg"),
      l16("13_Linea16_SinLimite.jpg"),
    ],
  },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") {
    return (
      <div className="grid items-center grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={block.src} alt="Linea 16 – Sin Salida" />
        </div>
      </div>
    );
  }

  if (block.type === "split") {
    return (
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 h-full min-h-0">
          <ProjectMedia
            src={block.left}
            alt="Linea 16 – Sin Salida"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          {block.right.map((src) => (
            <ProjectMedia key={src} src={src} alt="Linea 16 – Sin Salida" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${
        block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Linea 16 – Sin Salida" />
      ))}
    </div>
  );
}

export default function Project9() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Linea 16 – Sin Salida</h1>
          <span className="text-sm text-black/60">{isEs ? "Julio, 2017 · Brand" : "July, 2017 · Brand"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <div>
            <p>
              {isEs
                ? "Linea 16 es una liga de batallas escritas, concentra a los mejores escritores de hip-hop de habla hispana."
                : "Linea 16 is a written battle rap league, bringing together the best Spanish-speaking hip-hop writers."}
            </p>
            <p className="mt-4">
              {isEs
                ? "La idea original de Linea 16 fue darle una dimensión más teatral a las batallas, incorporando elementos que en su momento fueron novedosos —y que después se convirtieron en estándar—, como establecer un round a capela, otro con beat y un tercero libre, en el que los participantes tienen total libertad creativa."
                : "Linea 16's original idea was to give battles a more theatrical dimension, incorporating elements that were novel at the time — and later became standard — like setting up an a capella round, another with a beat, and a third free round, where participants have total creative freedom."}
            </p>
          </div>
          <p>
            {isEs
              ? "A esto se sumó la intención de dotar a los enfrentamientos de una narrativa que trascendiera la tarima, dándole un componente dramático a cada batalla."
              : "Added to this was the intention of giving the battles a narrative that transcended the stage, giving each battle a dramatic component."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksIntro.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={l16("2_Linea16_SinLimite.jpg")} alt="Linea 16 – Sin Salida" />
        <div className="flex flex-col gap-4">
          <ProjectMedia src={l16("3_Linea16_SinLimite.jpg")} alt="Linea 16 – Sin Salida" />
          <ProjectMedia src={l16("4_Linea16_SinLimite.jpg")} alt="Linea 16 – Sin Salida" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksTop.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            {isEs
              ? "El proyecto llegó a mí en la búsqueda de evolucionar su marca, buscaban un logotipo nuevo que proyectará a las batallas escritas como un deporte de alto rendimiento, así que exploramos por el estilo de los logotipos de básquetbol, jugando con ángulos afilados y alto contraste."
              : "The project came to me in the search to evolve their brand — they wanted a new logo that would project written battles as a high-performance sport, so we explored basketball-style logos, playing with sharp angles and high contrast."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "De igual forma ya tenían en puerta el siguiente evento, así que una vez terminado el logotipo, se diseñó la línea visual del evento. Apuntamos por un estilo urbano, rojizo, usando las texturas de la calle, las paredes y grafitos con las texturas del aerosol."
              : "They also already had their next event coming up, so once the logo was finished, we designed the event's visual line. We went for an urban, reddish style, using street textures, walls, and graffiti with spray-paint textures."}
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
            {isEs
              ? "Moodboards, para tener referencias de otros eventos de este tipo que se hayan realizado, principalmente busqué referencias en acomodo de información de Red Bull Batalla de los Gallos."
              : "Moodboards, to have references from other events of this kind that had taken place — I mainly looked for references in how Red Bull Batalla de los Gallos organized their information."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Con el tema del hip-hop y el graffiti me sentía muy cómodo, ya que era un ámbito muy cercano a mí, en esos años hacía graffiti y el hip-hop era de la música que más escuchaba."
              : "I felt very comfortable with the hip-hop and graffiti theme, since it was a world very close to me — in those years I did graffiti and hip-hop was the music I listened to most."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocksBottom.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Resultado" : "Result"}</h2>
          <p>
            {isEs
              ? "Se obtuvo brand kit, materiales para redes sociales, impresos y propuestas de merch."
              : "We produced a brand kit, materials for social media, printed pieces, and merch proposals."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "En esos años fue mi primer proyecto grande, de un gran impacto a nivel nacional e internacional en el ámbito del hip-hop, puedo decir que fue el proyecto que me dio mucha seguridad para confiar en lo que hacía, ya que el equipo de Linea 16 me dio toda la confianza de hacerlo."
              : "Back in those years this was my first big project, with a huge impact nationally and internationally within the hip-hop scene — I can say it was the project that gave me a lot of confidence to trust what I was doing, since the Linea 16 team gave me all the confidence to do it."}
          </p>
          <p className="mt-4">
            {isEs ? "Canal de Youtube (" : "Youtube channel ("}
            <a
              href="https://www.youtube.com/@lineadieciseis"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.youtube.com/@lineadieciseis
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project9" />
    </ContentGrid>
  );
}
