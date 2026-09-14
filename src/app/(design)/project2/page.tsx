"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const gandum = (file: string) => `/design/gandum/${file}`;

type Block =
  | { type: "full"; src: string; caption?: string }
  | { type: "grid"; items: string[]; caption?: string }
  | {
      type: "split";
      left: string;
      right: string;
      caption?: string;
      noGap?: boolean;
      matchHeight?: boolean;
      equal?: boolean;
    }
  | { type: "stackSplit"; stack: string[]; right: string; caption?: string };

const blocks: Block[] = [
  {
    type: "split",
    left: gandum("1_Gandum.jpg"),
    right: gandum("2_Gandum.jpg"),
    caption: "Detalle de la imagen",
    noGap: true,
    matchHeight: true,
  },
  {
    type: "stackSplit",
    stack: [gandum("3_Gandum.jpg"), gandum("4_Gandum.jpg")],
    right: gandum("5_Gandum.mp4"),
  },
  { type: "split", left: gandum("6_Gandum.mp4"), right: gandum("7_Gandum.mp4"), matchHeight: true, equal: true },
  { type: "split", left: gandum("8_Gandum.jpg"), right: gandum("9_Gandum.mp4"), equal: true },
  { type: "full", src: gandum("10_Gandum.jpg"), caption: "Detalle de la imagen" },
  { type: "split", left: gandum("11_Gandum.jpg"), right: gandum("12_Gandum.jpg"), equal: true },
  { type: "split", left: gandum("12_Gandum.jpg"), right: gandum("14_Gandum.jpg"), equal: true },
];

const captionEn: Record<string, string> = {
  "Detalle de la imagen": "Image detail",
};

export default function Project2() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Gandum</h1>
          <span className="text-sm text-black/60">{isEs ? "Agosto, 2026 · Brand" : "August, 2026 · Brand"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs
              ? "Gandum es un festival que conecta la música electrónica y la cultura, la primera edición se realiza en Coffs Harbour, Australia en octubre del 2026."
              : "Gandum is a festival connecting electronic music and culture; its first edition takes place in Coffs Harbour, Australia in October 2026."}
          </p>
          <p>
            {isEs
              ? "El arte fue realizado por Pablo Stanley, cabezas, cuerpos, ojos, bocas… el algoritmo se encargo de colocarlos de forma aleatoria para lograr que cada personaje fuera único."
              : "The art was created by Pablo Stanley — heads, bodies, eyes, mouths… the algorithm took care of placing them randomly so every character came out unique."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col gap-3">
            {block.type === "full" && <ProjectMedia src={block.src} alt="Gandum" />}
            {block.type === "split" && (
              <div
                className={`grid items-center grid-cols-1 ${block.equal ? "md:grid-cols-2" : "md:grid-cols-3"} ${
                  block.noGap ? "gap-0" : "gap-4"
                }`}
              >
                <div className={block.equal ? "" : "md:col-span-2"}>
                  <ProjectMedia src={block.left} alt="Gandum" />
                </div>
                <div
                  className={`${block.equal ? "" : "md:col-span-1"} ${
                    block.matchHeight ? "h-full min-h-0" : ""
                  }`}
                >
                  <ProjectMedia
                    src={block.right}
                    alt="Gandum"
                    className={block.matchHeight ? "w-full h-full object-cover" : undefined}
                  />
                </div>
              </div>
            )}
            {block.type === "stackSplit" && (
              <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  {block.stack.map((src) => (
                    <ProjectMedia key={src} src={src} alt="Gandum" />
                  ))}
                </div>
                <div className="h-full min-h-0">
                  <ProjectMedia src={block.right} alt="Gandum" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            {block.type === "grid" && (
              <div
                className={`grid items-center grid-cols-1 gap-4 ${
                  block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {block.items.map((src) => (
                  <ProjectMedia key={src} src={src} alt="Gandum" />
                ))}
              </div>
            )}
            {block.caption && (
              <p className="text-sm text-black/50">{isEs ? block.caption : captionEn[block.caption] ?? block.caption}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Se buscaba tener una identidad desértica inspirada en los cactus y urbana, tomando el graffiti como base, combinadas con el psytrance."
            : "The goal was a desert-inspired identity, drawing on cacti and urban culture — using graffiti as a base, combined with psytrance."}
        </p>
        <div>
          <p>
            {isEs
              ? "Me inspiré mucho de contenido que generan otros festivales de este tipo para definir la jerarquía de nuestros materiales. Los moodboards los trabajé mucho con Dreamvibes! (co-founder del proyecto) además de ser el headliner del primer festival Gandum."
              : "I drew a lot of inspiration from content generated by other festivals of this kind to define the hierarchy of our materials. I worked closely on the moodboards with Dreamvibes! (co-founder of the project), who is also the headliner of the first Gandum festival."}
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
