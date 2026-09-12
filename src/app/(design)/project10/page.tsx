import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const bando = (file: string) => `/design/bando/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string[] };

const blockHero: Block = { type: "split", left: bando("1_Bando.jpg"), right: [bando("2_Bando.jpg")] };

const blocksMid: Block[] = [
  { type: "full", src: bando("3_Bando.jpg") },
];

const blocksLower: Block[] = [
  { type: "full", src: bando("4_Bando.jpg") },
  { type: "full", src: bando("5_Bando.jpg") },
  { type: "full", src: bando("8_Bando.mp4") },
  { type: "full", src: bando("6_Bando.jpg") },
  {
    type: "grid",
    items: [bando("9_Bando.mp4"), bando("10_Bando.mp4"), bando("12_Bando.mp4"), bando("13_Bando.mp4")],
  },
  { type: "full", src: bando("7_Bando.jpg") },
];

function MediaBlock({ block }: { block: Block }) {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Bando" />
      ))}
    </div>
  );
}

export default function Project10() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Bando</h1>
          <span className="text-sm text-black/60">2024 – 2025 · Brand | Design System | UX/UI</span>
        </div>
        <p className="max-w-2xl text-black/70">
          Bando es una fintech que busca conectar la blockchain con la banca tradicional,
          conectando servicios y la bolsa de valores a usuarios finales.
        </p>
      </div>

      <MediaBlock block={blockHero} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Mi aporte</h2>
          <p>
            Fui diseñador principal del proyecto. Trabajé muy de la mano con Ab, haciendo
            mockups, testeando ideas y prototipos.
          </p>
        </div>
        <div>
          <p>
            Nuestro objetivo era hacer un producto escalable, que contará con un sistema de
            diseño que se pueda adaptar a los clientes potencial para que se pueda implementar
            de manera fluida. Tener un branding, un sistema de diseño y una UI con la cual
            interactuar los clientes.
          </p>
          <p className="mt-4">
            Constantemente se tenía que trabajar con el equipo dev para leer las
            implementaciones que se tenían en producto y conocer la viabilidad.
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
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            Se hacía un research y pruebas de usuario constante, era mucho de prueba, error e
            iteración.
          </p>
        </div>
        <div>
          <p>
            Partiendo de los resultados de los test, fuimos puliendo el producto, encontrando
            patrones de errores y buscaba alternativas.
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
          <h2 className="font-bold text-black mb-2">Resultado</h2>
          <p>
            Brand Kit, UI Kit, lineamientos editoriales para reportes, Motions kit de
            interacciones.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Aprendizaje</h2>
          <p>
            Trabajar con las diferentes áreas de Bando fue enriquecedor, buscando que el
            producto lograra exprimir su máximo potencial, corriendo riesgos y abriendo nuevos.
            Colaborar con mas personas siempre es gratificante al contemplar todos los puntos
            débiles y fuertes, ayudando a la optimización del producto.
          </p>
          <p className="mt-4">
            LinkedIn (
            <a
              href="https://www.linkedin.com/company/bando-cool/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
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
