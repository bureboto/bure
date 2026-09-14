"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const cero = (file: string) => `/design/cero/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string };

const introBlocks: Block[] = [
  { type: "grid", items: [cero("Cer0_06.jpg"), cero("Cer0_05.jpg"), cero("Cer0_04.jpg")] },
];

const midBlocks: Block[] = [
  { type: "split", left: cero("Cer0_01.jpg"), right: cero("Cer0_02.jpg") },
  { type: "grid", items: [cero("Cer0_07.jpg"), cero("Cer0_08.jpg"), cero("Cer0_09.jpg")] },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="c3r0" />;

  if (block.type === "split") {
    return (
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={block.left} alt="c3r0" />
        <ProjectMedia src={block.right} alt="c3r0" />
      </div>
    );
  }

  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="c3r0" />
      ))}
    </div>
  );
}

export default function Project4() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">c3r0</h1>
          <span className="text-sm text-black/60">{isEs ? "Julio, 2026 · Brand" : "July, 2026 · Brand"}</span>
        </div>
        <p className="max-w-2xl text-black/70">
          {isEs
            ? "c3r0 es el primer mocktail bar en San José del Cabo, Baja California, México. El proyecto llegó a mi buscando crear un branding fresco, orgánico, vibe tropical. Su necesidad principal era tener un brand kit que incluyera templates para social media escalables a contenido on/off line."
            : "c3r0 is the first mocktail bar in San José del Cabo, Baja California, Mexico. The project came to me looking to create a fresh, organic branding with a tropical vibe. Their main need was a brand kit that included social media templates scalable to on/off-line content."}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {introBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            {isEs
              ? "Lleve el proyecto en su totalidad de principio a mi, trabajé de la mano con los dos founders, Aslan y Mich."
              : "I carried the project in its entirety from start to finish, working hand in hand with the two founders, Aslan and Mich."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Al ser el primer mocktail bar en San José del Cabo, c3r0 busca llamar la atención de una forma sutil, proyectando frescura y minimalismo, y a su vez fusionarse con la tradicionalidad de la zona donde se ubica."
              : "As the first mocktail bar in San José del Cabo, c3r0 aims to catch attention in a subtle way, projecting freshness and minimalism, while also blending with the tradition of the area where it's located."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Una vez recopilada la información, hice un mood board para tener una idea de a donde deberíamos apuntar, fonts, paleta de colores muy inspirada en la playa y fachada del lugar, estilo del lenguaje visual y referencias de otros espacios."
              : "Once the information was gathered, I put together a moodboard to get a sense of where we should aim — fonts, a color palette heavily inspired by the beach and the venue's facade, a visual language style, and references from other venues."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Una vez curado ese mood board hice exploración con bocetos, honestamente no fue muy tardado, ya que con los founders teníamos muy claro a donde queríamos llegar."
              : "Once that moodboard was curated, I explored with sketches — honestly it didn't take too long, since the founders and I had a very clear idea of where we wanted to land."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {midBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Proceso" : "Process"}</h2>
          <p>
            {isEs
              ? "Se hizo una compilación de todos los tipos de contenidos que creaba la marca, fuimos depurando y acotando por prioridades y usos, de ahí se fueron definiendo fonts, paleta de colores e iconos para partir a diseñar el sistema visual, esto fue replicable tanto para físico como digital, estático y motion graphics."
              : "We compiled all the types of content the brand created, refining and narrowing them down by priority and use. From there we defined fonts, color palette, and icons to start designing the visual system, which was replicable across physical and digital, static and motion graphics."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "c3r0 ya tenía una identidad muy clara desde el día uno gracias a los founders, así que el reto fue traducir esa claridad en un sistema visual escalable: que funcionara igual en una lata, en un menú impreso o en redes sociales, sin perder esa frescura y calidez que lo caracteriza."
              : "c3r0 already had a very clear identity from day one thanks to the founders, so the challenge was translating that clarity into a scalable visual system: something that worked equally well on a can, a printed menu, or social media, without losing the freshness and warmth that characterizes it."}
          </p>
        </div>
      </div>

      <ProjectMedia src={cero("Cover_Cer0_03.jpg")} alt="c3r0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            {isEs
              ? "El lugar fue inaugurado el 22 de agosto de 2026. El branding salió desde mucho antes para darle publicidad en redes sociales y colocación de carteles en la zona."
              : "The venue opened on August 22, 2026. The branding rolled out well ahead of that to promote it on social media and place posters around the area."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Gracias por la confianza total de Aslan y Mich para el desarrollo de su branding, son de los proyectos que uno se divierte desde la hora 0."
              : "Thanks to Aslan and Mich for their full trust in developing their branding — this is one of those projects you have fun with from hour zero."}
          </p>
          <p className="mt-4">
            IG (
            <a
              href="https://www.instagram.com/p/Dc7BLKyyovl/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.instagram.com/p/Dc7BLKyyovl/
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project4" />
    </ContentGrid>
  );
}
