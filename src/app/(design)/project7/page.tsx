"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead, HeroDetail, HeroStats } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import { BodyText, LeadText, Subtitle18 } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project7")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const sg = (file: string) => `/design/singapore/${file}`;

export default function Project7() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Nouns" project="ETHGlobal Singapore 2024" />

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
                ? "Nouns me buscó para construir la identidad visual completa de su stand en ETHGlobal Singapore, tomando como inspiración el imaginario de la ciudad, su naturaleza y sus costumbres."
                : "Nouns brought me on to build the complete visual identity for their booth at ETHGlobal Singapore, drawing inspiration from the city's imagery, its nature, and its customs."}
            </HeroLead>
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
                  , ambos parte de la comunidad Nouns Amigos.
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
                  , both part of the Nouns Amigos community.
                </>
              )}
            </BodyText>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label={isEs ? "Impacto" : "Impact"}>
            <HeroStats
              stats={[
                { value: "1,300+", label: isEs ? <>Asistentes<br />ETHGlobal</> : <>ETHGlobal<br />attendees</> },
                { value: "650+", label: isEs ? <>Visitas<br />al stand</> : <>Booth<br />visits</> },
                { value: "8+", label: isEs ? <>Artes<br />diseñadas</> : <>Artworks<br />designed</> },
              ]}
            />
            <BodyText>
              {isEs
                ? "ETHGlobal Singapore tuvo cerca de 1,300 asistentes, y se estima que más de la mitad visitó el stand de Nouns. Varias personas comentaron que, gracias al branding, lograban ubicar el stand de inmediato."
                : "ETHGlobal Singapore had close to 1,300 attendees, and it's estimated that more than half of them visited the Nouns booth. People mentioned that, thanks to the branding, they could spot the booth right away."}
            </BodyText>
          </HeroDetail>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={sg("5_Singapore.gif")} alt="Nouns | ETHGlobal Singapore" />
        </div>
      </div>

      <Content1 title={isEs ? "Reto" : "Challenge"}>
        <LeadText>
          {isEs
            ? "La encomienda consistía en vestir por completo el stand de ETHGlobal con una identidad propia. En esta ocasión, Nouns quería que el arte dialogara con Singapur: su skyline, su fauna emblemática y la vegetación de la ciudad."
            : "The assignment was to fully dress ETHGlobal's booth with its own identity. This time, Nouns wanted the artwork to speak to Singapore itself — its skyline, its iconic wildlife, and the city's greenery."}
        </LeadText>
        <BodyText>
          {isEs
            ? "El desafío logístico más grande fue producir el arte y enviarlo a imprimir sin estar presente: la imprenta se encontraba en Singapur y yo trabajaba desde México. Tuve que depender por completo de las medidas y especificaciones que me compartieron, confiando en que el resultado final respetaría el diseño — y así fue, el acabado salió excelente."
            : "The main challenge was creating the artwork and sending it off to print without being there in person: the print shop was in Singapore while I worked from Mexico. I had to rely entirely on the measurements and specs I was given, trusting the final result would match the design — and it did, the finish came out excellent."}
        </BodyText>
      </Content1>

      <Content1 title={isEs ? "Proceso" : "Process"}>
        <LeadText>
          {isEs
            ? "Arrancamos con varias juntas junto a Mono y Lex para definir qué queríamos comunicar, pensando en cómo aprovechar el espacio disponible."
            : "We kicked off with several sessions alongside Mono and Lex to define what we wanted to communicate, thinking through how to make the most of the available space."}
        </LeadText>
        <BodyText>
          {isEs ? (
            <>
              Reuní el elenco de personajes que íbamos a usar, hice decenas de bocetos para definir
              su composición y luego pasé todo a vector. Fue una de las etapas más laboriosas,
              porque también tenía que probar cómo se veía cada pieza dentro de los mockups que nos
              pasó el equipo del evento.
              <br />
              <br />
              Investigamos los puntos de referencia más representativos del país, su mascota, la
              flora local y algunas de sus tradiciones; a partir de ahí, fui traduciendo cada
              hallazgo a una ilustración con el estilo visual de Nouns.
              <br />
              <br />
              El stand se diseñó como una experiencia: la gente podía meterse al ecosistema,
              tomarse una foto, sentarse en una banca y quedar rodeada por todas las piezas que
              creamos.
              <br />
              <br />
              Una vez cerrado el diseño, mandé todos los archivos listos para imprenta. Ver el
              resultado final — con los colores tan vivos como los habíamos definido — fue una
              sorpresa muy grata.
            </>
          ) : (
            <>
              I gathered the cast of characters we&apos;d be using, sketched out dozens of layout
              options, and then took everything to vector. It was one of the most labor-intensive
              stages, since I also had to test how each piece looked within the mockups the event
              team sent over.
              <br />
              <br />
              We researched the country&apos;s most representative landmarks, its mascot, the local
              flora, and a few of its traditions; from there, I translated each finding into an
              illustration with Nouns&apos; visual style.
              <br />
              <br />
              The booth was designed as an experience: people could step into the ecosystem, take a
              photo, sit on a bench, and find themselves surrounded by every piece we created.
              <br />
              <br />
              Once the design was locked, I sent over all the print-ready files. Seeing the final
              result — with colors as vivid as we&apos;d planned — was a very pleasant surprise.
            </>
          )}
        </BodyText>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectMedia src={sg("2_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
        <ProjectMedia src={sg("3_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <ProjectMedia src={sg("10_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
        <ProjectMedia src={sg("9_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
        <ProjectMedia src={sg("8_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
      </div>

      <Content1 title={isEs ? "Resultado" : "Result"}>
        <LeadText>
          {isEs
            ? "El proyecto terminó incluyendo más de 8 piezas de arte para impresión en gran formato, sus respectivas animaciones y versiones adaptadas para redes sociales — un volumen de vectores y bocetos considerable."
            : "The project ended up including more than 8 pieces of art for large-format printing, their respective animations, and versions adapted for social media — a considerable volume of vectors and sketches."}
        </LeadText>
      </Content1>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <ProjectMedia src={sg("4_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
        <ProjectMedia src={sg("1_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
      </div>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <div className="flex flex-col gap-2">
          <ProjectMedia src={sg("6_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectMedia src={sg("7_Singapore.jpg")} alt="Nouns | ETHGlobal Singapore" />
          <p className="text-[12px] text-[#6e6e73]">{isEs ? "Detalle" : "Detail"}</p>
        </div>
      </div>

      <Content1 title={isEs ? "Aprendizajes" : "Learnings"}>
        <LeadText>
          {isEs
            ? "Colaborar con equipos de otros países siempre trae su nivel de dificultad: a veces basta una palabra mal interpretada para que el mensaje cambie de sentido entre ambas partes."
            : "Working with international teams is always very challenging; sometimes a single word, taken the wrong way, is enough to shift the meaning between both sides."}
        </LeadText>
        <BodyText>
          {isEs ? (
            <>
              No era mi primera colaboración remota, pero sí la primera vez que entregaba archivos
              de pre-prensa sin poder supervisar la impresión en persona — tuve que confiar por
              completo en el equipo del otro lado, y la confianza se vio recompensada.
              <br />
              <br />
              {"Galería fotográfica ("}
              <a
                href="https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/
              </a>
              )
            </>
          ) : (
            <>
              It wasn&apos;t my first remote collaboration, but it was the first time handing off
              pre-press files without being able to oversee the printing in person — I had to trust
              the team on the other end completely, and that trust paid off.
              <br />
              <br />
              {"Photo gallery ("}
              <a
                href="https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/
              </a>
              )
            </>
          )}
        </BodyText>
      </Content1>

      <OtherProjects currentHref="/project7" />
    </ContentGrid>
  );
}
