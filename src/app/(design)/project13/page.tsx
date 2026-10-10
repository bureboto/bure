"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const robotos = (file: string) => `/design/robotos/${file}`;

function FullRow({ src }: { src: string }) {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-4">
        <ProjectMedia src={src} alt="Robotos" />
      </div>
    </div>
  );
}

function EdgeRow({ items }: { items: string[] }) {
  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${
        items.length === 2
          ? "md:grid-cols-2"
          : items.length === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-4"
      }`}
    >
      {items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Robotos" />
      ))}
    </div>
  );
}

const socialGrid = [16, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 28].map((n) =>
  robotos(`${n}_Robotos.mp4`)
);

const linkClass = "underline underline-offset-4";
const people = {
  pabloStanley: "https://www.linkedin.com/in/pablostanley1/",
  comercial: "https://vimeo.com/669652372",
  robotosCollection: "https://opensea.io/es/collection/robotos-official",
  marianaPedroza: "https://www.linkedin.com/in/soymariana/",
  viri: "https://www.linkedin.com/in/viridiana-guti%C3%A9rrez/",
  rojo: "https://www.linkedin.com/in/alan-david-hern%C3%A1ndez-trujillo-45690112a/",
  gabs: "https://www.linkedin.com/in/gzampino/",
  sjoerd: "https://www.linkedin.com/in/sjoerd-huisman-5a176420/",
  niklas: "https://www.linkedin.com/in/niklaspeterson/",
};

export default function Project13() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Robopets</h1>
          <span className="text-sm text-black/60">{isEs ? "2021–2024 · Brand | Ilustración" : "2021–2024 · Brand | Illustration"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs ? (
              <>
                Colección de Arte NFT que vive en la blockchain, generados algorítmicamente. Robopets
                surge de{" "}
                <a href={people.robotosCollection} target="_blank" rel="noreferrer" className={linkClass}>
                  Robotos
                </a>{" "}
                y la creé en colaboración con{" "}
                <a href={people.pabloStanley} target="_blank" rel="noreferrer" className={linkClass}>
                  Pablo Stanley
                </a>{" "}
                — cientos de bocetos, cientos de ideas, cientos de risas dieron más de 8,000 PFPs que
                adquirieron más de 4,000 personas, teniendo un volumen de intercambio de la colección de
                más de 890 Ethereum.
              </>
            ) : (
              <>
                NFT Art Collection that lives on the blockchain, generated algorithmically. Robopets comes
                from{" "}
                <a href={people.robotosCollection} target="_blank" rel="noreferrer" className={linkClass}>
                  Robotos
                </a>
                , and I created it in collaboration with{" "}
                <a href={people.pabloStanley} target="_blank" rel="noreferrer" className={linkClass}>
                  Pablo Stanley
                </a>{" "}
                — hundreds of sketches, hundreds of ideas, hundreds of laughs gave us more than 8,000
                PFPs, bought by more than 4,000 people, with a trading volume of over 890 Ethereum.
              </>
            )}
          </p>
          <p>
            {isEs
              ? "Estábamos en pleno boom de los NFTs, así que se sentía urgencia en todos los sentidos — necesitábamos crear la colección lo antes posible. El proceso de diseño tomó alrededor de solo 2 semanas (una locura)."
              : "We were in the middle of the NFT boom, so it felt urgent in every way — we needed to create the collection ASAP. The design process took about 2 weeks (so insane)."}
          </p>
        </div>
      </div>

      <FullRow src={robotos("7_Robotos.gif")} />

      <ProjectMedia src={robotos("1_Robotos.webp")} alt="Robotos" />

      <div className="grid items-center grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4 grid items-center grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectMedia src={robotos("19_Robotos.mp4")} alt="Robotos" />
          <ProjectMedia src={robotos("31_Robotos.mp4")} alt="Robotos" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Al ser los Robopets mascotas de los Robotos, el reto era darles una identidad compartida entre sí, pero que cada pet también tuviera rasgos únicos. La solución: cada Robopet tendría por lo menos un rasgo del Roboto — ya sea su color de cuerpo, ojos, casco u otro, logrando así una conexión real entre cada Roboto y su mascota. Siempre tuvimos en mente que estos elementos serían la base para crear mundos y contenidos para la marca."
            : "Since Robopets are the Robotos' pets, the challenge was to give them a shared identity, but each pet also needed its own unique traits. The solution: each Robopet would have at least one trait from its Roboto — whether it was body color, eyes, helmet, or something else — creating a real connection between each Roboto and its pet. We always kept in mind that these assets would be the base for building worlds and content for the brand."}
        </p>
        <p>
          {isEs
            ? "Fue increíble poder aplicar un sistema de diseño en ilustraciones. El proceso siempre empezaba a mano, se creó la base de diferentes pets (perrito, gatito, etc..) sobre esas bases comenzamos a idear elementos que sería divertido que tuvieran, sin olvidar elementos con los que ya contaban los Robotos."
            : "It was incredible to apply a design system to illustrations. The process always started by hand: we created the base for different pets (a little dog, a little cat, etc.), and from there we started coming up with fun elements for them, without forgetting the elements the Robotos already had."}
        </p>
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <EdgeRow items={[robotos("18_Robotos.mp4"), robotos("17_Robotos.mp4")]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70 text-[0.85rem]">
          <p>{isEs ? "Contenido para el anuncio de Robopets" : "Content for the Robopets announcement"}</p>
          <p>{isEs ? "La colección en un billboard en NY." : "The collection on a billboard in NY."}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <div className="grid items-center grid-cols-1 md:grid-cols-4 gap-0">
          <ProjectMedia src={robotos("2_Robotos.mp4")} alt="Robotos" />
          <ProjectMedia src={robotos("3_Robotos.mp4")} alt="Robotos" />
          <ProjectMedia src={robotos("4_Robotos.mp4")} alt="Robotos" />
          <ProjectMedia src={robotos("5_Robotos.mp4")} alt="Robotos" />
        </div>
        <p className="text-[0.85rem] text-black/70">
          {isEs
            ? "Los personajes salieron de la pantalla y junto con el equipo, los plasmamos en pared."
            : "The characters stepped out of the screen and, together with the team, we brought them to a wall."}
        </p>
      </div>

      <EdgeRow items={[robotos("9_Robotos.jpg"), robotos("10_Robotos.jpg"), robotos("6_Robotos.jpg")]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Tuvimos muchas juntas para definir qué rasgos funcionaban y cuáles no. La comunidad fue una parte importante del proceso, y Pablo y yo nos inspiramos de ahí. Al final fue muy satisfactorio ver a todos los nuevos dueños de Robopets haciendo compañía a sus Robotos."
            : "We had a lot of meetings to figure out which traits worked and which didn't. The community was a big part of the process, and Pablo and I took a lot of inspiration from there. In the end, it was so satisfying to see all the new Robopets owners keeping their Robotos company."}
        </p>
        <p>
          {isEs ? (
            <>
              En ese periodo fuimos una de las principales colecciones de NFTs a nivel mundial, uno de los
              logros más tops del cual me sentí muy orgulloso fue ver uno de nuestros Robotos en un{" "}
              <a href={people.comercial} target="_blank" rel="noreferrer" className={linkClass}>
                comercial
              </a>{" "}
              de X (antes Twitter) cuando se implementaban los PFP de las colecciones de NFTs,
              codeandonos con colecciones como Bored Apes, Cryptopunks, Cool Cats, entre otros.
            </>
          ) : (
            <>
              During that time, we were one of the top NFT collections worldwide. One of the achievements
              I&apos;m most proud of was seeing one of our Robotos in an X (formerly Twitter){" "}
              <a href={people.comercial} target="_blank" rel="noreferrer" className={linkClass}>
                ad
              </a>
              , back when PFP collections were getting featured — right next to collections like Bored
              Apes, Cryptopunks, Cool Cats, and others.
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <FullRow src={robotos("8_Robotos.gif")} />
        <div className="grid grid-cols-1 md:grid-cols-6">
          <p className="md:col-start-2 md:col-span-4 text-[0.85rem] text-black/70">
            {isEs ? "Sistema de diseño para Social Media." : "Design system for Social Media."}
          </p>
        </div>
      </div>

      <EdgeRow items={[robotos("15_Robotos.mp4"), robotos("14_Robotos.mp4")]} />

      <div className="flex flex-col gap-[0.1rem]">
        <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-4">
          {socialGrid.map((src) => (
            <ProjectMedia key={src} src={src} alt="Robotos" />
          ))}
        </div>
        <p className="text-[0.85rem] text-black/70">
          {isEs ? "ilustraciones animadas para contenido de Social Media." : "Animated illustrations for Social Media content."}
        </p>
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <EdgeRow items={[robotos("11_Robotos.mp4"), robotos("12_Robotos.mp4")]} />
        <p className="text-[0.85rem] text-black/70">
          {isEs ? "Sistema de diseño para trajes y fondos intercambiables" : "Design system for interchangeable outfits and backgrounds"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Gracias a este proyecto logré ampliar mi panorama a nivel profesional y personal, tuve oportunidades de salir de México y conocer países como Francia (donde por cierto, montamos una galería de arte express, una experiencia increíble). También desarrollé mi skill de crear sistemas de diseño ampliamente escalables más allá de una interfaz WEB, fue un buen reto para mi, salir más allá de las UI, botones, cards y esas cosas."
            : "Thanks to this project, I grew a lot both professionally and personally. I got to travel outside Mexico and visit places like France (where, by the way, we set up an express art gallery — such an incredible experience). I also leveled up my skill at building design systems that scale way beyond a web interface — a great challenge for me, going beyond UI, buttons, cards, and that kind of stuff."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Yo en Robotos" : "Me at Robotos"}</h2>
          <p>
            {isEs
              ? "Además de la colección de los Robopets mi participación en el proyecto fue encaminada a temas de branding, creando visuales y dando guías de uso. Jugué con mis skills de motions graphics e hice pequeños sistemas de diseño."
              : "Besides the Robopets collection, my role on the project also covered branding — creating visuals and setting usage guidelines. I got to play with my motion graphics skills and built a few small design systems too."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Mi participación durante ese par de años dejó una colección nueva de NFTs (Robopets), cerca de 9,000 items creados, una línea visual amplificada para medios on/off line y un amplio repertorio de animaciones e ilustraciones."
              : "My time there (about two years) left behind a brand-new NFT collection (Robopets), close to 9,000 items created, an expanded visual identity for on/offline media, and a solid library of animations and illustrations."}
          </p>
        </div>
        <div>
          <p className="font-bold text-black mb-2">{isEs ? "Colaboradores" : "Collaborators"}</p>
          <p>
            {isEs ? (
              <>
                Trabajé muy de cerca con{" "}
                <a href={people.pabloStanley} target="_blank" rel="noreferrer" className={linkClass}>
                  Pablo Stanley
                </a>
                , creador del proyecto. Así como con{" "}
                <a href={people.marianaPedroza} target="_blank" rel="noreferrer" className={linkClass}>
                  Mariana Pedroza
                </a>
                ,{" "}
                <a href={people.viri} target="_blank" rel="noreferrer" className={linkClass}>
                  Viri
                </a>
                ,{" "}
                <a href={people.rojo} target="_blank" rel="noreferrer" className={linkClass}>
                  Rojo
                </a>
                , Zack,{" "}
                <a href={people.gabs} target="_blank" rel="noreferrer" className={linkClass}>
                  Gabs
                </a>
                ,{" "}
                <a href={people.sjoerd} target="_blank" rel="noreferrer" className={linkClass}>
                  Sjoerd
                </a>
                ,{" "}
                <a href={people.niklas} target="_blank" rel="noreferrer" className={linkClass}>
                  Niklas
                </a>{" "}
                y otros.
              </>
            ) : (
              <>
                I worked closely with{" "}
                <a href={people.pabloStanley} target="_blank" rel="noreferrer" className={linkClass}>
                  Pablo Stanley
                </a>
                , the project&apos;s creator, as well as with{" "}
                <a href={people.marianaPedroza} target="_blank" rel="noreferrer" className={linkClass}>
                  Mariana Pedroza
                </a>
                ,{" "}
                <a href={people.viri} target="_blank" rel="noreferrer" className={linkClass}>
                  Viri
                </a>
                ,{" "}
                <a href={people.rojo} target="_blank" rel="noreferrer" className={linkClass}>
                  Rojo
                </a>
                , Zack,{" "}
                <a href={people.gabs} target="_blank" rel="noreferrer" className={linkClass}>
                  Gabs
                </a>
                ,{" "}
                <a href={people.sjoerd} target="_blank" rel="noreferrer" className={linkClass}>
                  Sjoerd
                </a>
                ,{" "}
                <a href={people.niklas} target="_blank" rel="noreferrer" className={linkClass}>
                  Niklas
                </a>
                , and others.
              </>
            )}
          </p>
          <p className="mt-4">
            X (
            <a href="https://x.com/robotosNFT" target="_blank" rel="noreferrer" className={linkClass}>
              https://x.com/robotosNFT
            </a>
            )
            <br />
            WEB (
            <a href="https://www.robotos.art/" target="_blank" rel="noreferrer" className={linkClass}>
              https://www.robotos.art/
            </a>
            )
            <br />
            {isEs ? "Open Sea Robotos (" : "OpenSea Robotos ("}
            <a
              href={isEs ? "https://opensea.io/es/collection/robotos-official" : "https://opensea.io/collection/robotos-official"}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {isEs ? "https://opensea.io/es/collection/robotos-official" : "https://opensea.io/collection/robotos-official"}
            </a>
            )
            <br />
            {isEs ? "Open Sea Robopets (" : "OpenSea Robopets ("}
            <a
              href={isEs ? "https://opensea.io/es/collection/robopets" : "https://opensea.io/collection/robopets"}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {isEs ? "https://opensea.io/es/collection/robopets" : "https://opensea.io/collection/robopets"}
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project13" />
    </ContentGrid>
  );
}
