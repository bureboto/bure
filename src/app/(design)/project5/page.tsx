"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const prado = (file: string) => `/design/prado/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] };

const introBlocks: Block[] = [
  { type: "full", src: prado("12_Prado.png") },
  { type: "grid", items: [prado("2_Prado.jpg"), prado("3_Prado.jpg"), prado("6_Prado.jpg")] },
];

const gridBlock: Block = {
  type: "grid",
  items: [
    prado("11_Prado.jpg"),
    prado("8_Prado.jpg"),
    prado("4_Prado.jpg"),
    prado("10_Prado.jpg"),
    prado("7_Prado.jpg"),
    prado("9_Prado.jpg"),
  ],
};

function MediaBlock({ block }: { block: Block }) {
  if (block.type === "full") return <ProjectMedia src={block.src} alt="El Prado" />;

  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="El Prado" />
      ))}
    </div>
  );
}

export default function Project5() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">El Prado</h1>
          <span className="text-sm text-black/60">{isEs ? "Marzo, 2025 · Brand" : "March, 2025 · Brand"}</span>
        </div>
        <p className="max-w-2xl text-black/70">
          {isEs
            ? "Plásticos El Prado, es una empresa dedicada a la venta de artículos de limpieza y empaque para hogar y oficina, hacen distribución en todo México. Su principal punto de venta es online."
            : "Plásticos El Prado is a company dedicated to selling cleaning and packaging products for home and office, distributing across all of Mexico. Its main sales channel is online."}
        </p>
        <p className="text-black/70">
          {isEs
            ? "Tuve el proyecto de llevar el re-branding de marca para llamarse El Prado."
            : "I took on the project of leading the brand's rebranding to be called El Prado."}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {introBlocks.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            {isEs ? (
              <>
                La marca llevaba varios ya varios años posicionada como una empresa lider en la
                venta y distribución de productos para la limpieza y empaque en todo México, pero
                su nombre tenia el tema, la palabra &quot;Plásticos&quot; y ellos comenzaban a
                tener más de plásticos, productos ecológicos, de papel y otros lejos del plástico,
                entonces decidieron hacer una actualización a su nombre, dejando de la lado el
                &quot;Plásticos&quot; y solo llamarse &quot;El Prado&quot; conservando su esencia y
                ampliando los horizontes.
              </>
            ) : (
              <>
                The brand had already spent several years positioned as a leading company in the
                sale and distribution of cleaning and packaging products across Mexico, but its
                name carried the word &quot;Plásticos&quot; while they were moving beyond
                plastics into eco-friendly, paper, and other non-plastic products. So they decided
                to update their name, dropping &quot;Plásticos&quot; and simply calling themselves
                &quot;El Prado,&quot; keeping their essence while broadening their horizons.
              </>
            )}
          </p>
          <p className="mt-4">
            {isEs
              ? "Partiendo de esta actualización de nombre, se buscaba tener un re branding, de inicio ya se sabía que se quería contar con un iso que se diferenciará y tener diferentes aplicaciones del logotipo, on/off line."
              : "Building on this name update, they wanted a rebranding — from the start it was clear they wanted a distinctive isotype and different applications of the logo, on and off line."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Parte de este branding era el diseño de etiquetas para empaques de los productos, no se habían diseñado antes y se deben de crear considerando las especificaciones legales que cada producto requería."
              : "Part of this branding involved designing labels for product packaging, which had never been designed before and had to be created considering the legal specifications each product required."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Parte del proyecto era presentar propuestas para aplicaciones físicas como uniformes, impresos y brandeo de vehículos."
              : "Part of the project was presenting proposals for physical applications like uniforms, printed materials, and vehicle branding."}
          </p>
        </div>
      </div>

      <ProjectMedia src={prado("1_Cover_Prado.jpg")} alt="El Prado" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">{isEs ? "Proceso" : "Process"}</h2>
          <p>
            {isEs
              ? "El proyecto lo fui dividiendo por fases, Diseño de logotipo y su brand kit básico, luego aplicaciones derivadas del brand kit como papelería, social media y actualizaciones de catálogos y por último hice la creación de etiquetas y empaques para sus productos."
              : "I divided the project into phases: logo design and its basic brand kit, then applications derived from the brand kit like stationery, social media, and catalog updates, and finally the creation of labels and packaging for their products."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Decidí desarrollarlo por fases, ya que era un proyecto grande y se necesitaba diseñar los cimientos para ir construyendo hacia arriba, con unas bases sólidas."
              : "I decided to develop it in phases, since it was a large project and needed a foundation designed first, so we could build upward on solid ground."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Realmente no hubo cambios grandes, pero me gustaría mencionar como este tipo de brandings suele tener un gran impacto en el founder, para tener la apertura de recibir lo nuevo, y soltar el logo y nombre anterior."
              : "There weren't really any big changes, but I'd like to mention how this kind of branding tends to have a big impact on the founder — being open to receiving the new and letting go of the previous logo and name."}
          </p>
        </div>
      </div>

      <MediaBlock block={gridBlock} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            {isEs
              ? "Se diseñó Brand Kit, papelería interna y a clientes, diseño de uniformes y vehículos, diseño de nuevos catálogos, diseño de empaques y etiquetas de productos, plantillas para social media."
              : "We designed a Brand Kit, internal and client-facing stationery, uniform and vehicle design, new catalog design, packaging and product label design, and social media templates."}
          </p>
        </div>
        <div>
          <p>
            {isEs
              ? "Me llevo de aprendizaje de conocer como el founder de una empresa logró identificar la necesidad de actualizar algo en su marca, algo tan esencial como su nombre, y a su vez actuar rápido y brincar a la evolución."
              : "I took away a learning from seeing how a company's founder managed to identify the need to update something in their brand — something as essential as its name — and at the same time act fast and jump into the evolution."}
          </p>
          <p className="mt-4">
            {isEs
              ? "Fueron muchas horas trabajando en este proyecto, me ayudó mucho a crear pequeños sistemas de diseño de escalar entre si, partiendo de un catálogo que luego podría ser replicable a una etiqueta, un empaque o simple post en redes sociales."
              : "It took many hours working on this project, and it really helped me create small design systems that scale into each other, starting from a catalog that could then be replicated into a label, a package, or a simple social media post."}
          </p>
          <p className="mt-4">
            {isEs
              ? "En este proyecto trabajé muy de cerca con el founder de la empresa y muy guia en el uso de herramientas de diseño, principalmente Figma, ayudando a validar mis pequeños sistemas de diseño que iba construyendo internamente en nuestros archivos."
              : "On this project I worked very closely with the company's founder, guiding them through the use of design tools, mainly Figma, helping validate the small design systems I was building internally in our files."}
          </p>
          <p className="mt-4">
            WEB (
            <a
              href="https://www.mercadolibre.com.mx/tienda/plasticos-el-prado"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              https://www.mercadolibre.com.mx/tienda/plasticos-el-prado
            </a>
            )
          </p>
        </div>
      </div>

      <OtherProjects currentHref="/project5" />
    </ContentGrid>
  );
}
