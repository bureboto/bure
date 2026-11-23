import type { ReactNode } from "react";
import ContentGrid from "@/components/ContentGrid";
import BrandTabs from "@/components/BrandTabs";
import Content2, { Content2Item } from "@/components/caseStudy/Content2";
import { HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { Subtitle24, Subtitle18, FocusText, BodyText } from "@/components/caseStudy/Typography";

/** Image files are named after the Figma frame they fill (Logo_1 → Logo_1.jpg, etc.). */
const img = (name: string) => `/design/elpulsodelasdivisas/Images/${name}.jpg`;
const bold = (text: string) => <strong className="font-bold text-[#1d1d1d]">{text}</strong>;

/** Jumbo titles are 80px per Figma; step down on phones so "Tipografía" fits a 390px screen. */
function Title({ children }: { children: ReactNode }) {
  return <span className="text-[64px] md:text-[80px]">{children}</span>;
}

/** Left column of a Content2Item: optional Subtitle24, Focus (28px), then body content. */
function ItemText({ title, focus, children }: { title?: ReactNode; focus: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {title && <Subtitle24>{title}</Subtitle24>}
      <FocusText>{focus}</FocusText>
      {children}
    </div>
  );
}

/** Several 16:9 images stacked vertically (Tipografía, Layout). */
function ImageStack({ names, alts }: { names: string[]; alts: string[] }) {
  return (
    <div className="flex w-full flex-col gap-10">
      {names.map((name, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={name} src={img(name)} alt={alts[i]} className="w-full h-auto object-contain" />
      ))}
    </div>
  );
}

/** Numbered rule with a short explanation, used in "Usos correctos". */
function Rule({ n, title, children }: { n: number; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <BodyText>
        {n}. {bold(title)}
      </BodyText>
      {children && <BodyText>{children}</BodyText>}
    </div>
  );
}

const mainColors = [
  { name: "Magma", hex: "#FF6E4A", rgb: "R255 G110 B74", cmyk: "C0 M57 Y71 K0" },
  { name: "Navy", hex: "#0F2844", rgb: "R15 G40 B68", cmyk: "C78 M41 Y0 K73" },
];

const neutrals = ["#18181A", "#0F2844", "#36475B", "#657485", "#96A0AB", "#C2C9D1", "#E3E9EF", "#FFFFFF"];

function Swatch({ hex }: { hex: string }) {
  return <span className="inline-block size-3 shrink-0 border border-black/10" style={{ backgroundColor: hex }} />;
}

/**
 * El Pulso Brand Kit, built with the shared case-study components (as in
 * the Bando/INE pages) from the Figma frame "Brand Kit" (node 3670:56256).
 * Copy follows the notes left in that frame, the brand DNA answers and the
 * moodboard.
 */
export default function BrandKit() {
  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <div className="flex flex-col gap-4 pt-6">
        <BrandTabs />
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-[48px] font-bold leading-none text-[#1d1d1d]">Pulso</h1>
          <p className="text-[21px] text-[#6e6e73]">
            / <span className="text-[#1d1d1d]">Brand kit</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroLead>Aquí están las bases para construir y hacer crecer Pulso.</HeroLead>
            <BodyText>
              Todo lo que diseñemos de aquí en adelante parte de este documento. Encontrarás el logo, los colores,
              la tipografía, los iconos, los layouts y ejemplos de cómo usarlos.
            </BodyText>
            {/* TODO: link to the downloadable brand kit file once it exists. */}
            <p className="text-[16px] tracking-[0.16px] text-[#6e6e73] underline underline-offset-2">
              Descarga Brand kit
            </p>
          </HeroIntro>
        </div>
        <div className="hidden flex-1 md:block" />
      </div>

      <Content2 title={<Title>Logo</Title>}>
        <Content2Item first image={{ src: img("Logo_1"), alt: "Logo de Pulso" }}>
          <ItemText focus="Una vela japonesa dentro de un círculo, con pulsaciones a los lados.">
            <BodyText>
              La {bold("vela japonesa")} es la forma más común de leer el precio del dólar en una gráfica, así que
              es un elemento que nuestra audiencia reconoce de inmediato. La pusimos dentro de un{" "}
              {bold("círculo")}, que representa el punto de origen: el lugar desde donde parte la lectura de cada
              día. A los costados, las {bold("barras")} funcionan como ondas que salen del círculo y hacen que se
              vea como si estuviera latiendo, una referencia directa al nombre de la marca: {bold("Pulso")}.
              <br />
              <br />
              Es un logo simple a propósito: se reconoce en tamaños pequeños, funciona en un solo color y deja
              claro desde el primer vistazo que hablamos de mercados.
            </BodyText>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_2"), alt: "Versiones del logo en Magma y Navy" }}>
          <ItemText title="Contrastes" focus="Magma para llamar la atención, Navy para dar confianza.">
            <BodyText>
              El logo vive en dos combinaciones principales: Navy sobre Magma y Magma sobre Navy. El{" "}
              {bold("Magma")} es el color atrevido, el que hace que la marca se note en un feed lleno de verdes y
              amarillos. El {bold("Navy")} es el sobrio, el que nos acerca a la seriedad que espera un tesorero o
              un director financiero. Juntos proyectan lo que buscamos: una marca {bold("dinámica")}, que toma
              postura todos los días, pero en la que se puede {bold("confiar")}.
              <br />
              <br />
              En cada combinación hay tres versiones: el isotipo, el logo y el logo con el slogan “El Pulso de las
              divisas”.
            </BodyText>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_3"), alt: "Retícula de construcción y área de protección del logo" }}>
          <ItemText title="Estructura" focus="Cada parte del logo está construida sobre una retícula.">
            <BodyText>
              El isotipo parte de dos círculos concéntricos y de una retícula de líneas que define el grosor de las
              barras, el ancho de la vela y la separación entre cada elemento. Gracias a eso, el logo se puede
              reconstruir con precisión y mantiene sus proporciones en cualquier tamaño.
              <br />
              <br />
              Para el {bold("área de protección")} usamos el propio isotipo como medida: es el espacio mínimo que
              debe quedar libre alrededor del logo, sin textos, imágenes ni otros elementos.
            </BodyText>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_4"), alt: "Usos correctos e incorrectos del logo" }}>
          <ItemText title="Usos correctos" focus="El logo solo funciona si se usa siempre igual.">
            <BodyText>
              Cada vez que el logo cambia de forma, la marca pierde reconocimiento. Estas son las reglas básicas
              para aplicarlo:
            </BodyText>
            <Subtitle18>Incorrecto</Subtitle18>
            <Rule n={1} title="Acomodar los elementos en vertical.">
              El isotipo siempre va a la izquierda del texto y a la misma altura. Apilarlos crea una versión del
              logo que no existe y cambia la forma en que se lee.
            </Rule>
            <Rule n={2} title="Cambiar el orden horizontal.">
              Primero va el isotipo y después el nombre. Si se invierten, parecen dos elementos separados y se
              rompe el orden de lectura.
            </Rule>
            <Rule n={3} title="Distorsionar el logo.">
              Estirarlo o comprimirlo deforma el círculo y la tipografía. Si necesitas que ocupe menos espacio,
              escálalo de forma proporcional o usa solo el isotipo.
            </Rule>
            <Subtitle18>Correcto</Subtitle18>
            <Rule n={1} title="Logo horizontal.">
              Es la versión principal y la que usamos en la mayoría de las piezas.
            </Rule>
            <Rule n={2} title="Solo el isotipo.">
              Para espacios pequeños o cuadrados, como avatares y miniaturas, o cuando el nombre ya aparece en la
              pieza.
            </Rule>
            <Rule n={3} title="Solo el texto.">
              Para espacios muy horizontales o cuando el isotipo ya está presente en otra parte del diseño.
            </Rule>
            <Rule n={4} title="Contrastes correctos.">
              Magma sobre Navy, Navy sobre Magma, Magma o Navy sobre blanco y blanco sobre Navy.
            </Rule>
          </ItemText>
        </Content2Item>

        <Content2Item
          media={
            <div className="flex w-full flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("Logo_5")} alt="Tamaños mínimos del logo" className="w-full h-auto object-contain" />
              <BodyText>Tamaño mínimo: isotipo 16 px · logotipo 20 px · texto 20 px.</BodyText>
            </div>
          }
        >
          <ItemText title="Tamaños mínimos" focus="Si el logo no se lee, no sirve.">
            <BodyText>
              Debajo de cierto tamaño, los detalles del isotipo se pierden y el texto deja de leerse con claridad,
              sobre todo en el celular, que es donde más nos consumen. Respetar el tamaño mínimo asegura que la
              marca se reconozca igual en una portada de podcast que en la foto de perfil de WhatsApp.
            </BodyText>
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Color</Title>}>
        <Content2Item first image={{ src: img("Color_1"), alt: "Paleta de color de Pulso" }}>
          <ItemText title="Paleta" focus="Sobria para dar confianza, con un acento que no pasa desapercibido.">
            <BodyText>
              El {bold("Navy")} es la base de la marca: transmite la seguridad y la seriedad que espera una
              audiencia que toma decisiones con dinero. El {bold("Magma")} es el acento: lo usamos para destacar la
              cifra, el dato clave o la postura del día. Alrededor de ellos hay una escala de grises azulados para
              fondos, textos y tablas, que ordena la información sin competir con los colores principales.
            </BodyText>
            <div className="flex flex-col gap-3 text-[16px] tracking-[0.16px] text-[#6e6e73]">
              {mainColors.map((c) => (
                <div key={c.name} className="flex items-start gap-2">
                  <span className="mt-[3px]">
                    <Swatch hex={c.hex} />
                  </span>
                  <p>
                    {bold(c.name)} {c.hex}
                    <br />
                    {c.rgb} · {c.cmyk}
                  </p>
                </div>
              ))}
              <div className="flex flex-col gap-1">
                <p>{bold("Escala")}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {neutrals.map((hex) => (
                    <span key={hex} className="flex items-center gap-1.5">
                      <Swatch hex={hex} />
                      {hex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Color_2"), alt: "Combinaciones de color permitidas para el isotipo" }}>
          <ItemText title="Usos" focus="Un buen contraste es lo que hace que la marca se lea en cualquier fondo.">
            <BodyText>
              Solo usamos las combinaciones que mantienen el logo legible: Magma sobre Navy, Navy sobre Magma,
              Magma o Navy sobre blanco y blanco sobre Navy. Evitamos el Magma sobre los grises intermedios y el
              logo directo sobre fotografías: en esos casos el contraste baja y el isotipo pierde definición,
              sobre todo en tamaños pequeños.
            </BodyText>
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Tipografía</Title>}>
        <Content2Item
          first
          media={
            <ImageStack
              names={["Tipo_1", "Tipo_2"]}
              alts={["Tipografía DM Sans", "DM Sans aplicada a piezas con datos y opinión"]}
            />
          }
        >
          <ItemText focus="DM Sans: limpia, fácil de leer y con números claros.">
            <BodyText>
              Es una sans serif que se ve bien en pantalla, en impreso y en la mayoría de los dispositivos, y
              responde a lo que definimos en el moodboard: que todo se lea a la primera. Sus {bold("cifras son claras")},
              así que un tipo de cambio, un porcentaje o una fecha se entienden de un vistazo, algo esencial para
              una marca que habla de datos todos los días.
              <br />
              <br />
              Usamos pesos ligeros y regulares para las cifras grandes y los titulares, y el bold para resaltar lo
              importante dentro de un texto. Dejamos fuera las serif tipo periódico: no queremos parecer un
              noticiero.
            </BodyText>
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Iconos</Title>}>
        <Content2Item first image={{ src: img("Iconos"), alt: "Iconos de línea de Pulso" }}>
          <ItemText focus="Iconos de línea, sin relleno: un trazo, una idea.">
            <BodyText>
              Tienen un {bold("grosor constante")} y puntas redondeadas, que acompañan el peso de DM Sans y la
              forma en que mostramos las gráficas. Vienen de una {bold("librería de libre uso")}, así que
              cualquiera puede aplicarlos sin diseñarlos desde cero, algo importante porque hoy no hay un equipo de
              producción.
              <br />
              <br />
              Se usan en Navy sobre fondos claros o en blanco sobre Navy, siempre como apoyo del contenido y nunca
              como ilustración. Evitamos rellenos, texturas y efectos 3D.
            </BodyText>
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Layout</Title>}>
        <Content2Item
          first
          media={
            <ImageStack
              names={["Layout_1", "Layout_2", "Layout_3"]}
              alts={[
                "Miniaturas de YouTube de El Pulso de las Divisas",
                "Reporte diario y portada de análisis",
                "Pieza de opinión con fotografía",
              ]}
            />
          }
        >
          <ItemText focus="Los datos y las opiniones son los protagonistas de cada pieza.">
            <BodyText>
              Partimos de una retícula base y, dentro de ella, acomodamos la información según el tipo de
              contenido. Cuando hablamos de {bold("datos")}, la cifra va en grande y en Magma, como en el reporte
              diario o en las miniaturas con el tipo de cambio. Cuando damos una {bold("opinión")}, el titular
              ocupa el espacio y la postura se lee con fuerza, como en los análisis.
              <br />
              <br />
              Los bloques de color con esquinas redondeadas y los recortes laterales retoman las formas del
              isotipo y le dan a las piezas la actitud que una paleta sobria por sí sola no tiene. En todas
              mantenemos el logo visible y, cuando hay datos, la fuente.
            </BodyText>
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Casos de uso</Title>}>
        <Content2Item first media={<div className="w-full aspect-video bg-[#e3e9ef]" />}>
          <ItemText focus="Esta sección está en proceso. La iremos actualizando conforme tengamos casos de uso reales de la marca." />
        </Content2Item>
      </Content2>
    </ContentGrid>
  );
}
