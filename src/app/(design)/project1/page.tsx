import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";

const musho = (file: string) => `/design/musho/${file}`;

type Block =
  | { type: "full"; src: string; caption?: string }
  | { type: "grid"; items: string[]; caption?: string };

const blocks: Block[] = [
  { type: "full", src: musho("1_Musho.gif") },
  { type: "full", src: musho("2_Musho.mp4"), caption: "Detalle de la imagen" },
  { type: "grid", items: [musho("3_Musho.png"), musho("4_Musho.png"), musho("5_Musho.png")], caption: "Detalle de la imagen" },
  { type: "full", src: musho("6_Musho.mp4"), caption: "Detalle de la imagen" },
  { type: "grid", items: [musho("7_Musho.jpg"), musho("8_Musho.jpg"), musho("9_Musho.jpg")] },
  { type: "grid", items: [musho("10_Musho.jpg"), musho("11_Musho.jpg")], caption: "Detalle de la imagen" },
];

export default function Project1() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Musho.ai</h1>
          <span className="text-sm text-black/60">2024 · Brand / Motion</span>
        </div>
        <p className="max-w-2xl text-black/70">
          Musho is an AI-powered design assistant, turning your prompts into websites, social
          media posts, slides, and more — effortlessly. Tell Musho your vision and bring it to
          reality to fast-track your creative process.
        </p>
        <p className="text-sm text-black/60">Diseño en colaboración con Sjord and Musho team.</p>
      </div>

      <div className="flex flex-col gap-4">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col gap-3">
            {block.type === "full" ? (
              <ProjectMedia src={block.src} alt="Musho.ai" />
            ) : (
              <div
                className={`grid grid-cols-1 gap-4 ${
                  block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {block.items.map((src) => (
                  <ProjectMedia key={src} src={src} alt="Musho.ai" />
                ))}
              </div>
            )}
            {block.caption && <p className="text-sm text-black/50">{block.caption}</p>}
          </div>
        ))}
      </div>
    </ContentGrid>
  );
}
