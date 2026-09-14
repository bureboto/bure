"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

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
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">
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
      className={`grid items-center grid-cols-1 gap-4 ${
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
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">Nouns | Devconnect Singapore</h1>
          <span className="text-sm text-black/60">{isEs ? "Septiembre, 2024 · Brand" : "September, 2024 · Brand"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs
              ? "Nouns es una DAO (organización de propiedad colectiva que trabaja hacia una misión compartida.) derivada de una colección de NFTs, las personas pueden hacer propuestas para realizar actividades en torno a la DAO y la comunidad las acepta o rechaza."
              : "Nouns is a DAO (a collectively owned organization working toward a shared mission) derived from an NFT collection — people can submit proposals for activities around the DAO, and the community accepts or rejects them."}
          </p>
          <p>
            {isEs
              ? "En esta ocasión me invitaron a colaborar en una prop de hacer una activación en ETHGLOBAL Singapore, Dándole vida a toda la identidad del stand."
              : "This time I was invited to collaborate on a proposal to run an activation at ETHGlobal Singapore, bringing the entire booth identity to life."}
          </p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={sg("1_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Colaboradores" : "Collaborators"}</h2>
          <p>{isEs ? "Mono y Lex, miembros de la comunidad de Nouns Amigos." : "Mono and Lex, members of the Nouns Amigos community."}</p>
          <p className="mt-4">{isEs ? "El reto era brandear el stand dentro de la ETHGlobal." : "The challenge was to brand the booth inside ETHGlobal."}</p>
          <p className="mt-4">
            {isEs
              ? "Nouns buscaba hacer arte referente a la ciudad de Singapor, sus edificios, su mascotas y su naturaleza."
              : "Nouns wanted to make art referencing the city of Singapore — its buildings, its mascots, and its nature."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "El principal reto era crear el arte y mandarlo a imprimir a distancia, los impresores estaban en Singapur y yo en México."
              : "The main challenge was creating the art and sending it to be printed remotely — the printers were in Singapore and I was in Mexico."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Debía confiar en que las especificaciones y medidas brindadas eran las correctas y que el arte se viera justo como lo teníamos diseñado, todo salio muy bien."
              : "I had to trust that the specifications and measurements provided were correct and that the art would look exactly as we had designed it — everything turned out great."}
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
          <h2 className="font-bold text-black mb-2">{isEs ? "Proceso" : "Process"}</h2>
          <p>
            {isEs
              ? "Tuve sesiones de trabajo con Mono y Lex para entender que se buscaba proyectar, aprovechando el espacio con el que se contaba."
              : "I had working sessions with Mono and Lex to understand what we wanted to project, making the most of the space we had."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Hice una compilacion de los personajes que debiamos plasmar, armé muchos bocetos para posicionarlos y despues vectorizados, este proceso fue de lo mas elaborado, ya que igual requeria tener un preview en los mockups que nos compartio el equipo de la DevConn."
              : "I compiled the characters we needed to feature, put together many sketches to position them and later vectorized them — this process was quite elaborate, since it also required previewing them in the mockups the DevConnect team shared with us."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Hicimos un research de los principales lugares del país, su mascota y la flora que tiene la ciudad, asi como sus tradiciones, después esos lo traduje a ilustraciones con la temática de Nouns."
              : "We did research on the country's main landmarks, its mascot, and the city's flora, as well as its traditions, then I translated all of that into illustrations with a Nouns theme."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Hicimos un stand donde las personas podían entrar al ecosistema y tomarse una fotografía, sentarse en una banca y estar rodeado de los elementos que diseñamos."
              : "We built a booth where people could step into the ecosystem, take a photo, sit on a bench, and be surrounded by the elements we designed."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Al terminar, compartí todos los files en formato de pre-prensa, listos para imprimir, fue una grata sorpresa ver el trabajo impreso y justo con los colores tan intensos como los habíamos planteado."
              : "When we finished, I shared all the files print-ready in pre-press format — it was a great surprise to see the work printed, with colors just as intense as we had planned."}
          </p>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={sg("6_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />
        <ProjectMedia src={sg("7_Singapore.jpg")} alt="Nouns | Devconnect Singapore" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Resultado" : "Result"}</h2>
          <p>
            {isEs
              ? "Se diseñaron más de 8 artes para impresión en gran formato, animaciones de estas ilustraciones y adaptaciones para su difusión en redes sociales. Realmente fue un trabajo epico por la cantidad de vectores y bocetos que se hicieron."
              : "We designed more than 8 pieces of art for large-format printing, animations of those illustrations, and adaptations for social media distribution. It was truly an epic job given the number of vectors and sketches involved."}
          </p>
          <p className="mt-4">
            {isEs
              ? "ETHGlobalt tuvo cerca de 1,300 asistentes, estimando que más de la mitad acudieron al stand de Nouns, seguro pasaron un buen rato con la comunidad y las activaciones que se hicieron. Fue muy grato escuchar que gracias al branding ubicaron inmediatamente dónde estaba ubicado el stand."
              : "ETHGlobal had around 1,300 attendees, with more than half estimated to have visited the Nouns booth — they surely had a great time with the community and the activations we put together. It was very gratifying to hear that, thanks to the branding, people spotted the booth's location immediately."}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Aprendizaje" : "Learnings"}</h2>
          <p>
            {isEs
              ? "Trabajar con equipos a nivel internacional siempre es muy retador, en ocasiones hasta pequeñas palabras pueden significar una cosa diferente entre las personas, no es la primera vez que lo hago pero si la primera vez que comparto files de pre-prensa, confiando totalmente en que el equipo del otro lado lo hará excelente, justo pasó así."
              : "Working with teams internationally is always very challenging — sometimes even small words can mean different things to different people. It wasn't the first time I'd done this, but it was the first time I shared pre-press files, trusting completely that the team on the other side would nail it, and that's exactly what happened."}
          </p>
          <p className="mt-4">
            {isEs ? "Galeria fotográfica (" : "Photo gallery ("}
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
