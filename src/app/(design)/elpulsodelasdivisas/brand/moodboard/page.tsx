import Image from "next/image";
import ContentGrid from "@/components/ContentGrid";
import BrandTabs from "@/components/BrandTabs";

type Subsection = { label: string; body: string };

type MoodSection = {
  title: string;
  subsections: Subsection[];
  image: string;
};

const sections: MoodSection[] = [
  {
    title: "Color",
    image: "/design/elpulsodelasdivisas/moodboard/color.jpg",
    subsections: [
      { label: "Principio", body: "Sobrio, nunca apagado." },
      {
        label: "Qué hay en el mercado",
        body: "La mayoría del contenido financiero usa **colores vibrantes,** casi siempre en **tonos verdes y amarillos.** Existen marcas con tonos cálidos, pero a primera impresión no se asocian con finanzas, y es necesario navegar un poco en ellas para entender de qué tratan.",
      },
      {
        label: "Nuestra elección",
        body: "Tomamos un verde forest como color principal, complementado con un coral. Juntos logran un contraste y una armonía muy equilibrados. Buscamos tonos sobrios pero luminosos, que proyecten **seguridad y confianza a nuestra audiencia.**",
      },
      {
        label: "Por qué nos conviene",
        body: "Es una paleta **fácil de escalar:** el verde se complementa con su color opuesto en el círculo cromático, así que siempre que estén juntos van a combinar. Funcionan muy bien como acentos en contenidos con mucha información y, al tener alto contraste entre sí, son **ideales para mostrar datos y gráficas,** un material muy recurrente en la marca.",
      },
      {
        label: "Lo que evitamos",
        body: "Los **tonos brillantes y juveniles.** La mayoría de nuestra audiencia tiene entre 35 y 65 años, así que necesitamos conservar la sobriedad. La actitud y la transparencia las vamos a dar a través de los layouts que utilicemos.",
      },
    ],
  },
  {
    title: "Tipografía",
    image: "/design/elpulsodelasdivisas/moodboard/tipografia.jpg",
    subsections: [
      { label: "Principio", body: "Se lee a la primera." },
      {
        label: "Qué hay en el mercado",
        body: "Los principales medios de comunicación usan **tipografías serif** (con remates) para dar la sensación de estar **leyendo un periódico.** En cambio, los medios nativos digitales optan por tipografías más limpias, que facilitan la lectura rápida en pantalla.",
      },
      {
        label: "Nuestra elección",
        body: "Elegimos una **tipografía sans serif muy limpia,** que escala bien tanto en digital como en impreso y se ve correctamente en la mayoría de los dispositivos actuales. Responde a nuestro ADN: proyecta **confianza, transparencia y seguridad,** y se potencia con la paleta de color y la composición de los contenidos.",
      },
      {
        label: "Por qué nos conviene",
        body: "Es **escalable y minimalista,** así que funciona igual de bien en un reporte de WhatsApp que en una portada de podcast, un curso o una futura app. Como es una fuente limpia y de fácil lectura, responde a dos de nuestros valores: **la simplicidad** y el respeto por el tiempo de la audiencia. Además, sus cifras son **claras y tabulares,** lo que permite leer niveles, precios y fechas de un vistazo, algo esencial en una marca que habla de datos todos los días.",
      },
      {
        label: "Lo que evitamos",
        body: "**Dificultar la lectura y la comprensión** de nuestros contenidos. Evitamos tipografías **decorativas o poco comunes** que no se muestren bien en todos los dispositivos donde se consulta la información, y también la estética de periódico tradicional, que nos acercaría al noticiero que no queremos ser.",
      },
    ],
  },
  {
    title: "Iconos",
    image: "/design/elpulsodelasdivisas/moodboard/iconos.jpg",
    subsections: [
      { label: "Principio", body: "Un trazo, una idea." },
      {
        label: "Qué hay en el mercado",
        body: "El estilo dominante es **minimalista,** y en general los iconos se toman de librerías comunes como Material Design o Phosphor, entre otras. En marcas similares a El Pulso no encontramos ninguna con una galería de iconos propia.",
      },
      {
        label: "Nuestra elección",
        body: "Seguimos la línea minimalista, con iconos **de línea, sin relleno.** Así damos continuidad al estilo de la tipografía y a la forma en que El Pulso muestra sus gráficas: trazos limpios, con un grosor constante que acompaña el peso de DM Sans.",
      },
      {
        label: "Por qué nos conviene",
        body: "Usamos una **librería de iconos de libre uso,** lo que nos ahorra diseñar una librería propia y nos da una galería fácil de usar en cualquier contenido que hagamos. También responde a una realidad de la marca: hoy no hay un equipo de producción, así que necesitamos herramientas que cualquiera pueda aplicar sin perder la consistencia.",
      },
      {
        label: "Lo que evitamos",
        body: "**Complicar el uso de los iconos.** Evitamos iconos con texturas, formas y colores de más, que lejos de funcionar como iconos terminan siendo casi ilustraciones. También **evitamos el 3D:** en tamaños pequeños pierde detalle y es difícil de escalar a contenidos específicos.",
      },
    ],
  },
  {
    title: "Gráficos",
    image: "/design/elpulsodelasdivisas/moodboard/graficos.jpg",
    subsections: [
      { label: "Principio", body: "Las cifras mandan." },
      {
        label: "Qué hay en el mercado",
        body: "En general no hay un estilo definido. Lo más común es usar **capturas de pantalla de instituciones,** sin una línea gráfica propia para este tipo de contenidos. La excepción son los grandes medios como Bloomberg, que tienen una línea limpia y minimalista e incluso adaptan su estilo gráfico según el tema. Para lograrlo cuentan con **equipos de diseño dedicados que crean piezas únicas para cada contenido.**",
      },
      {
        label: "Nuestra elección",
        body: "**Gráficas limpias, directas y al grano.** Un estilo minimalista donde lo importante es la claridad de los números y de la fuente de información. Cada gráfica muestra un solo mensaje, con el dato clave destacado en color y siempre con la fuente visible.",
      },
      {
        label: "Por qué nos conviene",
        body: "Es un **sistema escalable:** con plantillas definidas, cualquier gráfica nueva mantiene la misma línea sin tener que diseñarla desde cero. Esto también nos permite **agilizar la generación de gráficas con IA** en un futuro próximo, porque la herramienta trabajará sobre reglas claras y no sobre un estilo improvisado. Además, mostrar siempre la fuente responde a dos de nuestros valores: la independencia y la honestidad.",
      },
      {
        label: "Lo que evitamos",
        body: "**Complicar la generación** de datos y gráficas. El equipo es pequeño, así que siempre buscamos optimizar la creación de contenido sin comprometer la marca ni su consistencia. También **evitamos las capturas de pantalla de terceros,** las gráficas saturadas de elementos y los efectos 3D, que distraen del dato.",
      },
    ],
  },
  {
    title: "Web",
    image: "/design/elpulsodelasdivisas/moodboard/web.jpg",
    subsections: [
      { label: "Principio", body: "Puerta de entrada, no un destino." },
      {
        label: "Qué hay en el mercado",
        body: "Hay dos caminos: los **sitios informativos tipo blog,** donde se publica el contenido directamente, y las **marcas que se limitan a sus redes sociales** y suben ahí todo su contenido, sin sitio propio.",
      },
      {
        label: "Nuestra elección",
        body: "La web será un **reflejo de todo el branding** que estamos definiendo: limpia, clara y directa. En conjunto, cada elemento refuerza la confianza y la seguridad en el contenido que se está consultando.",
      },
      {
        label: "Por qué nos conviene",
        body: "**La web es un punto de contacto** tanto para quienes ya nos siguen como para quienes nos descubren. Mucha de nuestra audiencia llega porque alguien le reenvió un audio o un reporte por WhatsApp; cuando busca quién está detrás, la web es donde confirma que somos una marca seria: quiénes somos, desde cuándo lo hacemos y por qué vale la pena escucharnos. Un sitio **simple, claro y directo** facilita la captación de nuevos usuarios. Además, es la base sobre la que podrán crecer después los cursos, la consultoría y la futura app.",
      },
      {
        label: "Lo que evitamos",
        body: "**Un sitio con mucha interacción.** El primer MVP no busca tener un blog, sino ser un sitio informativo que nos dé a conocer como marca y nos lleve a nuestros vehículos de comunicación: el podcast, las redes sociales y el grupo de WhatsApp.",
      },
    ],
  },
  {
    title: "Composiciones",
    image: "/design/elpulsodelasdivisas/moodboard/composiciones.jpg",
    subsections: [
      { label: "Principio", body: "Orden con actitud." },
      {
        label: "Qué hay en el mercado",
        body: "Abunda el **contenido generado con IA** sin un toque de diseño propio, que podría ser de cualquier marca. Fuera de eso, casi no hay **estructuras más allá de las básicas:** título, descripción e imagen.",
      },
      {
        label: "Nuestra elección",
        body: "**Los datos y las opiniones** son nuestro contenido principal, así que la composición gira en torno a ellos. Partimos de una retícula base y, dentro de ella, jugamos con el acomodo de la información, siempre manteniendo los elementos de marca y el **foco en el contenido**. Cuando hablamos de datos, la cifra es la protagonista; cuando damos una opinión, la postura se muestra con **fuerza,** porque tomamos postura.",
      },
      {
        label: "Por qué nos conviene",
        body: "Al crear **layouts flexibles,** nuestro contenido se vuelve dinámico y nuestro banco de layouts crece constantemente, listo para usarse en distintas aplicaciones: un post, la web o el podcast. Esto le da **variedad visual a la marca** sin perder consistencia, y es la forma en que la actitud de El Pulso se nota aun con una paleta sobria.",
      },
      {
        label: "Lo que evitamos",
        body: "Agregar elementos que no ayuden a comprender mejor la información. **Menos es más.** También evitamos las **plantillas genéricas** que hacen que nuestro contenido se confunda con el de cualquier otra marca.",
      },
    ],
  },
  {
    title: "Autores",
    image: "/design/elpulsodelasdivisas/moodboard/autores.jpg",
    subsections: [
      { label: "Principio", body: "Serenidad que inspira confianza." },
      {
        label: "Por qué es importante",
        body: "Las personas que aparecen en El Pulso son la cara de nuestro análisis, y su imagen tiene que transmitir lo mismo que nuestro contenido: **criterio, calma y seguridad.** Por eso buscamos retratos con una expresión serena y segura, donde una **sonrisa ligera es bienvenida,** pero sin llegar a la sonrisa amplia de una foto publicitaria. Hablamos de las decisiones que toman empresas con su dinero, y nuestra audiencia necesita ver en nosotros a alguien que se las toma en serio. Como dice nuestro ADN, queremos sentirnos como el colega que lleva años en los mercados, **no como un vendedor.**",
      },
    ],
  },
  {
    title: "Fotografías",
    image: "/design/elpulsodelasdivisas/moodboard/fotografias.jpg",
    subsections: [
      { label: "Principio", body: "Contexto real, nunca decoración." },
      {
        label: "Qué hay en el mercado",
        body: "La imagen típica del contenido financiero son **pantallas de trading,** gráficas borrosas y luces neón en verde y rojo, muchas veces generadas con IA. Es una estética que se repite en toda la categoría y que suele asociarse con los **gurús de trading.**",
      },
      {
        label: "Nuestra elección",
        body: "**Mostramos el contexto** real que mueve al peso y al dólar: los lugares donde se toman las decisiones económicas de México y Estados Unidos, sus ciudades, sus mercados y la gente que trabaja en ellos. Cuando una imagen muestra un lugar real, usamos fotografía real. La IA es una herramienta válida para crear escenas genéricas, **siempre bajo revisión:** nunca para recrear lugares, personas o hechos reales, y sin incluir texto ni cifras dentro de la imagen.",
      },
      {
        label: "Por qué nos conviene",
        body: "El contexto real **refuerza nuestra honestidad:** no decoramos con números que no significan nada, mostramos el mundo del que hablamos. Además, nos distingue de inmediato de la categoría y conecta con lo que vive nuestra audiencia todos los días. Usar fotos de libre uso y generar con IA lo que haga falta nos da un **estilo consistente** sin depender de un banco de imágenes de pago.",
      },
      {
        label: "Lo que evitamos",
        body: "**Parecer gurús** de trading. Evitamos las pantallas neón, las gráficas decorativas y cualquier imagen generada con IA que pueda confundirse con una foto documental o mostrar datos falsos. **La IA no está limitada, pero sí vigilada:** cada imagen pasa por la misma pregunta, si alguien podría creer que es real lo que no es.",
      },
    ],
  },
];

function renderBody(body: string) {
  const parts = body.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Moodboard() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 pt-6">
        <BrandTabs />
        <div className="flex items-baseline gap-[10px] flex-wrap">
          <h1 className="text-[48px] font-bold leading-none">El Pulso</h1>
          <span className="text-[32px] text-black/80">/</span>
          <span className="text-[32px] text-black/80">Moodboard</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-[15px] font-light text-black">
        <p>
          <strong className="font-bold">Referencias visuales</strong> a partir de las cuales vamos a
          construir la marca.
          <br />
          <br />
          Aquí reunimos lo que va a definir cómo se ve y cómo se siente El Pulso: tipografía, iconos,
          color, composición, la forma de mostrar los datos, la presencia digital y la fotografía.
          <br />
          <br />
          <strong className="font-bold">Nada de esto está aquí por gusto,</strong> sino porque responde a
          lo que escribimos en el ADN.
        </p>
        <p>
          Estas imágenes <strong className="font-bold">no son el diseño final</strong>, sino la dirección
          que vamos a seguir.
          <br />
          <br />
          Son el punto de partida que nos permitirá tomar decisiones con un mismo criterio y construir una
          identidad coherente en cada punto de contacto, desde el podcast hasta lo que venga después.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[348px]">
        {sections.map((section) => (
          <div key={section.title} className="relative w-full h-full bg-[#f5f5f5] rounded">
            <Image src={section.image} alt={section.title} fill className="object-contain" />
          </div>
        ))}
      </div>

      {sections.map((section, i) => (
        <div key={section.title} className="flex flex-col gap-10">
          {i > 0 && <hr className="border-black/20" />}
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1 flex flex-col gap-10 text-[#111]">
              <p className="text-[36px] font-bold">{section.title}</p>
              <div className="flex flex-col gap-6">
                {section.subsections.map((sub) => (
                  <div
                    key={sub.label}
                    className={sub.label !== "Lo que evitamos" ? "border-l border-black pl-4" : ""}
                  >
                    <p className="text-[21px] font-bold mb-2">{sub.label}</p>
                    <p
                      className={`font-light ${
                        sub.label === "Principio" ? "text-[28px]" : "text-[15px] tracking-[0.15px]"
                      }`}
                    >
                      {sub.label === "Principio" ? sub.body : renderBody(sub.body)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full h-[304px] bg-[#f5f5f5] rounded">
              <Image src={section.image} alt={section.title} fill className="object-contain" />
            </div>
          </div>
        </div>
      ))}
    </ContentGrid>
  );
}
