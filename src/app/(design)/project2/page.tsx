"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { BodyText } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project2")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const gandum = (file: string) => `/design/gandum/${file}`;

export default function Project2() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Gandum" project="Brand kit" />

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
                ? "Gandum es un festival que conecta la música electrónica y la cultura, la primera edición se realiza en Coffs Harbour, Australia en octubre del 2026."
                : "Gandum is a festival that connects electronic music and culture, with its first edition taking place in Coffs Harbour, Australia in October 2026."}
            </HeroLead>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <BodyText>
            {isEs ? (
              <>
                Se buscaba tener una identidad desértica inspirada en los cactus y urbana, tomando el
                graffiti como base, combinadas con el psytrance.
                <br />
                <br />
                Me inspiré mucho de contenido que generan otros festivales de este tipo para definir
                la jerarquía de nuestros materiales. Los moodboards los trabajé mucho con Dreamvibes!
                (co-founder del proyecto) además de ser el headliner del primer festival Gandum.
                <br />
                <br />
                IG (
                <a
                  href="https://www.instagram.com/gandumartgathering/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.instagram.com/gandumartgathering/
                </a>
                )
              </>
            ) : (
              <>
                We wanted a desert identity inspired by cacti and an urban one built on graffiti,
                combined with psytrance.
                <br />
                <br />
                I drew a lot of inspiration from the content other festivals like this one create, to
                define the hierarchy of our materials. I worked closely with Dreamvibes! (co-founder
                of the project) on the moodboards — he&apos;s also the headliner of the first Gandum
                festival.
                <br />
                <br />
                IG (
                <a
                  href="https://www.instagram.com/gandumartgathering/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.instagram.com/gandumartgathering/
                </a>
                )
              </>
            )}
          </BodyText>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={gandum("1_Gandum.jpg")} alt="Gandum" />
        <ProjectMedia src={gandum("2_Gandum.jpg")} alt="Gandum" />
      </div>

      <div className="grid items-stretch grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <div className="flex flex-col gap-6">
          <ProjectMedia src={gandum("3_Gandum.jpg")} alt="Gandum" />
          <ProjectMedia src={gandum("4_Gandum.jpg")} alt="Gandum" />
        </div>
        <ProjectMedia src={gandum("5_Gandum.mp4")} alt="Gandum" className="w-full h-full object-cover" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <ProjectMedia src={gandum("6_Gandum.mp4")} alt="Gandum" />
        <ProjectMedia src={gandum("7_Gandum.mp4")} alt="Gandum" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={gandum("8_Gandum.jpg")} alt="Gandum" />
        <ProjectMedia src={gandum("9_Gandum.mp4")} alt="Gandum" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={gandum("10_Gandum.jpg")} alt="Gandum" />
        </div>
      </div>

      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <ProjectMedia src={gandum("11_Gandum.jpg")} alt="Gandum" />
        <ProjectMedia src={gandum("12_Gandum.jpg")} alt="Gandum" />
      </div>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={gandum("13_Gandum.jpg")} alt="Gandum" />
        <ProjectMedia src={gandum("14_Gandum.jpg")} alt="Gandum" />
      </div>

      <OtherProjects currentHref="/project2" />
    </ContentGrid>
  );
}
