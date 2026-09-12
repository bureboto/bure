import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const bns = (file: string) => `/design/base/${file}`;

function EdgeRow({ items }: { items: string[] }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        items.length === 2 ? "md:grid-cols-2" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
      }`}
    >
      {items.map((src) => (
        <ProjectMedia key={src} src={src} alt="The Base Night Show" />
      ))}
    </div>
  );
}

export default function Project12() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">The Base Night Show</h1>
          <span className="text-sm text-black/60">Septiembre, 2025 · Brand | Ilustración</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            Base es una red creada por Coinbase que permite hacer transacciones con
            criptomonedas de forma más rápida y económica. Su objetivo es acercar el mundo
            cripto a más personas, facilitando el uso de aplicaciones, pagos digitales y otros
            proyectos construidos sobre esta red, sin las barreras de costo y velocidad que
            suelen existir en blockchain.
          </p>
          <div>
            <p>
              Base estaba realizando activaciones en LATAM, asi que hizo esta colaboración con
              Espacio.
            </p>
            <p className="mt-4">
              The Base Night Show, es un espacio donde se platica con personas en torno a Base,
              desde constructores hasta usuarios.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectMedia src={bns("4_BNS.png")} alt="The Base Night Show" />
        <div className="h-full min-h-0">
          <ProjectMedia
            src={bns("5_BNS.mp4")}
            alt="The Base Night Show"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full min-h-0">
          <ProjectMedia
            src={bns("7_BNS.gif")}
            alt="The Base Night Show"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            Realicé todo el branding para el proyecto, entregue un brand kit con sus usos,
            aplicaciones y motions
          </p>
          <p className="mt-4">
            Con todo el equipo de Espacio y muy de la mano con Manuel Gamero miembro del equipo
            de marketing de Base
          </p>
        </div>
        <p>
          En mi participacion en el proyecto lleve a la par temas de branding, creando visuales
          y dando guías de uso. Jugué con mis skills de motions graphics, haciendo pequeños
          sistemas de diseño.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectMedia src={bns("6_BNS.mp4")} alt="The Base Night Show" />
        <div className="flex flex-col gap-4">
          <ProjectMedia src={bns("9_BNS.mp4")} alt="The Base Night Show" />
          <ProjectMedia src={bns("8_BNS.mp4")} alt="The Base Night Show" />
        </div>
      </div>

      <EdgeRow items={[bns("2_BNS.jpg"), bns("1_BNS.jpg"), bns("3_BNS.jpg")]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <div>
          <p>
            Diseñé el logotipo y de ahí partí a la adaptación de materiales on/off line y motion
            graphics, hicimos su brand kit y se escaló en los contenidos que fueron creando.
          </p>
          <p className="mt-4">Se entregó Brand kit, motions, mockups e impresos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          Adaptar contenidos de pantalla a IRL es muy gratificante, me gusta palpar el trabajo
          en físico. El brand kit que se trabajó ayudó bastante para poder trabajar muy fluido
          con los materiales que se crearon con el avance del proyecto. El último capítulo se
          hizo IRL en un cine de la Ciudad de México, un evento para 50 personas, imprimimos
          carteles tipo cine con la identidad del proyecto e hicimos un photo oportunitty.
        </p>
        <p>
          Episodio piloto (
          <a
            href="https://www.youtube.com/watch?v=FiNYh3UfPTc&t=26s"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            https://www.youtube.com/watch?v=FiNYh3UfPTc&t=26s
          </a>
          )
        </p>
      </div>

      <OtherProjects currentHref="/project12" />
    </ContentGrid>
  );
}
