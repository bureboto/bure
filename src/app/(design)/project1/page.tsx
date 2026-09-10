import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";

const assets = [
  "1_Musho.gif",
  "2_Musho.mp4",
  "3_Musho.png",
  "4_Musho.png",
  "5_Musho.png",
  "6_Musho.mp4",
  "7_Musho.jpg",
  "8_Musho.jpg",
  "9_Musho.jpg",
  "10_Musho.jpg",
  "11_Musho.jpg",
].map((file) => `/design/musho/${file}`);

export default function Project1() {
  return (
    <div className="px-[28px] pb-16 flex flex-col gap-10">
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

      <div className="flex flex-col gap-10">
        {assets.map((src) => (
          <ProjectMedia key={src} src={src} alt="Musho.ai" />
        ))}
      </div>
    </div>
  );
}
