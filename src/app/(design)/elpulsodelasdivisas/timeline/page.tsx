"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ContentGrid from "@/components/ContentGrid";

const days = [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19];
const START_DATE = new Date(2026, 10, 2); // 2 nov 2026
const END_DATE = new Date(2026, 10, 19); // 19 nov 2026

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
    rows: [{ label: "Moodboard de dirección visual", barFrom: 2, barTo: 3, color: "gray" }],
  },
  {
    heading: "Rediseño de logo",
    date: "6 nov",
    rows: [
      { label: "Presentación de propuesta inicial", barFrom: 3, barTo: 6, color: "gray" },
      {
        label: "Ronda de feedback y ajustes (en caso de necesitarlo) + aprobación de logo",
        barFrom: 6,
        barTo: 11,
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

const gridCols = `260px repeat(${days.length}, minmax(28px, 1fr))`;

// Flatten everything into rows that share one continuous grid so the
// milestone/today lines can span the full chart height via gridRow.
type GridRow =
  | { kind: "weeks" }
  | { kind: "days" }
  | { kind: "heading"; text: string; date: string }
  | { kind: "item"; row: Row };

const gridRows: GridRow[] = [
  { kind: "weeks" },
  { kind: "days" },
  ...sections.flatMap((section) => [
    { kind: "heading" as const, text: section.heading, date: section.date },
    ...section.rows.map((row) => ({ kind: "item" as const, row })),
  ]),
];

function useProgress() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return { fraction: 0, todayDay: null as number | null };

  const total = END_DATE.getTime() - START_DATE.getTime();
  const elapsed = now.getTime() - START_DATE.getTime();
  const fraction = Math.min(1, Math.max(0, elapsed / total));

  const todayDay =
    now >= START_DATE && now <= END_DATE && now.getFullYear() === 2026 && now.getMonth() === 10
      ? now.getDate()
      : null;

  return { fraction, todayDay };
}

export default function Timeline() {
  const { fraction, todayDay } = useProgress();
  const totalRows = gridRows.length;

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
          {/* Progress bar: fills left to right as today's date advances through the range */}
          <div className="grid gap-x-1 mb-2" style={{ gridTemplateColumns: gridCols }}>
            <div />
            <div
              className="h-1 rounded-full bg-black/10 relative overflow-hidden"
              style={{ gridColumn: `2 / ${days.length + 2}` }}
            >
              <div
                className="absolute inset-y-0 left-0 bg-[#4fd98a] rounded-full transition-[width] duration-1000"
                style={{ width: `${fraction * 100}%` }}
              />
            </div>
          </div>

          <div className="relative grid gap-x-1" style={{ gridTemplateColumns: gridCols }}>
            {/* Milestone vertical guide lines */}
            {[...milestoneDays].map((day) => (
              <div
                key={`line-${day}`}
                className="w-px bg-black/15 justify-self-center"
                style={{ gridColumnStart: dayIndex(day) + 2, gridRow: `1 / ${totalRows + 1}` }}
              />
            ))}
            {/* Today indicator line */}
            {todayDay !== null && days.includes(todayDay) && (
              <div
                className="w-0.5 bg-[#4fd98a] justify-self-center"
                style={{ gridColumnStart: dayIndex(todayDay) + 2, gridRow: `1 / ${totalRows + 1}` }}
              />
            )}

            {gridRows.map((gridRow, rowIndex) => {
              const r = rowIndex + 1;

              if (gridRow.kind === "weeks") {
                return (
                  <div key="weeks" className="contents">
                    {weeks.map((week, i) => (
                      <div
                        key={week.label}
                        className="relative border-l border-black/20 pl-2 text-sm pb-1"
                        style={{
                          gridRow: r,
                          gridColumn: `span ${week.span}`,
                          gridColumnStart: i === 0 ? 2 : undefined,
                        }}
                      >
                        <div className="font-bold">{week.label}</div>
                        <div className="text-black/60">{week.range}</div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (gridRow.kind === "days") {
                return (
                  <div key="days" className="contents">
                    {days.map((day) => (
                      <div
                        key={day}
                        className={`relative flex items-center justify-center text-xs pb-2 border-b border-black/20 ${
                          day === offDay ? "text-black/30" : "text-black/70"
                        }`}
                        style={{ gridRow: r, gridColumn: dayIndex(day) + 2 }}
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
                    <div style={{ gridRow: r, gridColumn: 1 }} className="border-b border-black/20" />
                  </div>
                );
              }

              if (gridRow.kind === "heading") {
                return (
                  <h2
                    key={`heading-${gridRow.text}`}
                    className="font-bold pt-6"
                    style={{ gridRow: r, gridColumn: 1 }}
                  >
                    {gridRow.text} <span className="font-normal text-black/60">({gridRow.date})</span>
                  </h2>
                );
              }

              const { row } = gridRow;
              const hasBar = row.barFrom !== undefined && row.barTo !== undefined;

              return (
                <div key={row.label} className="contents">
                  <div className="text-sm text-black/70 pr-4 py-1.5" style={{ gridRow: r, gridColumn: 1 }}>
                    {row.label}
                  </div>
                  {hasBar && (
                    <div
                      className="relative flex items-center"
                      style={{
                        gridRow: r,
                        gridColumnStart: dayIndex(row.barFrom!) + 2,
                        gridColumnEnd: dayIndex(row.barTo!) + 3,
                      }}
                    >
                      <div
                        className={`h-2 rounded-full w-full ${
                          row.color === "green" ? "bg-[#9fe6c0]" : "bg-black/10"
                        }`}
                      />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black" />
                    </div>
                  )}
                </div>
              );
            })}
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
