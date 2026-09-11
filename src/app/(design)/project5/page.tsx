import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const prado = (file: string) => `/design/prado/${file}`;

type Block =
  | { type: "full"; src: string }
  | { type: "grid"; items: string[] };

const introBlocks: Block[] = [
  { type: "full", src: prado("11_Prado.jpg") },
  { type: "grid", items: [prado("2_Prado.jpg"), prado("3_Prado.jpg"), prado("6_Prado.jpg")] },
];

const gridBlock: Block = {
  type: "grid",
  items: [
    prado("5_Prado.jpg"),
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
      className={`grid grid-cols-1 gap-4 ${block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
    >
      {block.items.map((src) => (
        <ProjectMedia key={src} src={src} alt="El Prado" />
      ))}
    </div>
  );
}

export default function Project5() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">El Prado</h1>
          <span className="text-sm text-black/60">Marzo, 2025 · Brand</span>
        </div>
        <p className="max-w-2xl text-black/70">
          Plásticos El Prado, es una empresa dedicada a la venta de artículos de limpieza y
          empaque para hogar y oficina, hacen distribución en todo México. Su principal
          punto de venta es online.
        </p>
        <p className="text-black/70">
          Tuve el proyecto de llevar el re-branding de marca para llamarse El Prado.
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
            La marca llevaba varios ya varios años posicionada como una empresa lider en la
            venta y distribución de productos para la limpieza y empaque en todo México,
            pero su nombre tenia el tema, la palabra &quot;Plásticos&quot; y ellos
            comenzaban a tener más de plásticos, productos ecológicos, de papel y otros
            lejos del plástico, entonces decidieron hacer una actualización a su nombre,
            dejando de la lado el &quot;Plásticos&quot; y solo llamarse &quot;El
            Prado&quot; conservando su esencia y ampliando los horizontes.
          </p>
          <p className="mt-4">
            Partiendo de esta actualización de nombre, se buscaba tener un re branding, de
            inicio ya se sabía que se quería contar con un iso que se diferenciará y tener
            diferentes aplicaciones del logotipo, on/off line.
          </p>
        </div>
        <div>
          <p>
            Parte de este branding era el diseño de etiquetas para empaques de los
            productos, no se habían diseñado antes y se deben de crear considerando las
            especificaciones legales que cada producto requería.
          </p>
          <p className="mt-4">
            Parte del proyecto era presentar propuestas para aplicaciones físicas como
            uniformes, impresos y brandeo de vehículos.
          </p>
        </div>
      </div>

      <ProjectMedia src={prado("1_Cover_Prado.jpg")} alt="El Prado" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <h2 className="font-bold text-black mb-2">Proceso</h2>
          <p>
            El proyecto lo fui dividiendo por fases, Diseño de logotipo y su brand kit
            básico, luego aplicaciones derivadas del brand kit como papelería, social media
            y actualizaciones de catálogos y por último hice la creación de etiquetas y
            empaques para sus productos.
          </p>
          <p className="mt-4">
            Decidí desarrollarlo por fases, ya que era un proyecto grande y se necesitaba
            diseñar los cimientos para ir construyendo hacia arriba, con unas bases sólidas.
          </p>
        </div>
        <div>
          <p>
            Realmente no hubo cambios grandes, pero me gustaría mencionar como este tipo de
            brandings suele tener un gran impacto en el founder, para tener la apertura de
            recibir lo nuevo, y soltar el logo y nombre anterior.
          </p>
        </div>
      </div>

      <MediaBlock block={gridBlock} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            Se diseñó Brand Kit, papelería interna y a clientes, diseño de uniformes y
            vehículos, diseño de nuevos catálogos, diseño de empaques y etiquetas de
            productos, plantillas para social media.
          </p>
        </div>
        <div>
          <p>
            Me llevo de aprendizaje de conocer como el founder de una empresa logró
            identificar la necesidad de actualizar algo en su marca, algo tan esencial como
            su nombre, y a su vez actuar rápido y brincar a la evolución.
          </p>
          <p className="mt-4">
            Fueron muchas horas trabajando en este proyecto, me ayudó mucho a crear pequeños
            sistemas de diseño de escalar entre si, partiendo de un catálogo que luego
            podría ser replicable a una etiqueta, un empaque o simple post en redes
            sociales.
          </p>
          <p className="mt-4">
            En este proyecto trabajé muy de cerca con el founder de la empresa y muy guia en
            el uso de herramientas de diseño, principalmente Figma, ayudando a validar mis
            pequeños sistemas de diseño que iba construyendo internamente en nuestros
            archivos.
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
