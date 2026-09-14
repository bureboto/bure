"use client";

import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import { useLanguage } from "@/lib/LanguageContext";

const bns = (file: string) => `/design/base/${file}`;

function EdgeRow({ items }: { items: string[] }) {
  return (
    <div
      className={`grid items-center grid-cols-1 gap-4 ${
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
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          {isEs ? "← Volver" : "← Back"}
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">The Base Night Show</h1>
          <span className="text-sm text-black/60">{isEs ? "Septiembre, 2025 · Brand | Ilustración" : "September, 2025 · Brand | Illustration"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
          <p>
            {isEs
              ? "Base es una red creada por Coinbase que permite hacer transacciones con criptomonedas de forma más rápida y económica. Su objetivo es acercar el mundo cripto a más personas, facilitando el uso de aplicaciones, pagos digitales y otros proyectos construidos sobre esta red, sin las barreras de costo y velocidad que suelen existir en blockchain."
              : "Base is a network created by Coinbase that enables faster, cheaper cryptocurrency transactions. Its goal is to bring the crypto world closer to more people, making it easier to use apps, digital payments, and other projects built on this network, without the cost and speed barriers that usually exist in blockchain."}
          </p>
          <div>
            <p>
              {isEs
                ? "Base estaba realizando activaciones en LATAM, asi que hizo esta colaboración con Espacio."
                : "Base was running activations across LATAM, so it partnered with Espacio for this collaboration."}
            </p>
            <p className="mt-4">
              {isEs
                ? "The Base Night Show, es un espacio donde se platica con personas en torno a Base, desde constructores hasta usuarios."
                : "The Base Night Show is a space where people talk about Base, from builders to users."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">
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
            {isEs
              ? "Realicé todo el branding para el proyecto, entregue un brand kit con sus usos, aplicaciones y motions"
              : "I did all the branding for the project, delivering a brand kit with its usage guidelines, applications, and motion assets"}
          </p>
          <p className="mt-4">
            {isEs
              ? "Con todo el equipo de Espacio y muy de la mano con Manuel Gamero miembro del equipo de marketing de Base"
              : "Together with the whole Espacio team, and very closely with Manuel Gamero, a member of Base's marketing team"}
          </p>
        </div>
        <p>
          {isEs
            ? "En mi participacion en el proyecto lleve a la par temas de branding, creando visuales y dando guías de uso. Jugué con mis skills de motions graphics, haciendo pequeños sistemas de diseño."
            : "In my role on the project I handled branding topics in parallel, creating visuals and providing usage guidelines. I put my motion graphics skills to work, building small design systems."}
        </p>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
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
            {isEs
              ? "Diseñé el logotipo y de ahí partí a la adaptación de materiales on/off line y motion graphics, hicimos su brand kit y se escaló en los contenidos que fueron creando."
              : "I designed the logo and from there moved on to adapting on/off-line materials and motion graphics — we built its brand kit and scaled it into the content that kept getting created."}
          </p>
          <p className="mt-4">{isEs ? "Se entregó Brand kit, motions, mockups e impresos" : "We delivered a brand kit, motion assets, mockups, and printed pieces"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black/70">
        <p>
          {isEs
            ? "Adaptar contenidos de pantalla a IRL es muy gratificante, me gusta palpar el trabajo en físico. El brand kit que se trabajó ayudó bastante para poder trabajar muy fluido con los materiales que se crearon con el avance del proyecto. El último capítulo se hizo IRL en un cine de la Ciudad de México, un evento para 50 personas, imprimimos carteles tipo cine con la identidad del proyecto e hicimos un photo oportunitty."
            : "Adapting on-screen content to IRL is very rewarding, I like being able to feel the work physically. The brand kit we built made it much easier to work fluidly with the materials created as the project progressed. The final episode was done IRL at a movie theater in Mexico City, an event for 50 people — we printed cinema-style posters with the project's identity and set up a photo opportunity."}
        </p>
        <p>
          {isEs ? "Episodio piloto (" : "Pilot episode ("}
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
