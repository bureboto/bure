import { Fragment, type ReactNode } from "react";
import ContentGrid from "@/components/ContentGrid";
import BrandTabs from "@/components/BrandTabs";
import Content2, { Content2Item } from "@/components/caseStudy/Content2";
import { HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { Subtitle24, FocusText, BodyText } from "@/components/caseStudy/Typography";

/** Image files are named after the Figma frame they fill (Logo_1 → Logo_1.jpg, etc.). */
const img = (name: string) => `/design/elpulsodelasdivisas/Images/${name}.jpg`;

/** Jumbo titles are 80px per Figma; step down on phones so "Tipografía" fits a 390px screen. */
function Title({ children }: { children: ReactNode }) {
  return <span className="text-[64px] md:text-[80px]">{children}</span>;
}

/** Body/sm paragraph block; each entry is separated by a blank line, as in the Figma text layers. */
function Body({ paragraphs }: { paragraphs: ReactNode[] }) {
  return (
    <BodyText>
      {paragraphs.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <br />
              <br />
            </>
          )}
          {p}
        </Fragment>
      ))}
    </BodyText>
  );
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

/** "Incorrecto" / "Correcto" group in Usos correctos: H/4 (21px bold) heading over numbered rules. */
function RuleGroup({ heading, rules }: { heading: string; rules: { title: string; body: string }[] }) {
  return (
    <div className="flex flex-col gap-2 text-[#1d1d1d]">
      <p className="text-[21px] font-bold">{heading}</p>
      <div className="flex flex-col gap-4 border-l border-[#909096] pl-4 text-[16px] leading-[18.5px] tracking-[0.16px]">
        {rules.map((rule, i) => (
          <div key={rule.title} className="flex flex-col gap-2">
            <p className="font-bold">
              {i + 1}. {rule.title}
            </p>
            <p>{rule.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type ColorSpec = { name: string; hex: string; rgb: string; cmyk: string };

/** One color in the Colores grid: bold name over hex / RGB / CMYK. */
function ColorValue({ color }: { color: ColorSpec }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-[#1d1d1d]">{color.name}</p>
      <div className="flex flex-col gap-1 text-[#6e6e73]">
        <p>{color.hex}</p>
        <p>{color.rgb}</p>
        <p>{color.cmyk}</p>
      </div>
    </div>
  );
}

// Values taken from the Color_1 swatch image.
const mainColors: ColorSpec[] = [
  { name: "Magma", hex: "#FF6E4A", rgb: "R255, G110, B74", cmyk: "C0, M57, Y71, K0" },
  { name: "Navy", hex: "#0F2844", rgb: "R15, G40, B68", cmyk: "C78, M41, Y0, K73" },
];

const scale: ColorSpec[] = [
  { name: "00", hex: "#18181A", rgb: "R24, G24, B26", cmyk: "C8, M8, Y0, K90" },
  { name: "01", hex: "#0F2844", rgb: "R15, G40, B68", cmyk: "C78, M41, Y0, K73" },
  { name: "02", hex: "#36475B", rgb: "R54, G71, B91", cmyk: "C41, M22, Y0, K64" },
  { name: "03", hex: "#657485", rgb: "R101, G116, B133", cmyk: "C24, M13, Y0, K48" },
  { name: "04", hex: "#96A0AB", rgb: "R150, G160, B171", cmyk: "C12, M6, Y0, K33" },
  { name: "05", hex: "#C2C9D1", rgb: "R194, G201, B209", cmyk: "C7, M4, Y0, K18" },
  { name: "06", hex: "#E3E9EF", rgb: "R227, G233, B239", cmyk: "C5, M3, Y0, K6" },
  { name: "07", hex: "#FFFFFF", rgb: "R255, G255, B255", cmyk: "C0, M0, Y0, K0" },
];

/**
 * El Pulso Brand Kit, built with the shared case-study components (as in
 * the Bando/INE pages) from the Figma frame "Brand Kit" (node 3670:56256).
 * Copy is taken from that frame.
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
            <Body
              paragraphs={[
                "Todo lo que diseñemos de aquí en adelante parte de este documento.",
                "Encontrarás el logo, los colores, la tipografía, los iconos, los layouts y ejemplos de cómo usarlos.",
                <a
                  key="dl"
                  href="/design/elpulsodelasdivisas/Pulso_BrandKit.zip"
                  download
                  className="underline underline-offset-2 hover:text-[#1d1d1d] transition-colors"
                >
                  Descarga Brand kit
                </a>,
              ]}
            />
          </HeroIntro>
        </div>
        <div className="hidden flex-1 md:block" />
      </div>

      <Content2 title={<Title>Logo</Title>}>
        <Content2Item first image={{ src: img("Logo_1"), alt: "Logo de Pulso" }}>
          <ItemText focus="Una vela japonesa marcando el centro de la información, con pulsaciones que salen de él, marcando el Pulso.">
            <Body
              paragraphs={[
                "La vela japonesa es la forma más común de leer el precio de los mercados en una gráfica, así que es un elemento que nuestra audiencia reconoce de inmediato.",
                "La pusimos dentro de un círculo, que representa el punto de origen: el lugar desde donde parte la lectura de cada día. A los costados, las barras funcionan como ondas que salen del círculo y hacen que se vea como si estuviera latiendo, una referencia directa al nombre de la marca: Pulso.",
                "Es un logo simple a propósito: se reconoce en tamaños pequeños, funciona en un solo color y deja claro desde el primer vistazo que hablamos de mercados.",
              ]}
            />
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_2"), alt: "Versiones del logo en Magma y Navy" }}>
          <ItemText
            title="Contrastes"
            focus="Magma para llamar la atención, Navy para dar confianza, juntos dan equilibrio y proyectan frescura y dinamismo sin perder la seriedad del contenido."
          >
            <Body
              paragraphs={[
                <>
                  El logo vive en dos combinaciones principales:
                  <br />
                  Navy sobre Magma y Magma sobre Navy.
                </>,
                "El Magma es el color atrevido, el que hace que la marca se note en un feed.",
                "El Navy es el sobrio, el que nos acerca a la seriedad que espera un tesorero o un director financiero. Juntos proyectan lo que buscamos: una marca dinámica, que toma postura todos los días, pero en la que se puede confiar.",
                <>
                  En cada combinación hay tres versiones:
                  <br />
                  el isotipo, el logo y el logo con el slogan “El Pulso de las divisas”.
                </>,
              ]}
            />
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_3"), alt: "Retícula de construcción y área de protección del logo" }}>
          <ItemText title="Estructura" focus="Cada parte del logo está construida sobre una retícula simétrica.">
            <Body
              paragraphs={[
                "El isotipo parte de dos círculos concéntricos y de una retícula de líneas que define el grosor de las barras, el ancho de la vela y la separación entre cada elemento. Gracias a eso, el logo se puede reconstruir con precisión y mantiene sus proporciones en cualquier tamaño.",
                "Para el área de protección usamos el propio isotipo como medida: es el espacio mínimo que debe quedar libre alrededor del logo, sin textos, imágenes ni otros elementos.",
              ]}
            />
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_4"), alt: "Usos correctos e incorrectos del logo" }}>
          <ItemText title="Usos correctos" focus="El logo solo funciona si se usa siempre igual.">
            <BodyText>
              Cada vez que el logo cambia de forma, la marca pierde reconocimiento. Estas son las reglas básicas
              para aplicarlo:
            </BodyText>
            <div className="flex flex-col gap-8">
              <RuleGroup
                heading="Incorrecto"
                rules={[
                  {
                    title: "Acomodar los elementos en vertical.",
                    body: "El isotipo siempre va a la izquierda del texto y a la misma altura. Apilarlos crea una versión del logo que no existe y cambia la forma en que se lee.",
                  },
                  {
                    title: "Cambiar el orden horizontal.",
                    body: "Primero va el isotipo y después el nombre. Si se invierten, parecen dos elementos separados y se rompe el orden de lectura.",
                  },
                  {
                    title: "Distorsionar el logo.",
                    body: "Estirarlo o comprimirlo deforma el círculo y la tipografía. Si necesitas que ocupe menos espacio, escálalo de forma proporcional o usa solo el isotipo.",
                  },
                ]}
              />
              <RuleGroup
                heading="Correcto"
                rules={[
                  {
                    title: "Logo horizontal.",
                    body: "Es la versión principal y la que usamos en la mayoría de las piezas.",
                  },
                  {
                    title: "Solo el isotipo.",
                    body: "Para espacios pequeños o cuadrados, como avatares y miniaturas, o cuando el nombre ya aparece en la pieza.",
                  },
                  {
                    title: "Solo el texto.",
                    body: "Para espacios muy horizontales o cuando el isotipo ya está presente en otra parte del diseño.",
                  },
                  {
                    title: "Contrastes correctos.",
                    body: "Garantizar la lectura correcta de nuestro logotipo.",
                  },
                ]}
              />
            </div>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Logo_5"), alt: "Tamaños mínimos del logo" }}>
          <ItemText title="Tamaños mínimos" focus="Si el logo no se lee, no sirve.">
            <Body
              paragraphs={[
                "Debajo de cierto tamaño, los detalles del isotipo se pierden y el texto deja de leerse con claridad, sobre todo en el celular, que es donde más nos consumen.",
                "Respetar el tamaño mínimo asegura que la marca se reconozca igual en una portada de podcast que en la foto de perfil de WhatsApp.",
                "Tamaño mínimo: isotipo 16 px · logotipo 20 px · texto 20 px.",
              ]}
            />
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Color</Title>}>
        <Content2Item first image={{ src: img("Color_1"), alt: "Paleta de color de Pulso" }}>
          <ItemText title="Paleta" focus="Sobria para dar confianza, con un acento que no pasa desapercibido.">
            <Body
              paragraphs={[
                "El Navy es la base de la marca: transmite la seguridad y la seriedad que espera una audiencia que toma decisiones con dinero.",
                "El Magma es el acento: lo usamos para destacar la cifra, el dato clave o la postura del día.",
                "Alrededor de ellos hay una escala de grises azulados para fondos, textos y tablas, que ordena la información sin competir con los colores principales.",
              ]}
            />
            <div className="flex flex-col gap-4 pt-6">
              <Subtitle24>Colores</Subtitle24>
              {/* Container query: 4 columns only when the text column is wide enough (Figma: 580px) to keep CMYK on one line. */}
              <div className="@container flex flex-col gap-10 text-[16px] leading-[18.5px] tracking-[0.16px]">
                <div className="grid grid-cols-2 gap-x-4 border-b border-[#909096] pb-8">
                  {mainColors.map((c) => (
                    <ColorValue key={c.name} color={c} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 @[560px]:grid-cols-4">
                  {scale.map((c) => (
                    <ColorValue key={c.name} color={c} />
                  ))}
                </div>
              </div>
            </div>
          </ItemText>
        </Content2Item>

        <Content2Item image={{ src: img("Color_2"), alt: "Combinaciones de color permitidas para el isotipo" }}>
          <ItemText title="Usos" focus="Un buen contraste es lo que hace que la marca se lea en cualquier fondo.">
            <Body
              paragraphs={[
                "Solo usamos las combinaciones que mantienen el logo legible:",
                "Magma sobre Navy, Navy sobre Magma, Magma o Navy sobre blanco y blanco sobre Navy.",
                "Evitamos el Magma sobre los grises intermedios y el logo directo sobre fotografías: en esos casos el contraste baja y el isotipo pierde definición, sobre todo en tamaños pequeños.",
              ]}
            />
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
            <Body
              paragraphs={[
                "Es una sans serif que se ve bien en pantalla, en impreso y en la mayoría de los dispositivos, cumple a la perfección que todo se lea a la primera.",
                "Sus cifras son claras, así que un tipo de cambio, un porcentaje o una fecha se entienden de un vistazo, algo esencial para una marca que habla de datos todos los días.",
                "Usamos pesos ligeros y regulares para las cifras grandes y los titulares, y el bold para resaltar lo importante dentro de un texto.",
                "Dejamos fuera las serif tipo periódico: no queremos parecer un noticiero.",
              ]}
            />
          </ItemText>
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Iconos</Title>}>
        <Content2Item first image={{ src: img("Iconos"), alt: "Iconos de línea de Pulso" }}>
          <ItemText focus="Iconos de línea, sin relleno: un trazo, una idea.">
            <Body
              paragraphs={[
                "Tienen un grosor constante y puntas redondeadas, que acompañan el peso de DM Sans y la forma en que mostramos las gráficas. Vienen de una librería de libre uso, así que cualquiera puede aplicarlos sin diseñarlos desde cero, algo importante porque hoy no hay un equipo de producción.",
                "Se usan en Navy sobre fondos claros o en blanco sobre Navy, siempre como apoyo del contenido y nunca como ilustración. Evitamos rellenos, texturas y efectos 3D.",
              ]}
            />
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
            <Body
              paragraphs={[
                "Partimos de una retícula base y, dentro de ella, acomodamos la información según el tipo de contenido.",
                "Cuando hablamos de datos, la cifra va en grande y en Magma, como en el reporte diario o en las miniaturas con el tipo de cambio.",
                "Cuando damos una opinión, el titular ocupa el espacio y la postura se lee con fuerza, como en los análisis.",
                "Los bloques de color con esquinas redondeadas y los recortes laterales retoman las formas del isotipo y le dan a las piezas la actitud que una paleta sobria por sí sola no tiene.",
                "En todas mantenemos el logo visible y, cuando hay datos, la fuente.",
              ]}
            />
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
