"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const idf = (file: string) => `/design/idf/${file}`;

function FullRow({ src }: { src: string }) {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-4">
        <ProjectMedia src={src} alt="Inversionista del futuro" />
      </div>
    </div>
  );
}

function EdgeRow({ items }: { items: string[] }) {
  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${
        items.length === 2 ? "md:grid-cols-2" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
      }`}
    >
      {items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Inversionista del futuro" />
      ))}
    </div>
  );
}

export default function Project11() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Inversionista del futuro</h1>
          <span className="text-sm text-black/60">2025 · Brand | UI</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs
              ? "Inversionista del futuro es un curso donde se enseña a construir portafolios básicos de inversión preparados para el futuro de las finanzas personales. Además de contar con una comunidad derivada de Espacio."
              : "Inversionista del Futuro is a course that teaches how to build basic investment portfolios prepared for the future of personal finance, along with a community derived from Espacio."}
          </p>
          <p>
            {isEs
              ? "Se necesitaba crear una identidad hija de Espacio, la cual pueda diferenciarse del resto de contenidos que tenía la marca."
              : "We needed to create an identity as an offshoot of Espacio, one that could stand apart from the rest of the content the brand had."}
          </p>
        </div>
      </div>

      <FullRow src={idf("1_IDF.jpg")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Lideré esta identidad, tomando como inspiración un estilo brutalista y urbano, utilizando la paleta de colores que Espacio Cripto tenia en ese entonces."
            : "I led this identity, drawing inspiration from a brutalist, urban style, using the color palette Espacio Cripto had at the time."}
        </p>
        <div>
          <p>
            {isEs
              ? "Un reto importante era utilizar la paleta de colores y tipografía de Espacio Cripto y a su vez transmitir que era un producto que podían adquirir y no solo información por consumir."
              : "An important challenge was using Espacio Cripto's color palette and typography while also conveying that this was a product they could purchase, not just information to consume."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Además de crear diversos materiales que puedan ser escalables a contenidos educativos on/off line."
              : "As well as creating various materials that could scale to on/off-line educational content."}
          </p>
        </div>
      </div>

      <EdgeRow items={[idf("4_IDF.jpg"), idf("3_IDF.jpg"), idf("2_IDF.jpg"), idf("15_IDF.gif")]} />

      <EdgeRow items={[idf("5_IDF.jpg"), idf("13_IDF.mp4")]} />

      <div className="flex flex-col gap-4">
        <FullRow src={idf("14_IDF.mp4")} />
        <FullRow src={idf("7_IDF.jpg")} />
        <EdgeRow items={[idf("8_IDF.jpg"), idf("9_IDF.jpg")]} />
      </div>

      <p className="max-w-2xl text-black/70">
        {isEs
          ? "Se hicieron research sobre otros cursos de educación financiera y se fueron catalogando los hallazgos, definiendo un mvp y avanzando en el proyecto."
          : "We researched other financial education courses, cataloguing the findings, defining an MVP, and moving the project forward."}
      </p>

      <EdgeRow items={[idf("10_IDF.jpg"), idf("11_IDF.jpg"), idf("12_IDF.jpg")]} />

      <FullRow src={idf("16_IDF.jpg")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Resultado" : "Result"}</h2>
          <p>{isEs ? "Brand kit, Plantillas de materiales educativos." : "Brand kit, templates for educational materials."}</p>
          <ul className="list-disc pl-5 mt-4 space-y-1">
            <li>
              {isEs
                ? "El curso tuvo un alcance de más de 100 estudiantes sus primeras semanas"
                : "The course reached more than 100 students in its first weeks"}
            </li>
            <li>{isEs ? "+ de 10 sesiones en vivo, utilizando material diseñado" : "10+ live sessions, using designed material"}</li>
            <li>{isEs ? "Guía del curso y materiales derivados" : "Course guide and derived materials"}</li>
            <li>{isEs ? "WEB informativa con detalles del curso" : "Informational website with course details"}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Aprendizaje" : "Learnings"}</h2>
          <p>
            {isEs
              ? "Fue un logro desbloqueado en mi carrera profesional el crear una identidad para un proyecto educativo, muy enriquecedor y arduo, al final del proyecto muy gratificante ver todos los materiales diseñados y utilizados por los estudiantes y en las sesiones."
              : "Creating an identity for an educational project was an achievement unlocked in my professional career — very enriching and demanding, and by the end of the project very rewarding to see all the materials designed and used by the students and in the sessions."}
          </p>
          <p className="mt-4">
            WEB (
            <a
              href="https://espacio.cool/inversionista"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://espacio.cool/inversionista
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project11" />
    </ContentGrid>
  );
}
