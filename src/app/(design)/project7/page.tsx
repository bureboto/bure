import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const sg = (file: string) => `/design/singapore/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] }
  | { type: "split"; left: string; right: string };

const processBlocks: Block[] = [
  { type: "split", left: sg("2_Singapore.jpg"), right: sg("3_Singapore.jpg") },
  { type: "grid", items: [sg("9_Singapore.jpg"), sg("10_Singapore.jpg"), sg("8_Singapore.jpg")] },
  { type: "grid", items: [sg("4_Singapore.jpg"), sg("5_Singapore.gif")] },
];

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="Nouns | Devconnect Singapore" />;

  if (block.type === "split") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ProjectMedia src={block.left} alt="Nouns | Devconnect Singapore" />
        </div>
        <div className="md:col-span-1">
          <ProjectMedia src={block.right} alt="Nouns | Devconnect Singapore" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="Nouns | Devconnect Singapore" />
      ))}
    </div>
  );
}

export default function Project7() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Nouns | Devconnect Singapore</h1>
          <span className="text-sm text-black/60">Septiembre, 2024 · Brand</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Nouns es una DAO (organización de propiedad colectiva que trabaja hacia una
            misión compartida.) derivada de una colección de NFTs, las personas pueden hacer
            propuestas para realizar actividades en torno a la DAO y la comunidad las acepta
            o rechaza.
          </p>
          <p>
            En esta ocasión me invitaron a colaborar en una prop de hacer una activación en
            ETHGLOBAL Singapore, Dándole vida a toda la identidad del stand.
          </p>
        </div>
      </div>

      <ProjectMedia src={sg("1_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Colaboradores</h2>
          <p>Mono y Lex, miembros de la comunidad de Nouns Amigos.</p>
          <p className="mt-4">El reto era brandear el stand dentro de la ETHGlobal.</p>
          <p className="mt-4">
            Nouns buscaba hacer arte referente a la ciudad de Singapor, sus edificios, su
            mascotas y su naturaleza.
          </p>
        </div>
        <div>
          <p>
            El principal reto era crear el arte y mandarlo a imprimir a distancia, los
            impresores estaban en Singapur y yo en México.
          </p>
          <p className="mt-4">
            Debía confiar en que las especificaciones y medidas brindadas eran las correctas
            y que el arte se viera justo como lo teníamos diseñado, todo salio muy bien.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {processBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            Tuve sesiones de trabajo con Mono y Lex para entender que se buscaba proyectar,
            aprovechando el espacio con el que se contaba.
          </p>
          <p className="mt-4">
            Hice una compilacion de los personajes que debiamos plasmar, armé muchos
            bocetos para posicionarlos y despues vectorizados, este proceso fue de lo mas
            elaborado, ya que igual requeria tener un preview en los mockups que nos
            compartio el equipo de la DevConn.
          </p>
        </div>
        <div>
          <p>
            Hicimos un research de los principales lugares del país, su mascota y la flora
            que tiene la ciudad, asi como sus tradiciones, después esos lo traduje a
            ilustraciones con la temática de Nouns.
          </p>
          <p className="mt-4">
            Hicimos un stand donde las personas podían entrar al ecosistema y tomarse una
            fotografía, sentarse en una banca y estar rodeado de los elementos que
            diseñamos.
          </p>
          <p className="mt-4">
            Al terminar, compartí todos los files en formato de pre-prensa, listos para
            imprimir, fue una grata sorpresa ver el trabajo impreso y justo con los colores
            tan intensos como los habíamos planteado.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={sg("6_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />
        <ProjectMedia src={sg("7_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Resultado</h2>
          <p>
            Se diseñaron más de 8 artes para impresión en gran formato, animaciones de
            estas ilustraciones y adaptaciones para su difusión en redes sociales.
            Realmente fue un trabajo epico por la cantidad de vectores y bocetos que se
            hicieron.
          </p>
          <p className="mt-4">
            ETHGlobalt tuvo cerca de 1,300 asistentes, estimando que más de la mitad
            acudieron al stand de Nouns, seguro pasaron un buen rato con la comunidad y las
            activaciones que se hicieron. Fue muy grato escuchar que gracias al branding
            ubicaron inmediatamente dónde estaba ubicado el stand.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">Aprendizaje</h2>
          <p>
            Trabajar con equipos a nivel internacional siempre es muy retador, en ocasiones
            hasta pequeñas palabras pueden significar una cosa diferente entre las personas,
            no es la primera vez que lo hago pero si la primera vez que comparto files de
            pre-prensa, confiando totalmente en que el equipo del otro lado lo hará
            excelente, justo pasó así.
          </p>
          <p className="mt-4">
            Galeria fotográfica (
            <a
              href="https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.flickr.com/photos/196499305@N03/albums/72177720320485071/
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project7" />
    </ContentGrid>
  );
}
