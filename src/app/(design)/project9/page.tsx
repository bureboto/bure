"use client";

import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import ProjectMedia from "@/components/ProjectMedia";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroTitle, HeroIntro, HeroLead, HeroDetail } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import Content4 from "@/components/caseStudy/Content4";
import { ImagesFocus, ImagesTriple, ImagesDouble } from "@/components/caseStudy/Images";
import { BodyText, ContentBorderedItem, Subtitle24, FocusText } from "@/components/caseStudy/Typography";
import { useLanguage } from "@/lib/LanguageContext";
import { projects } from "@/lib/projects";

const project = projects.find((p) => p.href === "/project9")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const l16 = (file: string) => `/design/linea16-sinsalida/${file}`;

export default function Project9() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb
        client="Linea 16"
        project={isEs ? "Sin Salida" : "Sin Salida (No Way Out)"}
      />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroTitle>{isEs ? "Sin Salida" : "Sin Salida"}</HeroTitle>
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
                ? "Linea 16 es una liga de batallas escritas que concentra a los mejores escritores de hip-hop de habla hispana."
                : "Linea 16 is a written battle rap league, bringing together the best Spanish-speaking hip-hop writers."}
            </HeroLead>
            <BodyText>
              {isEs
                ? "La idea original de Linea 16 fue darle una dimensión más teatral a las batallas, incorporando elementos que en su momento fueron novedosos —y que después se convirtieron en estándar—, como un round a capela, otro con beat y un tercero libre, en el que los participantes tienen total libertad creativa."
                : "Linea 16's original idea was to give battles a more theatrical dimension, incorporating elements that were novel at the time — and later became standard — like an a capella round, another with a beat, and a third free round, where participants have total creative freedom."}
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label={isEs ? "¿Qué es el proyecto?" : "What is the project?"}>
            <BodyText>
              {isEs
                ? "Rebranding de Linea 16 con un nuevo logotipo tipo escudo deportivo y la línea visual para su evento Callejón Sin Salida, en tonos rojo y negro con texturas urbanas."
                : "A rebrand of Linea 16 with a new sports-crest logo and the visual system for its Callejón Sin Salida event, in red and black with urban textures."}
            </BodyText>
          </HeroDetail>
          <HeroDetail label={isEs ? "¿Cuál fue mi rol?" : "What was my role?"}>
            <BodyText>{isEs ? "Diseñador principal" : "Principal designer"}</BodyText>
          </HeroDetail>
        </div>
      </div>

      <ImagesFocus image={{ src: l16("1_Cover_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida cover" }} />

      {/* Content-1: Context */}
      <Content1
        title={isEs ? "Contexto" : "Context"}
        subtitle={isEs ? "Una narrativa más allá de la tarima" : "A narrative beyond the stage"}
      >
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "A esto se sumó la intención de dotar a los enfrentamientos de una narrativa que trascendiera la tarima, dándole un componente dramático a cada batalla."
              : "Added to this was the intention of giving the battles a narrative that went beyond the stage, giving each battle a dramatic component."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <ImagesDouble
        images={[
          { src: l16("2_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
          { src: l16("3_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
        ]}
      />

      {/* Content-1: Challenge / brief */}
      <Content1
        title={isEs ? "Reto" : "Challenge"}
        subtitle={
          isEs
            ? "Proyectar las batallas como un deporte de alto rendimiento"
            : "Projecting the battles as a high-performance sport"
        }
      >
        <ContentBorderedItem>
          <FocusText>
            {isEs
              ? "Buscaban un logotipo nuevo que proyectara a las batallas escritas como un deporte de alto rendimiento."
              : "They wanted a new logo that would project written battles as a high-performance sport."}
          </FocusText>
          <BodyText className="mt-4">
            {isEs
              ? "El proyecto llegó a mí en la búsqueda de evolucionar su marca, así que exploramos el estilo de los logotipos de básquetbol, jugando con ángulos afilados y alto contraste."
              : "The project came to me in the search to evolve their brand, so we explored basketball-style logos, playing with sharp angles and high contrast."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="flex flex-col gap-4 py-10">
        <ImagesFocus image={{ src: l16("5_Linea16_SinLimite.gif"), alt: "Linea 16 – Sin Salida logo motion" }} />
      </div>

      {/* Content-1: Visual line for the event */}
      <Content1
        title={isEs ? "Línea visual" : "Visual line"}
        subtitle={isEs ? "Urbana, rojiza, con texturas de la calle" : "Urban, reddish, with street textures"}
      >
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "Ya tenían en puerta el siguiente evento, así que una vez terminado el logotipo, se diseñó la línea visual del evento. Apuntamos por un estilo urbano, rojizo, usando las texturas de la calle, las paredes y grafitos con texturas de aerosol."
              : "They already had their next event coming up, so once the logo was finished, we designed the event's visual line. We went for an urban, reddish style, using street textures, walls, and graffiti with spray-paint textures."}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <Subtitle24>{isEs ? "Referencias" : "References"}</Subtitle24>
          <BodyText>
            {isEs
              ? "Moodboards, para tener referencias de otros eventos de este tipo que se hayan realizado, principalmente busqué referencias en el acomodo de información de Red Bull Batalla de los Gallos."
              : "Moodboards, to have references from other events of this kind — I mainly looked for references in how Red Bull Batalla de los Gallos organized their information."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <ImagesTriple
        images={[
          { src: l16("6_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
          { src: l16("7_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
          { src: l16("8_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
        ]}
      />
      <div className="grid items-center grid-cols-1 md:grid-cols-6 py-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={l16("9_Linea16_SinLimite.mp4")} alt="Linea 16 – Sin Salida visual line" />
        </div>
      </div>

      {/* Content-1: Personal connection */}
      <Content1
        title={isEs ? "Conexión personal" : "Personal connection"}
        subtitle={isEs ? "Un ámbito muy cercano a mí" : "A world very close to me"}
      >
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "Con el tema del hip-hop y el graffiti me sentía muy cómodo, ya que era un ámbito muy cercano a mí; en esos años hacía graffiti y el hip-hop era de la música que más escuchaba."
              : "I felt very comfortable with the hip-hop and graffiti theme, since it was a world very close to me — in those years I did graffiti, and hip-hop was the music I listened to most."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <ImagesDouble
        images={[
          { src: l16("10_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
          { src: l16("11_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
        ]}
      />
      <ImagesDouble
        images={[
          { src: l16("12_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
          { src: l16("13_Linea16_SinLimite.jpg"), alt: "Linea 16 – Sin Salida" },
        ]}
      />

      {/* Content-4: Deliverables + Learnings */}
      <Content4
        title={isEs ? "Qué se entregó" : "Deliverables"}
        items={[
          {
            subtitle: isEs ? "Brand kit" : "Brand kit",
            body: isEs
              ? "Logotipo tipo escudo deportivo y sistema de marca para Linea 16."
              : "Sports-crest logo and brand system for Linea 16.",
          },
          {
            subtitle: isEs ? "Redes e impresos" : "Social & print",
            body: isEs
              ? "Materiales para redes sociales e impresos del evento Callejón Sin Salida."
              : "Social media materials and printed pieces for the Callejón Sin Salida event.",
          },
          {
            subtitle: isEs ? "Merch" : "Merch",
            body: isEs ? "Propuestas de merchandising." : "Merch proposals.",
          },
        ]}
      />

      <Content4
        title={isEs ? "Aprendizajes" : "Learnings"}
        items={[
          {
            subtitle: isEs ? "Mi primer proyecto grande" : "My first big project",
            body: isEs
              ? "En esos años fue mi primer proyecto grande, de un gran impacto a nivel nacional e internacional en el ámbito del hip-hop. Puedo decir que fue el proyecto que me dio mucha seguridad para confiar en lo que hacía, ya que el equipo de Linea 16 me dio toda la confianza de hacerlo."
              : "Back in those years this was my first big project, with a huge impact nationally and internationally within the hip-hop scene. I can say it was the project that gave me a lot of confidence to trust what I was doing, since the Linea 16 team gave me all the confidence to do it.",
          },
          {
            subtitle: isEs ? "Canal de Youtube" : "Youtube channel",
            body: (
              <a
                href="https://www.youtube.com/@lineadieciseis"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                https://www.youtube.com/@lineadieciseis
              </a>
            ),
          },
        ]}
      />

      <OtherProjects currentHref="/project9" />
    </ContentGrid>
  );
}
