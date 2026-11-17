"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead, HeroDetail, HeroStats } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import { BodyText, ContentBorderedItem } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project8")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const l16 = (file: string) => `/design/linea16/${file}`;

export default function Project8() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Línea 16" project="Sin Límite" />

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
                ? "Línea 16 es una liga de batallas escritas que reúne a los mejores escritores de hip-hop de habla hispana."
                : "Línea 16 is a written-battle league that brings together the best Spanish-speaking hip-hop writers."}
            </HeroLead>
            <BodyText>
              {isEs ? (
                <>
                  La idea original era darle a las batallas una dimensión más teatral, incorporando
                  elementos que en su momento resultaban novedosos —y que más tarde se volvieron
                  estándar en el género—, como dividir cada enfrentamiento en tres rounds: uno a
                  capela, otro con beat y uno libre, donde los participantes tienen total libertad
                  creativa.
                  <br />
                  <br />
                  A esto se sumó la intención de darle a cada batalla una narrativa que trascendiera
                  la tarima, aportando un componente dramático al enfrentamiento.
                </>
              ) : (
                <>
                  The original idea was to give battles a more theatrical dimension, incorporating
                  elements that were novel at the time — and later became standard in the genre —
                  such as splitting each matchup into three rounds: one a cappella, one with a beat,
                  and a free round, where participants have total creative freedom.
                  <br />
                  <br />
                  On top of that was the intention to give each battle a narrative that went beyond
                  the stage, adding a dramatic component to every matchup.
                </>
              )}
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label={isEs ? "Impacto" : "Impact"}>
            <HeroStats
              stats={[
                { value: "4M+", label: isEs ? <>Vistas en<br />Youtube</> : <>Youtube<br />Views</> },
                { value: "22+", label: isEs ? <>Artistas<br />invitados</> : <>Guest<br />artists</> },
                { value: "4,200+", label: isEs ? <>Asistentes<br />al evento</> : <>Event<br />attendees</> },
                { value: "6+", label: isEs ? <>Países<br />invitados</> : <>Guest<br />countries</> },
              ]}
            />
            <BodyText>
              {isEs
                ? "Línea 16 reunió a más de 22 artistas invitados y convocó a más de 4,200 asistentes, con freestylers de más de 6 países distintos. El video más visto de su canal de YouTube supera los 3 millones de reproducciones, consolidando a Línea 16 como una de las ligas de batallas escritas más influyentes de la escena del freestyle en español."
                : "Línea 16 brought together more than 22 invited artists and drew more than 4,200 attendees, with freestylers from more than 6 different countries. The most-watched video on its YouTube channel surpasses 3 million views, cementing Línea 16 as one of the most influential written-battle leagues in the Spanish-language freestyle scene."}
            </BodyText>
          </HeroDetail>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("1_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
        </div>
      </div>

      <Content1 title={isEs ? "Identidad" : "Visual identity"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Inspirada en una estética urbana y desgastada, con un fuerte contraste entre amarillos
                y negros.
                <br />
                <br />
                Retoma algunos elementos del viejo Bronx a través de fotografías en blanco y negro,
                que resaltan aún más el contraste que aporta el amarillo.
              </>
            ) : (
              <>
                Inspired by an urban, worn-down aesthetic, with a strong contrast between yellows and
                blacks.
                <br />
                <br />
                It draws on elements from the old Bronx through black-and-white photography, which
                makes the contrast brought by the yellow stand out even more.
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={l16("2_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
        <ProjectMedia src={l16("3_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("4_Linea16_SinLimite.mp4")} alt="Línea 16 – Sin Límite" />
        </div>
      </div>

      <Content1 title={isEs ? "Proceso" : "Process"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Se desarrollaron diversas aplicaciones para la marca, abarcando contenido estático y
                multimedia, tanto en línea como fuera de línea.
                <br />
                <br />
                Para empezar, armé moodboards con referencias de otros eventos del género, tomando
                como base principalmente el acomodo de información de Red Bull Batalla de los Gallos.
              </>
            ) : (
              <>
                Various brand applications were developed, covering both static and multimedia
                content, online and offline.
                <br />
                <br />
                To start, I put together moodboards with references from other events in the genre,
                drawing mainly on how Red Bull Batalla de los Gallos organized its information.
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Con el tema del hip-hop y el graffiti me sentía muy cómodo, era un terreno cercano a
                mí: en esos años hacía mucho graffiti y el hip-hop era de la música que más escuchaba.
                <br />
                <br />
                Entre los entregables estuvieron el brand kit, materiales para redes sociales,
                impresos y propuestas de merch.
              </>
            ) : (
              <>
                I felt very comfortable with hip-hop and graffiti as a theme, since it was familiar
                territory for me — in those years I did a lot of graffiti, and hip-hop was some of the
                music I listened to the most.
                <br />
                <br />
                The deliverables included the brand kit, social media materials, printed pieces, and
                merch proposals.
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("5_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <ProjectMedia src={l16("6_Linea16_SinLimite.mp4")} alt="Línea 16 – Sin Límite" />
        <ProjectMedia src={l16("7_Linea16_SinLimite.mp4")} alt="Línea 16 – Sin Límite" />
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={l16("8_Linea16_SinLimite.gif")} alt="Línea 16 – Sin Límite" />
        <ProjectMedia src={l16("9_Linea16_SinLimite.gif")} alt="Línea 16 – Sin Límite" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("10_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={l16("11_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
        <ProjectMedia src={l16("12_Linea16_SinLimite.jpg")} alt="Línea 16 – Sin Límite" />
      </div>

      <Content1 title={isEs ? "Aprendizajes" : "Learnings"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "En esa época fue mi primer proyecto grande, con un impacto importante a nivel nacional e internacional dentro del hip-hop."
              : "At the time, it was my first big project, with a significant impact both nationally and internationally within hip-hop."}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Puedo decir que fue el proyecto que me dio la seguridad para confiar en mi trabajo, ya
                que el equipo de Línea 16 me dio toda la libertad y confianza para hacerlo.
                <br />
                <br />
                {"Canal de YouTube ("}
                <a
                  href="https://www.youtube.com/@lineadieciseis"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.youtube.com/@lineadieciseis
                </a>
                )
              </>
            ) : (
              <>
                I can say it was the project that gave me the confidence to trust my own work, since
                the Línea 16 team gave me all the freedom and trust to make it happen.
                <br />
                <br />
                {"YouTube channel ("}
                <a
                  href="https://www.youtube.com/@lineadieciseis"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.youtube.com/@lineadieciseis
                </a>
                )
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("13_Linea16_SinLimite.mp4")} alt="Línea 16 – Sin Límite" />
        </div>
      </div>

      <OtherProjects currentHref="/project8" />
    </ContentGrid>
  );
}
