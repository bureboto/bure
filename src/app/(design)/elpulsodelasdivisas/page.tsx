import Link from "next/link";
import ContentGrid from "@/components/ContentGrid";

type Phase = {
  number: string;
  title: string;
  sections: { heading?: string; items: string[] }[];
  note?: string;
  deliverables?: string;
  investment: string;
  time: string;
};

const phases: Phase[] = [
  {
    number: "Fase 1",
    title: "Brand Kit básico",
    sections: [
      {
        heading: "Diagnóstico y arranque",
        items: [
          "Revisión de la identidad actual para identificar qué funciona, qué no y cuáles son nuestros puntos de contacto (redes y podcast principalmente).",
          "Sesión de arranque y moodboard de dirección visual para alinear expectativas antes de diseñar.",
        ],
      },
      {
        heading: "Rediseño de logo",
        items: [
          "Optimización de la anatomía del logotipo: proporciones, retícula de construcción y legibilidad en tamaños pequeños (avatar, favicon, miniaturas).",
          "Exploración de una variación para dar más solidez a la marca: versión horizontal o vertical, isotipo o monograma independiente.",
          "Versiones de color en positivo, negativo y monocromo.",
          "Incluye una propuesta inicial y 2 rondas de ajustes (en caso de necesitarlo).",
        ],
      },
      {
        heading: "Sistema visual",
        items: [
          "Paleta de color: se conserva la actual (considero que nos funciona y damos continuidad a lo que ya tienes hecho) y se ajusta para pantalla, con códigos HEX, RGB y CMYK, revisión de contrastes para legibilidad y proporciones de uso.",
          "Tipografía principal y secundaria, con jerarquías de títulos, texto y cifras.",
          "Iconografía: estilo definido y un set base de 8 a 12 íconos (acá buscaría definir una librería de iconos para no diseñar uno por uno y nos eleve tiempos y costos).",
        ],
      },
      {
        heading: "Casos de uso básicos",
        items: [
          "Área de respeto, tamaño mínimo y usos incorrectos del logotipo.",
          "Mockups de aplicación: perfil de redes sociales, portada de YouTube o podcast, firma de correo y miniatura de video.",
        ],
      },
    ],
    deliverables: "Brand kit en PDF y archivos del logotipo en AI, SVG y PNG.",
    investment: "1,000 USD",
    time: "2 a 3 semanas aprox.",
  },
  {
    number: "Fase 2",
    title: "Templates y animación de marca",
    sections: [
      {
        heading: "Templates estáticos",
        items: [
          "Post de feed (1:1 o 4:5), carrusel e historias (9:16).",
          "Plantilla de dato o cifra del día (tipo de cambio, gráfica simple), pensada para el contenido más recurrente de la marca.",
        ],
      },
      {
        heading: "Templates animados",
        items: ["Intro corta para reels o historias, cintillos con nombre (lower thirds) y transiciones."],
      },
      {
        heading: "Animación de logotipo",
        items: [
          "Isotipo en loop.",
          "Logotipo completo en dos versiones: corta (2 a 3 segundos) y larga (5 a 7 segundos).",
        ],
      },
    ],
    deliverables: "MP4, MOV con fondo transparente, GIF o Lottie para web y templates editables.",
    investment: "700 USD",
    time: "2 a 3 semanas aprox.",
  },
  {
    number: "Fase 3",
    title: "Paquete para podcast",
    sections: [
      {
        items: [
          "Cortinilla de entrada (intro) y de salida (outro).",
          "Separadores entre secciones.",
          "Versión en video, si el podcast se publica en YouTube o Spotify video.",
        ],
      },
    ],
    note: "El diseño sonoro y la música licenciada no están incluidos; en caso de requerirse, su costo corre por tu cuenta. Como alternativa, podemos hacer una exploración en Suno para crear algo que nos funcione (para uso comercial, Suno requiere un plan de pago).",
    investment: "700 USD",
    time: "1 a 2 semanas aprox.",
  },
];

const conditions = [
  "Cada fase la pagas por separado: 50% de anticipo y 50% contra entrega.",
  "Cada entregable incluye 2 rondas de ajustes. Si necesitas cambios adicionales o fuera de alcance, los cotizamos por separado.",
  "Los archivos finales editables te los entrego al liquidar cada fase.",
  "No incluye licencias tipográficas de pago, música licenciada, impresión ni producción de contenido recurrente.",
  "Vigencia de la propuesta: 30 días.",
  "Los precios están en dólares estadounidenses. Si me pagas en pesos, tomamos el tipo de cambio del día de pago.",
  "Los precios no incluyen IVA; si necesitas factura, se agrega el 16%.",
];

export default function ElPulsoDeLasDivisas() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-black/60">Propuesta de diseño</span>
          <h1 className="text-2xl md:text-3xl">El Pulso de las Divisas — Rebrand 2026</h1>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {phases.map((phase) => (
          <div key={phase.number} className="flex flex-col gap-6 border-t border-black/20 pt-8">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-xl">
                {phase.number}: {phase.title}
              </h2>
              <div className="text-sm text-black/60 text-right">
                <div>{phase.investment}</div>
                <div>{phase.time}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {phase.sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {section.heading && <h3 className="font-bold">{section.heading}</h3>}
                  <ul className="flex flex-col gap-2 text-black/70 list-disc pl-4">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {phase.note && <p className="text-sm text-black/60">{phase.note}</p>}
            {phase.deliverables && (
              <p className="text-sm text-black/70">
                <span className="font-bold text-black">Entregables: </span>
                {phase.deliverables}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-black/20 pt-8">
        <h2 className="text-xl">Resumen de inversión y tiempos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-black/20 text-left">
                <th className="py-2 pr-4 font-bold">Fase</th>
                <th className="py-2 pr-4 font-bold">Alcance</th>
                <th className="py-2 pr-4 font-bold">Tiempo estimado</th>
                <th className="py-2 pr-4 font-bold">Inversión</th>
              </tr>
            </thead>
            <tbody className="text-black/70">
              <tr className="border-b border-black/10">
                <td className="py-3 pr-4">1. Brand Kit</td>
                <td className="py-3 pr-4">Diagnóstico, rediseño de logotipo, sistema visual y casos de uso</td>
                <td className="py-3 pr-4">2 a 3 semanas</td>
                <td className="py-3 pr-4">1,000 USD</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-4">2. Templates y motion</td>
                <td className="py-3 pr-4">Templates estáticos y animados, animación de logotipo</td>
                <td className="py-3 pr-4">2 a 3 semanas</td>
                <td className="py-3 pr-4">700 USD</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-4">3. Podcast</td>
                <td className="py-3 pr-4">Cortinillas, separadores y versión en video</td>
                <td className="py-3 pr-4">1 a 2 semanas</td>
                <td className="py-3 pr-4">700 USD</td>
              </tr>
              <tr className="text-black font-bold">
                <td className="py-3 pr-4">Total</td>
                <td className="py-3 pr-4"></td>
                <td className="py-3 pr-4">5 a 8 semanas</td>
                <td className="py-3 pr-4">2,400 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-black/20 pt-8">
        <h2 className="text-xl">Condiciones generales</h2>
        <ul className="flex flex-col gap-2 text-black/70 list-disc pl-4 max-w-3xl">
          {conditions.map((condition, i) => (
            <li key={i}>{condition}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2 border-t border-black/20 pt-8">
        <p className="text-black/70">¿Lo cocinamos?</p>
        <a href="mailto:bureboto@gmail.com" className="underline underline-offset-4 w-fit">
          bureboto@gmail.com
        </a>
      </div>
    </ContentGrid>
  );
}
