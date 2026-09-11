import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const espacio = (file: string) => `/design/espacio/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string };

const introBlocks: Block[] = [
  { type: "full", src: espacio("4_Cover_Espacio.mp4") },
  { type: "grid", items: [espacio("1_Espacio.jpg"), espacio("2_Espacio.jpg"), espacio("3_Espacio.jpg")] },
  { type: "split", left: espacio("7_Espacio.jpg"), right: espacio("8_Espacio.jpg") },
  { type: "full", src: espacio("9_Espacio.jpg") },
  { type: "grid", items: [espacio("5_Espacio.mp4"), espacio("6_Espacio.mp4")] },
];

const outroBlocks: Block[] = [
  { type: "full", src: espacio("10_Espacio.jpg") },
  { type: "split", left: espacio("11_Espacio.jpg"), right: espacio("12_Espacio.jpg") },
  { type: "grid", items: [espacio("13_Espacio.jpg"), espacio("14_Espacio.jpg"), espacio("15_Espacio.jpg")] },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="Espacio" />;

  if (block.type === "split") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={block.left} alt="Espacio" />
        <ProjectMedia src={block.right} alt="Espacio" />
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Espacio" />
      ))}
    </div>
  );
}

export default function Project3() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Espacio</h1>
          <span className="text-sm text-black/60">Marzo, 2026 · Brand / UI / Motion</span>
        </div>
        <p className="max-w-2xl text-black/70">
          Espacio es una media company que hace contenido y difusión sobre finanzas y
          tecnologías emergentes, empezó como Espacio Cripto y evolucionó a Espacio. Cuenta
          con una gran comunidad hispanohablante que empezó en el mundo cripto y ha
          ampliando sus horizontes.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {introBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Mi aporte</h2>
          <p>
            Lideré el proyecto del rebranding de la marca, la marca se llamaba Espacio
            Cripto y evolucionó al tal punto que solo debía llamarse Espacio, ampliando sus
            horizontes.
          </p>
          <p className="mt-4">
            Espacio cripto ya era una marca posicionada dentro del ámbito tecnológico y
            cripto, por lo que la evolución de marca debía de mantener su esencia y probar
            de mantener consistente la curva de adopción del re-name.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Colaboradores</h2>
          <p>
            El principal objetivo de esto fue ampliar los horizontes y posicionamiento de la
            marca, crear un sistema visual el cual pueda ser escalable a todos los soportes
            donde tuviera presencia la marca.
          </p>
          <p className="mt-4">Todo esto lo lleve de la mano con Alo y Lalo, fundadores del proyecto.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {outroBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            Se hizo una recopilación de todas las piezas de contenido que emanaba la marca,
            fueron depurando y acotando por prioridades y usos, de ahí se fueron definiendo
            fonts, paleta de colores e iconos para partir a diseñar el sistema visual, esto
            fue aplicando tanto para físico como digital, aplicativos y motion graphics.
          </p>
        </div>
        <div>
          <p>
            Espacio ya es una marca muy posicionada en su nicho, ya tenía un camino
            recorrido, por lo que buscabamos actualizar los contenidos ya generados por
            ahora con el nuevo brand hecho para dominar la curva de adopción y no dar la
            sensación de que era una cosa totalmente diferente a lo que estaba acostumbrado
            al público.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Resultado</h2>
          <p>
            Se entregó un brand kit, con la definición básica de fonts, paleta de colores,
            plantillas para contenido on/off line, UI Kit, motion graphics y aplicaciones
            para merch física.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Aprendizaje</h2>
          <p>
            Llevar un re-branding de principio a fin, entender el origen de una marca, saber
            cual ha sido su evolución y a donde apunta, fue una gran experiencia, desde el
            recopilar información, buscar referencias, descartar todo lo que ibas
            encontrando hasta llegar a lo que estabas buscando, fue muy enriquecedor. Sin
            duda ha sido uno de mis proyectos favoritos.
          </p>
          <p className="mt-4">
            WEB (
            <a
              href="https://espacio.cool"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://espacio.cool
            </a>
            )
            <br />
            IG (
            <a
              href="https://www.instagram.com/espacio.media/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.instagram.com/espacio.media/
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project3" />
    </ContentGrid>
  );
}
