"use client";

import Image from "next/image";
import Link from "next/link";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const ine = (file: string) => `/design/INE/${file}`;

function renderBody(body: string) {
  const parts = body.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-[#1d1d1d]">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[36px] font-bold text-[#1d1d1d]">{children}</p>;
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[21px] font-bold text-[#1d1d1d] mb-2">{children}</p>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[15px] tracking-[0.15px] text-[#6e6e73] ${className}`}>{children}</p>;
}

function Sub({
  children,
  bordered = true,
}: {
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return <div className={bordered ? "border-l border-black pl-4" : ""}>{children}</div>;
}

function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[596/360]",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className={`relative w-full ${aspect}`}>
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      {caption && <p className="text-[11px] text-[#6e6e73]">{caption}</p>}
    </div>
  );
}

// Renders only the current site language's paragraph, picking between the
// Spanish and English text as written in the source document — nothing
// here is translated, just toggled.
function Bi({ es, en, lead = false }: { es: string; en: string; lead?: boolean }) {
  const { language } = useLanguage();
  const text = renderBody(language === "es" ? es : en);
  return lead ? (
    <p className="text-[28px] font-light text-[#6e6e73]">{text}</p>
  ) : (
    <Body>{text}</Body>
  );
}

const linkClass = "underline underline-offset-4 text-[#1d1d1d]";

function T({ es, en }: { es: string; en: string }) {
  const { language } = useLanguage();
  return <>{language === "es" ? es : en}</>;
}

export default function Project13() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-16">
      {/* Back link + breadcrumb */}
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← INE
        </Link>
        <p className="text-[21px] font-light text-[#6e6e73]">
          <T es="Materiales de ayuda del PREP" en="PREP Help Materials" />
        </p>
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-10 md:flex-row md:gap-10">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-8">
            {[
              { es: { label: "Cliente", value: "INE" }, en: { label: "Client", value: "INE" } },
              {
                es: { label: "Servicio", value: "Sistema de diseño, Ilustración, UX Writing" },
                en: { label: "Service", value: "Design System, Illustration, UX Writing" },
              },
              { es: { label: "Año", value: "2018" }, en: { label: "Year", value: "2018" } },
              { es: { label: "Industria", value: "Gobierno" }, en: { label: "Industry", value: "Government" } },
            ].map((item) => (
              <div key={item.en.label} className="flex flex-col">
                <p className="text-[11px] text-[#6e6e73]">
                  <T es={item.es.label} en={item.en.label} />
                </p>
                <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d]">
                  <T es={item.es.value} en={item.en.value} />
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-[48px] leading-[0.9] font-bold text-[#1d1d1d]">
            INE – <T es="Materiales de ayuda del PREP" en="PREP Help Materials" />
          </h1>
          <Bi
            es="Branding para los capturistas y el centro de ayuda de las elecciones nacionales de México de 2018."
            en="Branding for the data entry staff and help center of Mexico's 2018 national elections."
          />
          <Bi
            es="Creamos todo el material multimedia para capacitar y apoyar, hasta el día de la elección, a más de 8,000 capturistas con los que contaba el INE a nivel nacional, además de un centro de ayuda en línea para que la ciudadanía pudiera entender los procesos del INE en esa elección."
            en="We created all the multimedia material to train and support, up to election day, the more than 8,000 data entry staff the INE had nationwide, plus an online help center so citizens could understand the INE's processes in those elections."
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d] font-bold mb-1">
              <T es="Mi rol" en="My role" />
            </p>
            <Bi es="Diseñador principal y Manager" en="Principal designer & Manager" />
          </div>
          <div>
            <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d] font-bold mb-1">
              <T es="Equipo" en="Team" />
            </p>
            <Bi
              es="Un equipo de 8 personas: 3 diseñadores, 1 arquitecta de información, 1 motion designer, 2 developers y yo como Principal Designer & Manager."
              en="A team of 8 people: 3 designers, 1 information architect, 1 motion designer, 2 developers, and me as Principal Designer & Manager."
            />
          </div>
          <div>
            <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d] font-bold mb-1">Impact</p>
            <Body>
              {renderBody(
                "During election week (June 28 to July 4, 2018), the help center received more than **171,000 users** and 226,000 page views. Traffic peaked on July 2, the day after the election, with nearly **100,000 page views in a single day**, and the average time on page was **3 minutes and 34 seconds**. On top of that came the training material for the more than 8,000 PREP staff who captured the tally sheets."
              )}
            </Body>
          </div>
        </div>
      </div>

      <Figure src={ine("INE-Intro.jpg")} alt="INE PREP help center introduction" aspect="aspect-[1200/590]" />

      {/* Context */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1">
          <SectionTitle><T es="Contexto" en="Context" /></SectionTitle>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SubLabel><T es="¿Qué es el PREP y por qué importa?" en="What is the PREP and why does it matter?" /></SubLabel>
            <Bi
              es="El PREP es el Programa de Resultados Electorales Preliminares, que publica los primeros resultados de la elección a partir de las actas de cada casilla. En 2018 se vivió **la elección más grande de la historia de México**: además de la elección federal, hubo elecciones locales en 30 de los 32 estados, con una participación de **56.6 millones de votantes**."
              en="The PREP (Preliminary Electoral Results Program) publishes the first results of the election based on the tally sheets from each polling station. 2018 was **the largest election in Mexico's history**: alongside the federal election, 30 of the 32 states held local elections, with a turnout of **56.6 million voters**."
            />
          </div>
          <div className="flex flex-col gap-4">
            <SubLabel><T es="¿Quién usaba los materiales?" en="Who used the materials?" /></SubLabel>
            <Bi
              es="Este proyecto dio ayuda a la capacitación de más de 8,000 capturistas a nivel nacional, que registraron las actas con la información de cada una de las **157,000 casillas** que se colocaron en todo el país. Además, el centro de ayuda sirvió como **guía para la ciudadanía**: cualquier persona podía consultarlo para entender qué hacía el PREP, cómo funcionaba y de dónde salían los resultados preliminares de la elección."
              en="This project supported the training of more than 8,000 data entry staff nationwide, who recorded the tally sheets with the results from each of the **157,000 polling stations** set up across the country. The help center also served as a **guide for citizens**: anyone could visit it to understand what the PREP did, how it worked, and where the preliminary election results came from."
            />
          </div>
          <div className="flex flex-col gap-4">
            <SubLabel><T es="¿Cómo estaba formado el equipo?" en="Who was on the team?" /></SubLabel>
            <Bi
              es="Un equipo de 8 personas: 3 diseñadores, 1 arquitecta de información, 1 motion designer, 2 developers y yo como Principal designer & Manager."
              en="A team of 8 people: 3 designers, 1 information architect, 1 motion designer, 2 developers, and me as Principal Designer & Manager."
            />
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="flex flex-col gap-16 border-t border-black/20 pt-16">
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex-1">
            <SectionTitle><T es="Retos y cómo los resolvimos" en="Challenges and how we solved them" /></SectionTitle>
          </div>
          <div className="flex-1">
            <Bi
              es="Necesitábamos plasmar todo el proceso del PREP de una forma simple y directa. Todo un reto, porque este proceso conlleva muchos tecnicismos y términos legales poco fáciles de comprender a la primera."
              en="We needed to present the entire PREP process in a simple, direct way. That was a challenge in itself, because the process involves many technical and legal terms that are hard to grasp at first."
            />
          </div>
        </div>

        {/* Challenge 1 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Reto 1: Equipos viejos y conexión lenta" en="Challenge 1: Old devices and slow connections" />
            </p>
            <Sub bordered={false}>
              <SubLabel><T es="Reto" en="Challenge" /></SubLabel>
              <Bi
                es="Nuestro usuario podía vivir en el norte, centro o sur de México, así que el sitio tenía que ser fácil de usar tanto en una computadora actual como en una que aún tuviera Internet Explorer en una sierra alejada de la ciudad."
                en="Our users could live in the north, center, or south of Mexico, so the site had to be easy to use on a modern computer as well as on one still running Internet Explorer in a remote mountain town."
              />
            </Sub>
            <Sub>
              <SubLabel><T es="Solución" en="Solution" /></SubLabel>
              <Bi
                es="Diseñamos un sitio web sin animaciones complejas, cuidando su peso para que la carga no fuera un problema: el sitio completo **no pasaba de los 4 MB**. Los videos se optimizaron para reducir su tamaño **hasta en un 80%** de su peso original, conservando su calidad. Junto con el equipo de desarrollo, hacíamos pruebas constantes de rendimiento en distintos navegadores, velocidades de conexión y dispositivos móviles antiguos. Los datos lo confirmaron: más de la mitad de los usuarios entró **desde un celular**, y **1,682 personas** consultaron el sitio desde Internet Explorer."
                en="We designed a website without complex animations and kept its weight low so loading wouldn't be a problem: the entire site **stayed under 4 MB**. We optimized the videos to cut their file size by **up to 80%** while keeping their quality. Together with the development team, we constantly tested performance across browsers, connection speeds, and older mobile devices. The data confirmed it: more than half of users visited **from a phone**, and **1,682 people** accessed the site from Internet Explorer."
              />
            </Sub>
          </div>
          <div className="flex-1">
            <Figure src={ine("INE-Challenge-1.jpg")} alt="INE challenge 1, old devices and slow connections" />
          </div>
        </div>

        {/* Challenge 2 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Reto 2: Usuarios de todas las edades" en="Challenge 2: Users of all ages" />
            </p>
            <Sub bordered={false}>
              <SubLabel><T es="Reto" en="Challenge" /></SubLabel>
              <Bi
                es="Nuestro usuario tenía un rango de edad muy amplio, de los 18 a los 60 años, con distintos niveles de estudio y de familiaridad con la tecnología."
                en="Our users spanned a very wide age range, from 18 to 60, with different levels of education and familiarity with technology."
              />
            </Sub>
            <Sub>
              <SubLabel><T es="Solución" en="Solution" /></SubLabel>
              <Bi
                es="Sintetizamos al máximo todos los contenidos, siempre buscando claridad y precisión. Para lograrlo, trabajé de cerca con una arquitecta de información, con quien definimos la **arquitectura del sitio y el UX writing**."
                en="We condensed all the content as much as possible, always aiming for clarity and precision. To do this, I worked closely with an information architect, with whom I defined the **site architecture and the UX writing**."
              />
              <Bi
                es="Diseñamos el sitio pensando en que las imágenes fueran solo un complemento del contenido, como una versión lite integrada en el mismo sitio. Usamos **tipografías del sistema**, disponibles en cualquier computadora sin necesidad de instalarlas; aplicamos **alto contraste** validado con pruebas de contraste para UI; y evitamos poner texto dentro de las imágenes, para que, si alguna no cargaba, no se perdiera información importante."
                en="We designed the site so images were only a complement to the content, like a lite version built into the same site. We used **system fonts**, available on any computer without installation; applied **high contrast** validated with UI contrast tests; and avoided placing text inside images, so that if one didn't load, no important information was lost."
              />
              <Bi
                es="La guía de ilustración tuvo un papel clave para escalar la producción de videos. Estos materiales **explicaban en segundos** los puntos más importantes del PREP, de forma entendible sin importar la edad o el nivel de estudios. Explicar el PREP siempre había sido un reto para la gente del INE, y resumirlo en video ayudó a que cada persona comprendiera su rol dentro de la elección."
                en="The illustration guide played a key role in scaling video production. These videos explained the most important points of the PREP **in seconds**, in a way anyone could understand regardless of age or education level. Explaining the PREP had always been a challenge for INE staff, and summarizing it on video helped each person understand their role in the election."
              />
            </Sub>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Figure src={ine("INE-Challenge-2-1.jpg")} alt="INE challenge 2, users of all ages, illustration guide" />
            <Figure src={ine("INE-Challenge-2-2.jpg")} alt="INE challenge 2, system fonts and high contrast" />
            <Figure src={ine("INE-Challenge-2-3.gif")} alt="INE challenge 2, explainer video" />
          </div>
        </div>

        {/* Challenge 3 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Reto 3: Contenido legal y neutralidad" en="Challenge 3: Legal content and neutrality" />
            </p>
            <Sub bordered={false}>
              <SubLabel><T es="Reto" en="Challenge" /></SubLabel>
              <Bi
                es="Todo el contenido se hacía de la mano con el equipo legal: se cuidaba cada tecnicismo y el lugar donde poníamos cada mención a alguna ley. Además, se debía tener extrema precaución con el uso de colores más allá de los institucionales, para no dar la impresión de favorecer a algún partido en particular."
                en="All content was developed hand in hand with the legal team: every technical term and every reference to a law was carefully placed. We also had to be extremely careful with any colors beyond the institutional ones, so as not to appear to favor any political party."
              />
            </Sub>
            <Sub>
              <SubLabel><T es="Solución" en="Solution" /></SubLabel>
              <Bi
                es="Delimitamos la paleta a los colores institucionales y solo ampliamos el espectro derivando tonos: el rosa, color institucional del INE, como base, y el aqua, su complementario, solo para algunos acentos. Elegimos estos colores porque son de los que menos aparecen en los partidos políticos, lo que nos ayudaba a **mantener la neutralidad**."
                en="We limited the palette to the institutional colors and only expanded it by deriving tones: pink, the INE's institutional color, as the base, and aqua, its complement, only for a few accents. We chose these colors because they are among the least used by political parties, which helped us **stay neutral**."
              />
              <Bi
                es="La parte legal fue un reto aparte: constantemente se ajustaban artículos o salían nuevas disposiciones, y debíamos actualizar los materiales. Para manejarlo, llevábamos un **control de versiones** de cada archivo, lo que nos permitía hacer cambios rápido sin perder el rastro de lo aprobado."
                en="The legal side was a challenge of its own: articles were constantly adjusted or new provisions issued, and we had to update the materials. To manage this, we kept **version control** on every file, which let us make changes quickly without losing track of what had been approved."
              />
            </Sub>
          </div>
          <div className="flex-1">
            <Figure src={ine("INE-Challenge-3-1.jpg")} alt="INE challenge 3, legal content and neutrality, color palette" />
          </div>
        </div>

        {/* Challenge 4 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Reto 4: Tiempos y aprobaciones del INE" en="Challenge 4: INE timelines and approvals" />
            </p>
            <Sub bordered={false}>
              <SubLabel><T es="Reto" en="Challenge" /></SubLabel>
              <Bi
                es="El tiempo estaba marcado, pero se debía empujar mucho a las áreas del INE para que todo saliera a tiempo. Hubo momentos en los que avanzar o no, no estaba en nuestras manos."
                en="The deadline was fixed, but we had to push the INE's departments hard to get everything out on time. At times, whether we could move forward was out of our hands."
              />
            </Sub>
            <Sub>
              <SubLabel><T es="Solución" en="Solution" /></SubLabel>
              <Bi
                es="**Armé un calendario propio** de actividades y entregables para el equipo, para que siempre estuviéramos listos para entregar. Cuando otras áreas se atrasaban en autorizar contenidos, avanzábamos de todos modos: enviábamos el material por correo indicando el estado actual de cada archivo y qué parte seguía en proceso de aprobación. Así, los retrasos externos nunca se convirtieron en un bloqueo para nuestro flujo de trabajo, y **todo se entregó en tiempo y forma**."
                en="**I set up our own calendar** of activities and deliverables for the team, so we were always ready to deliver. When other departments were late approving content, we kept moving: we sent the material by email, noting the current status of each file and which parts were still pending approval. That way, external delays never blocked our workflow, and **everything was delivered on time** and as agreed."
              />
            </Sub>
          </div>
          <div className="flex-1">
            <Figure src={ine("INE-Challenge-4.jpg")} alt="INE challenge 4, timelines and approvals, calendar" />
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16">
        <SectionTitle><T es="Qué se entregó" en="Deliverables" /></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Guía de estilo de ilustración" en="Illustration style guide" />
            </p>
            <Bi
              es="**La base de todo el sistema**. Definía formatos, tipografías, elementos base, colores e ilustraciones, con la flexibilidad de estilo necesaria para adaptarse a cualquier pieza, e incluía ejemplos de uso. A partir de ella se crearon informes, infografías, publicaciones para redes sociales y materiales de uso interno."
              en="**The foundation of the whole system**. It defined formats, typography, base elements, colors, and illustrations, with the stylistic flexibility needed to adapt to any piece, and included usage examples. It became the basis for reports, infographics, social media posts, and internal materials."
            />
            <Figure src={ine("INE-Illustration.jpg")} alt="INE illustration style guide" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Sitio web" en="Website" /></p>
            <Bi
              es="El centro de ayuda para que la ciudadanía conociera qué es el PREP, cómo funciona y cuáles son sus objetivos. Se organizó en **siete secciones**: Conoce el PREP, Elecciones federales, Acerca del voto, Actas, Glosario, Aspectos técnicos y Preguntas frecuentes."
              en="The help center where citizens could learn what the PREP is, how it works, and what its goals are. It was organized into **seven sections**: About the PREP, Federal Elections, About the Vote, Tally Sheets, Glossary, Technical Aspects, and FAQ."
            />
            <Figure src={ine("INE-Fotos.jpg")} alt="INE PREP help center website" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Videos</p>
            <Bi
              es="**Más de 10 clips** de alrededor de un minuto cada uno, con adaptaciones para el sitio web y las redes sociales."
              en="**More than 10 clips** of about one minute each, adapted for the website and social media."
            />
            <Figure src={ine("INE-Videos.jpg")} alt="INE video deliverables" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Guías para documentos internos" en="Internal document guidelines" />
            </p>
            <Bi
              es="Lineamientos para crear ilustraciones, presentaciones, documentos y plantillas, de libre uso para todo el personal del INE."
              en="Guidelines for creating illustrations, presentations, documents, and templates, free for all INE staff to use."
            />
            <Figure src={ine("INE-Documents.jpg")} alt="INE internal document guidelines" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Instalaciones" en="Installations" /></p>
            <Bi
              es="Señalética, banners y murales para el simulacro del PREP."
              en="Signage, banners, and murals for the PREP drill."
            />
            <Figure src={ine("INE-Installations.jpg")} alt="INE installations, signage and banners" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Impresos" en="Print" /></p>
            <Bi es="Carteles, folletos y manuales." en="Posters, brochures, and manuals." />
            <Figure src={ine("INE-Prints.jpg")} alt="INE print deliverables, posters and manuals" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Stand</p>
            <Bi
              es="Un espacio dentro de las instalaciones del INE para la prensa, que se instaló durante la **jornada electoral** para que los medios pudieran visitarlo e informarse sobre qué es el PREP y cómo funciona."
              en="A space inside the INE's facilities for the press, set up on **election day** so media outlets could visit it and learn what the PREP is and how it works."
            />
            <Figure src={ine("INE-Stand.jpg")} alt="INE press stand" />
          </div>
        </div>
      </div>

      {/* Learnings */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16">
        <SectionTitle><T es="Aprendizajes" en="Learnings" /></SectionTitle>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-10">
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T
                es="Coordinar disciplinas sin estorbarse"
                en="Coordinating disciplines without getting in each other's way"
              />
            </p>
            <Bi
              es="Aprendí a entender el timing de cada disciplina y a fusionar copy, diseño, motion y desarrollo sin que se estorbaran entre sí; al contrario, logramos crear algo con mucha estructura. La unión del equipo fue increíble: de ahí salieron grandes amistades que, aún fuera del trabajo, se siguen frecuentando."
              en="I learned to understand each discipline's timing and to bring copy, design, motion, and development together without getting in each other's way; instead, we built something very well structured. The team's bond was incredible: it led to great friendships that continue outside of work."
            />
          </div>
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Saber decir no" en="Learning to say no" /></p>
            <Bi
              es="Como resolvíamos todo en tiempo y forma, en ocasiones nos buscaban cargar la mesa de trabajo. Si algo cambiaría, sería poner límites más claros a nuestras actividades desde el inicio. Fue algo en lo que crecí mucho: **aprender a decir no**."
              en="Because we always delivered on time, people sometimes tried to pile more work on us. If I could change one thing, it would be setting clearer limits on our scope from the start. It's something I grew a lot in: **learning to say no**."
            />
          </div>
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Diseñar para cualquier formato" en="Designing for any format" /></p>
            <Bi
              es="Diseñar un sistema multiplataforma me enseñó a simplificar el uso de los elementos visuales y a considerar todas las variables de uso: tamaños, soportes, limitaciones visuales y de equipo, y optimización de recursos."
              en="Designing a multiplatform system taught me to simplify the use of visual elements and to consider every usage variable: sizes, media, visual and hardware limitations, and resource optimization."
            />
          </div>
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">
              <T es="Documentar para que otros continúen" en="Documenting so others can continue" />
            </p>
            <Bi
              es="Aprendí a documentar el diseño de forma que cualquier persona pudiera **continuar el sistema** con los parámetros que establecimos."
              en="I learned to document design so that anyone could **continue the system** using the parameters we set."
            />
          </div>
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Diseñar más allá de lo visual" en="Designing beyond the visual" /></p>
            <Bi
              es="Trabajar con una institución me enseñó a diseñar contemplando todo lo que implica un proyecto, más allá de lo bonito o funcional que pueda ser un diseño: cubrir también los **requerimientos legales y tecnológicos**."
              en="Working with an institution taught me to design with everything a project involves in mind, beyond how beautiful or functional a design can be: also meeting **legal and technological requirements**."
            />
          </div>
          <div className="flex flex-col gap-3 md:border-l md:border-black md:pl-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]"><T es="Qué haría diferente hoy" en="What I'd do differently today" /></p>
            <Bi
              es="Haría una medición después del PREP para conocer el impacto en la ciudadanía y en los capturistas que consultaron la información, y dejar documentado qué se debería considerar en futuras elecciones."
              en="I would run a post-PREP assessment to measure the impact on citizens and on the data entry staff who used the information, and document what should be considered for future elections."
            />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1 flex flex-col gap-10">
          <Bi
            es="**Un agradecimiento especial** a las personas que me ayudaron en el camino: sin ustedes, nada de esto habría sido posible. Ustedes saben quiénes son. 🙌"
            en="**Special thanks** to the people who helped me along the way: none of this would have been possible without you. You know who you are. 🙌"
            lead
          />
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-bold text-[#1d1d1d]"><T es="Equipo del proyecto" en="Project team" /></p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-[#6e6e73]"><T es="Diseñadores" en="Designers" /></p>
                <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d]">Bure</p>
                <a
                  href="https://www.linkedin.com/in/leonor-t-4134ab122/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Leonor Toscano
                </a>
                <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d]">Mauricio Rosales</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-[#6e6e73]"><T es="Desarrolladores" en="Devs" /></p>
                <a
                  href="https://www.linkedin.com/in/vania-mydori-castillo-rend%C3%B3n-0a923099/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Vania Castillo
                </a>
                <a
                  href="https://www.linkedin.com/in/maribel-isidoro-pichardo-6340aa167/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Maribel Pichardo
                </a>
                <p className="text-[15px] tracking-[0.15px] text-[#1d1d1d]">Daniel</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-[#6e6e73]">Motion</p>
                <a
                  href="https://www.linkedin.com/in/alexis11err/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Alexis Ramírez
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-[#6e6e73]"><T es="Arquitectura de información" en="Information architecture" /></p>
                <a
                  href="https://www.linkedin.com/in/laura-arias-oropeza-4b153a82/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Laura Arias
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Figure src={ine("INE-Team.jpg")} alt="INE project team" aspect="aspect-[580/360]" />
        </div>
      </div>

      <OtherProjects currentHref="/project13" />
    </ContentGrid>
  );
}
