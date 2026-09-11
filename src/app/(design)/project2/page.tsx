import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const gandum = (file: string) => `/design/gandum/${file}`;

type Block =
  | { type: "full"; src: string; caption?: string }
  | { type: "grid"; items: string[]; caption?: string }
  | { type: "split"; left: string; right: string; caption?: string };

const blocks: Block[] = [
  { type: "split", left: gandum("1_Gandum.jpg"), right: gandum("2_Gandum.jpg"), caption: "Detalle de la imagen" },
  { type: "split", left: gandum("3_Gandum.jpg"), right: gandum("10_Gandum.jpg"), caption: "Detalle de la imagen" },
  { type: "full", src: gandum("4_Gandum.jpg") },
  { type: "full", src: gandum("8_Gandum.jpg"), caption: "Detalle de la imagen" },
  { type: "grid", items: [gandum("11_Gandum.jpg"), gandum("12_Gandum.jpg"), gandum("13_Gandum.jpg")] },
  { type: "full", src: gandum("14_Gandum.jpg"), caption: "Detalle de la imagen" },
  { type: "grid", items: [gandum("5_Gandum.mp4"), gandum("6_Gandum.mp4")] },
  { type: "grid", items: [gandum("7_Gandum.mp4"), gandum("9_Gandum.mp4")], caption: "Detalle de la imagen" },
];

export default function Project2() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Gandum</h1>
          <span className="text-sm text-black/60">Agosto, 2026 · Brand</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Gandum es un festival que conecta la música electrónica y la cultura, la primera
            edición se realiza en Coffs Harbour, Australia en octubre del 2026.
          </p>
          <p>
            El arte fue realizado por Pablo Stanley, cabezas, cuerpos, ojos, bocas… el
            algoritmo se encargo de colocarlos de forma aleatoria para lograr que cada
            personaje fuera único.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col gap-3">
            {block.type === "full" && <ProjectMedia src={block.src} alt="Gandum" />}
            {block.type === "split" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <ProjectMedia src={block.left} alt="Gandum" />
                </div>
                <div className="md:col-span-1">
                  <ProjectMedia src={block.right} alt="Gandum" />
                </div>
              </div>
            )}
            {block.type === "grid" && (
              <div
                className={`grid grid-cols-1 gap-4 ${
                  block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {block.items.map((src) => (
                  <ProjectMedia key={src} src={src} alt="Gandum" />
                ))}
              </div>
            )}
            {block.caption && <p className="text-sm text-black/50">{block.caption}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          Se buscaba tener una identidad desértica inspirada en los cactus y urbana, tomando
          el graffiti como base, combinadas con el psytrance.
        </p>
        <div>
          <p>
            Me inspiré mucho de contenido que generan otros festivales de este tipo para
            definir la jerarquía de nuestros materiales. Los moodboards los trabajé mucho con
            Dreamvibes! (co-founder del proyecto) además de ser el headliner del primer
            festival Gandum.
          </p>
          <p className="mt-4">
            IG (
            <a
              href="https://www.instagram.com/gandumartgathering/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.instagram.com/gandumartgathering/
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project2" />
    </ContentGrid>
  );
}
