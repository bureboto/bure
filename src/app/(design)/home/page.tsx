import Link from "next/link";

const timeline = [
  {
    company: "Espacio",
    years: "2024-2026",
    description:
      "Convergieron todas las skills acumuladas hasta este punto: Branding, UX, UI, motion, coding, sistemas de diseño — todo aplicado en productos.",
  },
  {
    company: "Bueno",
    years: "2021-2024",
    description:
      "Mi entrada al mundo cripto, creando pequeños sistemas de ilustraciones, branding, UX y UI.",
  },
  {
    company: "BBVA",
    years: "2019-2021",
    description:
      "Trabajé directamente en el sistema de diseño del banco, colaborando con otros países como España, Colombia, Argentina y Estados Unidos. También ayudé en la refactorización de los ATM, fue uno de los proyectos más representativos donde participé en el banco.",
  },
  {
    company: "INE (Instituto Nacional Electoral)",
    years: "2015-2018",
    description:
      "Lideré un equipo de diseño interno, para las elecciones nacionales de México en el 2018.",
  },
  {
    company: "Despacho de diseño",
    years: "2013-2015",
    description:
      "Mi primer acercamiento al diseño profesional. Empecé haciendo branding y diseño web, justo donde empezó a tomar fuerza como disciplina.",
  },
];

const projects = [
  {
    href: "/project1",
    name: "Musho.ai",
    date: "2024",
    cover: "/design/musho/12_Cover_Musho.gif",
    description:
      "Musho is an AI-powered design assistant, turning your prompts into websites, social media posts, slides, and more — effortlessly.",
  },
  {
    href: "/project2",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project3",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project4",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project5",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project6",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
];

export default function DesignHome() {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 flex flex-col gap-16">
      {/* Bio / hero */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl">Erick Alvarez (Bure)</h1>
          </div>
          <div>
            <p>Ciudad de México</p>
            <p>34 años</p>
          </div>
          <p className="text-black/70">
            Diseñador de marca y producto, con más de 10 años construyendo sistemas de
            identidad que escalan — desde el logo hasta la última pantalla.
          </p>
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex flex-col gap-1">
              <span>t. 56 5232 0560</span>
              <a href="mailto:bureboto@gmail.com" className="underline underline-offset-4">
                bureboto@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1 text-black/70">
              <span>Español (Nativo)</span>
              <span>Ingles (Avanzado)</span>
            </div>
          </div>
          <div className="text-sm text-black/70">
            <a
              href="https://www.linkedin.com/in/bureboto/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              linkedin.com/in/bureboto
            </a>
            <p>Formación – Universidad Insurgentes (2010-2013)</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-black/70">
          <p>
            Mi trabajo vive en el cruce entre marca y producto: desarrollo sistemas visuales
            sólidos y los llevo hasta UX, UI, motion y código, trabajando en sincronía con
            cada punto de contacto del producto.
          </p>
          <p>
            Empecé en 2013 en un despacho de diseño, después pasé al sector gobierno en
            México, luego a BBVA, y de ahí salté al mundo blockchain surfeando las olas de
            las fintech.
          </p>
          <p>
            Ese recorrido me enseñó a moverme entre reglas rígidas (banca, gobierno) y
            terrenos sin mapa (blockchain) — y a construir sistemas de marca que funcionan
            en ambos extremos.
          </p>
          <p>
            No me limito a una sola etiqueta: branding, UX, UI, motion y código son
            ingredientes del mismo proceso para mí, no recetas separadas.
          </p>
          <a href="mailto:bureboto@gmail.com" className="underline underline-offset-4 text-black">
            Cocinemos algo juntos.
          </a>
        </div>

        <div className="flex md:justify-end items-start">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black" />
        </div>
      </section>

      {/* Timeline */}
      <section className="overflow-x-auto">
        <div className="flex min-w-max border-t border-black/20 pt-6 gap-16">
          {timeline.map((item) => (
            <div key={item.company} className="w-72 flex flex-col gap-3 relative">
              <span className="absolute -top-[31px] left-0 w-2 h-2 rounded-full bg-black" />
              <h3 className="text-lg">
                {item.company} <span className="text-sm text-black/60">({item.years})</span>
              </h3>
              <p className="text-sm text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="flex flex-col gap-3 group">
              {project.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.cover}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover transition-opacity group-hover:opacity-80"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-black transition-opacity group-hover:opacity-80" />
              )}
              <div>
                <p className="font-bold">
                  {project.name}. {project.date}.
                </p>
                <p className="text-sm text-black/70">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
