"use client";

import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import { BodyText } from "@/components/caseStudy/Typography";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const project = projects.find((p) => p.href === "/project5")!;
const service = project.tags[0] ?? "—";
const industry = project.tags[1] ?? project.tags[0] ?? "—";
const year = project.date.match(/\d{4}/)?.[0] ?? project.date;

const prado = (file: string) => `/design/prado/${file}`;

export default function Project5() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="El Prado" project="Brand kit" />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroMeta
              items={[
                { label: isEs ? "Cliente" : "Client", value: project.client ?? project.name },
                { label: isEs ? "Servicio" : "Service", value: service },
                { label: isEs ? "Año" : "Year", value: year },
                { label: isEs ? "Industria" : "Industry", value: industry },
              ]}
            />
            <HeroLead>
              {isEs
                ? "El Prado, es una empresa dedicada a la venta de artículos de limpieza y empaque para hogar y oficina, hacen distribución en todo México. Su principal punto de venta es online."
                : "El Prado is a company dedicated to selling cleaning and packaging products for home and office, distributing throughout Mexico. Their main point of sale is online."}
            </HeroLead>
            <BodyText>
              {isEs
                ? "El lugar fue inaugurado el 22 de agosto de 2026."
                : "The venue opened on August 22, 2026."}
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <BodyText>
            {isEs ? (
              <>
                La marca llevaba ya varios años posicionada como una empresa líder en la venta y
                distribución de productos para la limpieza y empaque en todo México, pero su nombre
                tenía un tema, la palabra &quot;Plásticos&quot; y ellos comenzaban a tener más allá
                de plásticos, productos ecológicos, de papel y otros lejos del plástico, entonces
                decidieron hacer una actualización a su nombre, dejando de lado el
                &quot;Plásticos&quot; y solo llamarse &quot;El Prado&quot; conservando su esencia y
                ampliando los horizontes.
                <br />
                <br />
                Partiendo de esta actualización de nombre, se buscaba tener un re branding, de
                inicio ya se sabía que se quería contar con un iso que los diferenciara y tener
                diferentes aplicaciones del logotipo, on/off line.
                <br />
                <br />
                Parte de este branding era el diseño de etiquetas para empaques de los productos, no
                se habían diseñado antes y se deben de crear considerando las especificaciones
                legales que cada producto requería.
              </>
            ) : (
              <>
                The brand had been positioned for several years as a leading company in the sale and
                distribution of cleaning and packaging products throughout Mexico, but its name had
                an issue — the word &quot;Plásticos&quot; (Plastics) — since they had started
                carrying products that went beyond plastic, like eco-friendly and paper products. So
                they decided to update their name, dropping &quot;Plásticos&quot; and simply calling
                themselves &quot;El Prado,&quot; keeping their essence while broadening their
                horizons.
                <br />
                <br />
                Starting from this name update, the goal was a full rebrand — from the start, they
                knew they wanted an icon mark that would set them apart, with different applications
                of the logo, both on and offline.
                <br />
                <br />
                Part of this branding was the design of labels for product packaging — these hadn't
                been designed before and had to be created taking into account the legal
                specifications each product required.
              </>
            )}
          </BodyText>
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={prado("12_Prado.png")} alt="El Prado" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <ProjectMedia src={prado("2_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("3_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("6_Prado.jpg")} alt="El Prado" />
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-6 pb-10">
        <div className="md:col-start-2 md:col-span-4">
          <ProjectMedia src={prado("1_Cover_Prado.jpg")} alt="El Prado" />
        </div>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-6">
        <ProjectMedia src={prado("11_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("8_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("4_Prado.jpg")} alt="El Prado" />
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        <ProjectMedia src={prado("10_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("7_Prado.jpg")} alt="El Prado" />
        <ProjectMedia src={prado("9_Prado.jpg")} alt="El Prado" />
      </div>

      <Content1 title={isEs ? "Resultado" : "Result"}>
        <BodyText>
          {isEs
            ? "Se diseñó Brand Kit, papelería interna y a clientes, diseño de uniformes y vehículos, diseño de nuevos catálogos, diseño de empaques y etiquetas de productos, plantillas para social media."
            : "We designed a Brand Kit, internal and client-facing stationery, uniform and vehicle designs, new catalog designs, product packaging and label designs, and social media templates."}
        </BodyText>
        <div className="flex flex-col gap-4">
          <BodyText>
            {isEs
              ? "Me llevo de aprendizaje de conocer como el founder de una empresa logró identificar la necesidad de actualizar algo en su marca, algo tan esencial como su nombre, y a su vez actuar rápido y brincar a la evolución."
              : "One of my takeaways was seeing how the founder of a company managed to identify the need to update something as essential as their name, and act quickly to embrace that evolution."}
          </BodyText>
          <BodyText>
            {isEs
              ? "Fueron muchas horas trabajando en este proyecto, me ayudó mucho a crear pequeños sistemas de diseño fáciles de escalar entre sí, partiendo de un catálogo que luego podría ser replicable a una etiqueta, un empaque o simple post en redes sociales."
              : "Many hours went into this project, which helped me a lot in creating small design systems that were easy to scale across each other, starting from a catalog that could later be replicated into a label, a package, or a simple social media post."}
          </BodyText>
          <BodyText>
            {isEs ? (
              <>
                En este proyecto trabajé muy de cerca con el founder de la empresa y di mucha guía
                en el uso de herramientas de diseño, principalmente Figma, ayudando a validar mis
                pequeños sistemas de diseño que iba construyendo internamente en nuestros archivos.
                <br />
                <br />
                WEB (
                <a
                  href="https://www.mercadolibre.com.mx/tienda/plasticos-el-prado"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.mercadolibre.com.mx/tienda/plasticos-el-prado
                </a>
                )
              </>
            ) : (
              <>
                On this project I worked very closely with the company&apos;s founder and provided a
                lot of guidance on the use of design tools, mainly Figma, helping validate the small
                design systems I was building internally in our files.
                <br />
                <br />
                WEB (
                <a
                  href="https://www.mercadolibre.com.mx/tienda/plasticos-el-prado"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://www.mercadolibre.com.mx/tienda/plasticos-el-prado
                </a>
                )
              </>
            )}
          </BodyText>
        </div>
      </Content1>

      <OtherProjects currentHref="/project5" />
    </ContentGrid>
  );
}
