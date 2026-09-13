import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const robotos = (file: string) => `/design/robotos/${file}`;

function FullRow({ src }: { src: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-4">
        <ProjectMedia src={src} alt="Robotos" />
      </div>
    </div>
  );
}

function EdgeRow({ items }: { items: string[] }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
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

const socialGrid = Array.from({ length: 12 }, (_, i) => robotos(`${17 + i}_Robotos.mp4`));

export default function Project13() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Robotos</h1>
          <span className="text-sm text-black/60">2021–2024 · Brand | Ilustración</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte
            digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de
            10,000 personajes unicos que fueron generados mediante un algoritmo.
          </p>
          <p>
            El arte fue realizado por Pablo Stanley, cabezas, cuerpos, ojos, bocas… el algoritmo
            se encargo de colocarlos de forma aleatoria para lograr que cada personaje fuera
            único.
          </p>
        </div>
      </div>

      <FullRow src={robotos("7_Robotos.gif")} />

      <ProjectMedia src={robotos("1_Robotos.webp")} alt="Robotos" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={robotos("2_Robotos.mp4")} alt="Robotos" />
        <ProjectMedia src={robotos("3_Robotos.mp4")} alt="Robotos" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Mi aporte</h2>
          <p>
            Me subí al proyecto justo una semanas despues de haber iniciado, mi roll principal
            fue crear sistemas de diseño con ilustraciones, que incluso nos llevaron a crear una
            colección nueva &quot;Robopets&quot; que son las pequeñas mascotas de los Robotos.
          </p>
          <p className="mt-4">
            En los Robopets mi roll fue llevar el control de los nuevos assets que se sumarían a
            la colección e hicieran match con su Roboto. Fue muy divertido tener las sesiones de
            brainstorm, bocetaje y vectorización final de todos los nuevos elementos, muy
            satisfactorio ver a todos los nuevos dueños de Robopets haciendo compañia a sus
            Robotos
          </p>
        </div>
        <p>
          En mi participacion en el proyecto lleve a la par temas de branding, creando visuales
          y dando guías de uso. Jugué con mis skills de motions graphics, haciendo pequeños
          sistemas de diseño.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <EdgeRow items={[robotos("4_Robotos.mp4"), robotos("5_Robotos.mp4")]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70 text-sm">
          <p>Contenido para el anuncio de Robopets</p>
          <p>La colección en un billboard en NY.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <EdgeRow
          items={[
            robotos("11_Robotos.mp4"),
            robotos("12_Robotos.mp4"),
            robotos("13_Robotos.mp4"),
            robotos("14_Robotos.mp4"),
          ]}
        />
        <p className="text-sm text-black/70">
          Los personajes salieron de la pantalla y junto con el equipo, los plasmamos en pared.
        </p>
      </div>

      <EdgeRow items={[robotos("9_Robotos.jpg"), robotos("10_Robotos.jpg"), robotos("6_Robotos.jpg")]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Colaboradores</h2>
          <p>
            Trabajé muy de cerca con Pablo Stanley, creador del proyecto. Así como con Mariana
            Pedroza, Viri, Rojo, Zack, Gabs, Sjoerd, Niklas y otros.
          </p>
          <h2 className="font-bold text-black mt-4 mb-2">Objetivo</h2>
          <p>
            Crear un sistema de diseño de ilustraciones faciles de escalar para crear mas
            personajes, más mundos y más contenido en general.
          </p>
          <p className="mt-4">
            Ampliar la difusión de la marca, off/on line, justo para eso fui un brand guardian
            Roboto.
          </p>
        </div>
        <p>
          Estábamos en el boom de los NFTS por lo que se siente un sentido de urgencia en todos
          los aspectos, se sentia que lo que haciamos ese día, al siguiente ya era algo viejo y a
          la vez retador el conocer nuevas tecnologías y buscar implementarlas a nuestro
          producto, aqui fue donde comencé a ver el potencial de la AI.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FullRow src={robotos("8_Robotos.gif")} />
        <p className="text-sm text-black/70">Sistema de diseño para Social Media.</p>
      </div>

      <EdgeRow items={[robotos("15_Robotos.mp4"), robotos("16_Robotos.mp4")]} />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialGrid.map((src) => (
            <ProjectMedia key={src} src={src} alt="Robotos" />
          ))}
        </div>
        <p className="text-sm text-black/70">ilustraciones animadas para contenido de Social Media.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            Juntabamos los conceptos que debía tener el mundo de los Robotos, a partir de ahi,
            todo nuestro contenido visual tendría que tener por lo menos un pilar de estos
            concepto, por ejemplo, la amistad, un Roboto podría aparecer jugando con otro
            Roboto.
          </p>
        </div>
        <p>
          A la hora de bocetar, siempre era bueno tener una sesión con Pablo para dar double
          check sobre si ese es el mensaje a futuro que queriamos dar, afortunadamente casi
          siempre era &quot;tsssss, justo era eso, dude haha&quot;
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <EdgeRow items={[robotos("29_Robotos.mp4"), robotos("30_Robotos.mp4")]} />
        <p className="text-sm text-black/70">
          Sistema de diseño para trajes y fondos intercambiables
        </p>
      </div>

      <FullRow src={robotos("31_Robotos.mp4")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Resultado</h2>
          <p>
            Mi participación durante ese par de años se dejo una colección nueva de ntfs, cerca
            de 9,000 items nuevos, tambien una linea visual amplificada para medios on/off line,
            un amplio repertorio de animaciones e ilustraciones.
          </p>
          <p className="mt-4">
            En ese periodo fuimos una de las principales colecciones de NFTs a nivel mundial,
            uno de los logros mas tops que me sentí muy orgulloso de formar parte fue ver uno de
            nuestros Robotos en un comercial de X donde se implementaban los PFP de las
            colecciones de NFTs, codeandonos con dcolecciones como Bored Apes, Cyberpunks, Cool
            Cats, entre otros.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Aprendizaje</h2>
          <p>
            Gracias a este proyecto logré ampliar mi panorama a nivel profesional y personal,
            tuve oportunidades de salir de México y conocer otros paises como Francia (donde por
            cierto, montamos una galeria de arte express, una experiencia increible). Tambien
            desarrolle mi skill de crear sistemas de diseño ampliamente escalables, fue un buen
            reto para mi, salir más allá de las UI, botones, cards y esas cosas.
          </p>
          <p className="mt-4">
            X (
            <a href="https://x.com/robotosNFT" target="_blank" rel="noreferrer" className="underline underline-offset-4">
              https://x.com/robotosNFT
            </a>
            )
            <br />
            WEB (
            <a href="https://www.robotos.art/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
              https://www.robotos.art/
            </a>
            )
            <br />
            Open Sea Robotos (
            <a
              href="https://opensea.io/es/collection/robotos-official"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://opensea.io/es/collection/robotos-official
            </a>
            )
            <br />
            Open Sea Robopets (
            <a
              href="https://opensea.io/es/collection/robopets"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://opensea.io/es/collection/robopets
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project13" />
    </ContentGrid>
  );
}
