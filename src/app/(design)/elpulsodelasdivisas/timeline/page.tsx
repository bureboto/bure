import Link from "next/link";
import ContentGrid from "@/components/ContentGrid";

const days = [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19];

const weeks = [
  { label: "Semana 1", range: "2–6 nov", span: 5 },
  { label: "Semana 2", range: "9–13 nov", span: 5 },
  { label: "Semana 3", range: "17–19 nov", span: 4 },
];

const milestoneDays = new Set([3, 6, 11, 17, 19]);
const offDay = 16;

type Row = {
  label: string;
  barFrom?: number;
  barTo?: number;
  dot?: number;
  color?: "gray" | "green";
};

type Section = {
  heading: string;
  date: string;
  rows: Row[];
};

const sections: Section[] = [
  {
    heading: "Dirección visual",
    date: "3 nov",
    rows: [{ label: "Moodboard de dirección visual", barFrom: 2, barTo: 3, dot: 3, color: "gray" }],
  },
  {
    heading: "Rediseño de logo",
    date: "6 nov",
    rows: [
      { label: "Presentación de propuesta inicial", barFrom: 3, barTo: 6, dot: 6, color: "gray" },
      {
        label: "Ronda de feedback y ajustes (en caso de necesitarlo) + aprobación de logo",
        barFrom: 6,
        barTo: 11,
        dot: 11,
        color: "gray",
      },
    ],
  },
  {
    heading: "Sistema visual y casos de uso",
    date: "17 nov",
    rows: [
      { label: "Paleta de color (HEX, RGB, CMYK, contrastes)" },
      { label: "Tipografía principal, secundaria y jerarquías" },
      { label: "Iconografía: librería + set de 8 a 12 íconos" },
      { label: "Versiones positivo, negativo y monocromo" },
      { label: "Área de respeto, tamaño mínimo, usos incorrectos" },
      {
        label: "4 mockups: redes, YouTube/podcast, firma y miniatura",
        barFrom: 6,
        barTo: 17,
        dot: 17,
        color: "gray",
      },
    ],
  },
  {
    heading: "Entrega",
    date: "19 nov",
    rows: [
      {
        label: "Brand kit PDF + exportables AI / SVG / PNG — Revisión final y entrega",
        barFrom: 17,
        barTo: 19,
        dot: 19,
        color: "green",
      },
    ],
  },
];

const considerations = [
  "El sistema visual y el armado de la entrega avanzan en paralelo al logo para cumplir el plazo.",
  "Cada revisión se responde en máximo 24 horas hábiles; si la respuesta tarda más, la entrega se recorre los mismos días.",
  "Si no se usa la ronda de ajustes, la entrega puede adelantarse 1–2 días.",
  "El lunes 16 de noviembre (Día de la Revolución) no se cuenta como día hábil.",
];

function dayIndex(day: number) {
  return days.indexOf(day);
}

export default function Timeline() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link
          href="/elpulsodelasdivisas"
          className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
        >
          ← Volver
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-black/60">El Pulso / Branding</span>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-[2.5rem]">Timeline</h1>
            <span className="italic text-black/60">Fase 1</span>
          </div>
          <p className="text-black/70">Lunes 2 nov → Jueves 19 nov / 2026</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[860px]">
          {/* Week headers */}
          <div
            className="grid gap-x-1"
            style={{ gridTemplateColumns: `260px repeat(${days.length}, minmax(28px, 1fr))` }}
          >
            <div />
            {weeks.map((week) => (
              <div
                key={week.label}
                className="border-l border-black/20 pl-2 text-sm pb-1"
                style={{ gridColumn: `span ${week.span}` }}
              >
                <div className="font-bold">{week.label}</div>
                <div className="text-black/60">{week.range}</div>
              </div>
            ))}
          </div>

          {/* Day numbers */}
          <div
            className="grid gap-x-1 border-b border-black/20 pb-2 mb-4"
            style={{ gridTemplateColumns: `260px repeat(${days.length}, minmax(28px, 1fr))` }}
          >
            <div />
            {days.map((day) => (
              <div
                key={day}
                className={`flex items-center justify-center text-xs ${
                  day === offDay ? "text-black/30" : "text-black/70"
                }`}
              >
                {milestoneDays.has(day) ? (
                  <span className="w-5 h-5 rounded-full bg-[#9fe6c0] flex items-center justify-center">
                    {day}
                  </span>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-2">
                <h2 className="font-bold">
                  {section.heading} <span className="font-normal text-black/60">({section.date})</span>
                </h2>
                <div className="flex flex-col gap-2">
                  {section.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-x-1 items-center"
                      style={{ gridTemplateColumns: `260px repeat(${days.length}, minmax(28px, 1fr))` }}
                    >
                      <div className="text-sm text-black/70 pr-4">{row.label}</div>
                      {row.barFrom !== undefined && row.barTo !== undefined && (
                        <div
                          className={`h-2 rounded-full ${
                            row.color === "green" ? "bg-[#9fe6c0]" : "bg-black/10"
                          }`}
                          style={{
                            gridColumnStart: dayIndex(row.barFrom) + 2,
                            gridColumnEnd: dayIndex(row.barTo) + 3,
                          }}
                        />
                      )}
                      {row.dot !== undefined && (
                        <div
                          className="w-2.5 h-2.5 rounded-full bg-black justify-self-center"
                          style={{ gridColumnStart: dayIndex(row.dot) + 2 }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-black/20 pt-8">
        <h2 className="font-bold text-black">Consideraciones</h2>
        <ul className="flex flex-col gap-1 text-sm text-black/70 list-disc pl-4 max-w-3xl">
          {considerations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ContentGrid>
  );
}
