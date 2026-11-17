"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { BodyText } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project4")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const cero = (file: string) => `/design/cero/${file}`;

export default function Project4() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="C3Я0" project="Brand kit" />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroMeta
              items={[
                { label: isEs ? "Cliente" : "Client", value: project.client ?? project.name },
                { label: isEs ? "Servicio" : "Service", value: service },
                { label: isEs ? "Año" : "Year", value: year },
                { label: isEs ? "Industria" : "Industry", value: industry },
              ]}
            />
            <HeroLead>
              {isEs
                ? "C3Я0 es el primero mocktail bar en San José del Cabo, Baja California, México."
                : "C3Я0 is the first mocktail bar in San José del Cabo, Baja California, Mexico."}
            </HeroLead>
            <BodyText>
              {isEs
                ? "El lugar fue inaugurado el 22 de agosto de 2026."
                : "The venue opened on August 22, 2026."}
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <BodyText>
            {isEs ? (
              <>
                El proyecto llegó a mi buscando crear un branding fresco, orgánico, vibe tropical.
                Su necesidad principal era tener un brand kit que incluyera templates para social
                media escalables a contenido on/off line.
                <br />
                <br />
                Lleve el proyecto en su totalidad de principio a mi, trabajé de la mano con los dos
                founders, Aslan y Mich.
                <br />
                <br />
                Al ser el primer mocktail bar en San José del Cabo, c3Я0 buscaba llamar la atención
                de una forma sutil, proyectando frescura y minimalismo, y a su vez fusionarse con la
                tradicionalidad de la zona donde se ubica.
                <br />
                <br />
                Gracias por la confianza total de Aslan y Mich para el desarrollo de su branding,
                son de los proyectos que uno se divierte desde la hora 0.
                <br />
                <br />
                IG (
                <a
                  href="https://www.instagram.com/p/Dc7BLKyyovI/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.instagram.com/p/Dc7BLKyyovI/
                </a>
                )
              </>
            ) : (
              <>
                The project came to me looking to create a fresh, organic branding with a tropical
                vibe. Their main need was a brand kit that included templates for social media,
                scalable to on/offline content.
                <br />
                <br />
                I led the project from start to finish, working closely with the two founders, Aslan
                and Mich.
                <br />
                <br />
                Being the first mocktail bar in San José del Cabo, c3Я0 wanted to draw attention in a
                subtle way, projecting freshness and minimalism while also blending with the
                traditional character of the area it&apos;s located in.
                <br />
                <br />
                Thanks to Aslan and Mich for their total trust in developing their branding — this is
                one of those projects you enjoy from hour zero.
                <br />
                <br />
                IG (
                <a
                  href="https://www.instagram.com/p/Dc7BLKyyovI/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.instagram.com/p/Dc7BLKyyovI/
                </a>
                )
              </>
            )}
          </BodyText>
        </div>
      </div>

      <div className="grid items-start grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <div className="flex flex-col gap-2">
          <ProjectMedia src={cero("Cer0_06.jpg")} alt="C3Я0" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectMedia src={cero("Cer0_05.jpg")} alt="C3Я0" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectMedia src={cero("Cer0_04.jpg")} alt="C3Я0" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={cero("Cer0_02.jpg")} alt="C3Я0" />
        <ProjectMedia src={cero("Cer0_01.jpg")} alt="C3Я0" />
      </div>

      <div className="grid items-start grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <ProjectMedia src={cero("Cer0_07.jpg")} alt="C3Я0" />
        <ProjectMedia src={cero("Cer0_08.jpg")} alt="C3Я0" />
        <div className="flex flex-col gap-2">
          <ProjectMedia src={cero("Cer0_09.jpg")} alt="C3Я0" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={cero("Cover_Cer0_03.jpg")} alt="C3Я0" />
        </div>
      </div>

      <OtherProjects currentHref="/project4" />
    </ContentGrid>
  );
}
