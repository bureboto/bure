"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead, HeroDetail, HeroStats } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import { ImagesComplex } from "@/components/caseStudy/Images";
import { BodyText, ContentBorderedItem, Subtitle18 } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project6")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const nouns = (file: string) => `/design/nouns/${file}`;

export default function Project6() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Nouns" project="Devconnect Argentina 2025" />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroMeta
              items={[
                { label: isEs ? "Cliente" : "Client", value: "Nouns" },
                { label: isEs ? "Servicio" : "Service", value: service },
                { label: isEs ? "Año" : "Year", value: year },
                { label: isEs ? "Industria" : "Industry", value: industry },
              ]}
            />
            <HeroLead>
              {isEs
                ? "Nouns me invitó a darle vida a toda la identidad visual de su stand a través de ilustraciones de sus personajes más icónicos en Devconnect Argentina."
                : "Nouns invited me to bring the entire visual identity of their booth to life through illustrations of its most iconic characters at Devconnect Argentina."}
            </HeroLead>
            <BodyText>
              {isEs
                ? "Devconnect se realizó del 17 – 22 de noviembre en Buenos Aires, Argentina."
                : "Devconnect took place November 17–22 in Buenos Aires, Argentina."}
            </BodyText>
          </HeroIntro>
          <div className="flex flex-col gap-2">
            <Subtitle18>{isEs ? "Colaboradores" : "Collaborators"}</Subtitle18>
            <BodyText>
              {isEs ? (
                <>
                  <a
                    href="https://x.com/0xMonografia"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Mono
                  </a>{" "}
                  y{" "}
                  <a
                    href="https://x.com/ok_lex_"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Lex
                  </a>
                  , miembros de la comunidad de Nouns Amigos.
                </>
              ) : (
                <>
                  <a
                    href="https://x.com/0xMonografia"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Mono
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://x.com/ok_lex_"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Lex
                  </a>
                  , members of the Nouns Amigos community.
                </>
              )}
            </BodyText>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label={isEs ? "Impacto" : "Impact"}>
            <HeroStats
              stats={[
                { value: "14,000+", label: isEs ? <>Asistentes<br />Devconnect</> : <>Devconnect<br />attendees</> },
                { value: "20+", label: isEs ? <>Artistas<br />invitados</> : <>Guest<br />artists</> },
                { value: "7,000+", label: isEs ? <>Visitas<br />al stand</> : <>Booth<br />visits</> },
                { value: "12+", label: isEs ? <>Artes<br />diseñadas</> : <>Artworks<br />designed</> },
              ]}
            />
            <BodyText>
              {isEs ? (
                <>
                  Devconnect Argentina tuvo cerca de 14,000 asistentes, y se estima que más de la
                  mitad acudieron al stand de Nouns. Gracias al branding, la gente ubicaba
                  inmediatamente dónde estaba el stand dentro de todo el evento.
                  <br />
                  <br />
                  Más de 20 artistas estuvieron interviniendo en el stand con diversas actividades.
                  <br />
                  <br />
                  La activación tuvo una duración de 6 días de actividades.
                </>
              ) : (
                <>
                  Devconnect Argentina had close to 14,000 attendees, and it&apos;s estimated that
                  more than half of them visited the Nouns booth. Thanks to the branding, people
                  could immediately spot where the booth was within the whole event.
                  <br />
                  <br />
                  More than 20 artists were involved in activities at the booth throughout the event.
                  <br />
                  <br />
                  The activation ran for 6 days of activities.
                </>
              )}
            </BodyText>
          </HeroDetail>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("1_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <Content1 title={isEs ? "Reto" : "Challenge"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "El reto era brandear todo un stand dentro de la Devconnect. Nouns tenía un espacio grande este año, así que querían brandear todo con ilustraciones, utilizando sus personajes más icónicos y representativos para la comunidad, buscando a su vez tener consistencia con el estilo de dibujo, paleta de colores y comunicación en general."
              : "The challenge was to brand an entire booth inside Devconnect. Nouns had a large space this year, so they wanted to brand everything with illustrations, using their most iconic and representative characters for the community, while also aiming for consistency in drawing style, color palette, and overall communication."}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "El principal reto era crear el arte y mandarlo a imprimir a distancia: los impresores estaban en Argentina y yo en México. Debía confiar en que las especificaciones y medidas brindadas eran las correctas y que el arte se viera justo como lo teníamos diseñado (spoiler alert: pequeños detalles de las impresiones no salieron tan bien jeje)."
              : "The main challenge was creating the artwork and sending it to be printed remotely: the printers were in Argentina and I was in Mexico. I had to trust that the specifications and measurements provided were correct, and that the artwork would look exactly as we had designed it (spoiler alert: a few small printing details didn't turn out so well, haha)."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <Content1 title={isEs ? "Proceso" : "Process"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "Tuve sesiones de trabajo con Mono y Lex para entender qué se buscaba proyectar, aprovechando el espacio tan grande con el que se contaba."
              : "I had work sessions with Mono and Lex to understand what we wanted to project, making the most of the large space we had."}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Hice una compilación de los personajes que debíamos plasmar, armé muchos bocetos
                para posicionarlos y después los vectoricé. Este proceso fue de lo más elaborado, ya
                que también requería tener un preview en los mockups que nos compartió el equipo de
                Devconnect.
                <br />
                <br />
                Al terminar, compartí todos los files en formato de pre-prensa, listos para imprimir.
                Fue una grata sorpresa ver el trabajo impreso justo con los colores tan intensos como
                los habíamos planteado.
                <br />
                <br />
                Tomé una paleta de colores acotada, para tener mayor consistencia con los demás
                elementos que se tenían en el stand. En esa edición se contaría con impresión de
                serigrafías, y justo las tintas que se ocuparían fueron, en gran medida, los colores
                que usamos para el branding.
              </>
            ) : (
              <>
                I put together a compilation of the characters we needed to feature, made many
                sketches to position them, and then vectorized them. This was one of the most
                elaborate parts of the process, since it also required previewing them on the
                mockups the Devconnect team shared with us.
                <br />
                <br />
                When I finished, I shared all the files in print-ready, pre-press format. It was a
                pleasant surprise to see the work printed with colors just as intense as we had
                planned.
                <br />
                <br />
                I used a limited color palette for greater consistency with the other elements at the
                booth. That edition included screen-printed pieces, and the inks used were, to a
                large extent, the same colors we used for the branding.
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("2_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <Content1 title={isEs ? "Resultado" : "Result"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs ? (
              <>
                Se diseñaron más de 12 artes para impresión en gran formato, animaciones de estas
                ilustraciones y adaptaciones para su difusión en redes sociales.
                <br />
                <br />
                Realmente fue un trabajo épico por la cantidad de vectores y bocetos que se hicieron.
                <br />
                <br />
                <a
                  href="https://www.flickr.com/photos/196499305@N03/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Galería
                </a>
              </>
            ) : (
              <>
                More than 8 artworks were designed for large-format printing, along with animations
                of these illustrations and adaptations for social media.
                <br />
                <br />
                It was truly an epic amount of work given the number of vectors and sketches
                involved.
                <br />
                <br />
                <a
                  href="https://www.flickr.com/photos/196499305@N03/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Gallery
                </a>
              </>
            )}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("3_Nous_ARG.gif")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={nouns("4_Nous_ARG.gif")} alt="Nouns | Devconnect ARG" />
        <ProjectMedia src={nouns("5_Nous_ARG.gif")} alt="Nouns | Devconnect ARG" />
      </div>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={nouns("7_Cover_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        <ProjectMedia src={nouns("8_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("6_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("9_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={nouns("10_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        <ProjectMedia src={nouns("11_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("12_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={nouns("13_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        <ProjectMedia src={nouns("14_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
      </div>

      <ImagesComplex
        top={{ src: nouns("19_Nous_ARG.jpg"), alt: "Nouns | Devconnect ARG" }}
        bottomLeft={{ src: nouns("17_Nous_ARG.gif"), alt: "Nouns | Devconnect ARG" }}
        bottomRight={{ src: nouns("18_Nous_ARG.gif"), alt: "Nouns | Devconnect ARG" }}
        right={{ src: nouns("16_Nous_ARG.gif"), alt: "Nouns | Devconnect ARG" }}
      />

      <Content1 title={isEs ? "Aprendizajes" : "Learnings"}>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "Trabajar con equipos a nivel internacional siempre es muy retador; en ocasiones hasta las palabras más pequeñas pueden significar algo distinto entre las personas."
              : "Working with international teams is always very challenging; sometimes even the smallest words can mean something different between people."}
          </BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <BodyText>
            {isEs
              ? "No era la primera vez que colaboraba de forma remota, pero sí la primera vez que compartía files de pre-prensa, confiando totalmente en que el equipo del otro lado lo haría excelente — y justo así pasó."
              : "It wasn't the first time I collaborated remotely, but it was the first time I shared pre-press files, trusting completely that the team on the other end would do an excellent job — and that's exactly what happened."}
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={nouns("15_Nous_ARG.jpg")} alt="Nouns | Devconnect ARG" />
        </div>
      </div>

      <OtherProjects currentHref="/project6" />
    </ContentGrid>
  );
}
