"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { BodyText } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project1")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const musho = (file: string) => `/design/musho/${file}`;

export default function Project1() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Musho" project="Brand kit" />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroMeta
              items={[
                { label: isEs ? "Cliente" : "Client", value: project.name },
                { label: isEs ? "Servicio" : "Service", value: service },
                { label: isEs ? "Año" : "Year", value: year },
                { label: isEs ? "Industria" : "Industry", value: industry },
              ]}
            />
            <HeroLead>
              {isEs
                ? "Musho es un asistente de diseño impulsado por IA que convierte tus prompts en sitios web, publicaciones para redes sociales, presentaciones y más, sin esfuerzo."
                : "Musho is an AI-powered design assistant, turning your prompts into websites, social media posts, slides, and more — effortlessly."}
            </HeroLead>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <BodyText>
            {isEs ? (
              <>
                Musho encuentra el balance entre innovación audaz y encanto juguetón.
                <br />
                <br />
                Moshi, nuestra mascota versátil, refleja el espíritu de nuestra marca: tan cómoda con
                lentes de sol para ese toque enfocado y directo, como sin ellos para un toque de
                picardía.
              </>
            ) : (
              <>
                Musho strikes a balance between bold innovation and playful charm.
                <br />
                <br />
                Moshi, our versatile mascot, reflects our brand&apos;s spirit — equally at home in
                sunglasses for that sharp, focused vibe or bare-faced for a touch of whimsy.
              </>
            )}
          </BodyText>
          <BodyText>
            {isEs ? (
              <>
                Nuestro amarillo distintivo y las líneas limpias de la tipografía GT Flexa hacen de
                Musho una marca audaz y divertida.
                <br />
                <br />
                Diseño en colaboración con{" "}
                <a
                  href="https://www.linkedin.com/in/sjoerd-huisman-5a176420/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Sjoerd
                </a>{" "}
                y el equipo de Musho.
              </>
            ) : (
              <>
                Our striking yellow and the clean lines of the GT Flexa typeface make Musho a bold and
                fun brand.
                <br />
                <br />
                Design in collaboration with{" "}
                <a
                  href="https://www.linkedin.com/in/sjoerd-huisman-5a176420/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Sjoerd
                </a>{" "}
                and the Musho team.
              </>
            )}
          </BodyText>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 py-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={musho("1_Musho.gif")} alt="Musho.ai" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <ProjectMedia src={musho("3_Musho.png")} alt="Musho.ai" />
        <ProjectMedia src={musho("2_Musho.mp4")} alt="Musho.ai" />
      </div>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <div className="flex flex-col gap-2">
          <ProjectMedia src={musho("4_Musho.png")} alt="Musho.ai" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectMedia src={musho("5_Musho.png")} alt="Musho.ai" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 py-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={musho("6_Musho.mp4")} alt="Musho.ai" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-6">
        <ProjectMedia src={musho("7_Musho.jpg")} alt="Musho.ai" />
        <ProjectMedia src={musho("8_Musho.jpg")} alt="Musho.ai" />
        <ProjectMedia src={musho("11_Musho.jpg")} alt="Musho.ai" />
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <ProjectMedia src={musho("9_Musho.jpg")} alt="Musho.ai" />
        <ProjectMedia src={musho("12_Cover_Musho.gif")} alt="Musho.ai" />
        <ProjectMedia src={musho("10_Musho.jpg")} alt="Musho.ai" />
      </div>

      <OtherProjects currentHref="/project1" />
    </ContentGrid>
  );
}
