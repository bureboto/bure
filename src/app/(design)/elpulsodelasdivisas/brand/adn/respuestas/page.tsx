"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ContentGrid from "@/components/ContentGrid";

type Field = { label: string };

type Section = {
  title: string;
  fields: Field[];
};

const sections: Section[] = [
  {
    title: "Qué ofrecemos",
    fields: [
      { label: "Historia de la marca" },
      { label: "¿Por qué existe?" },
      { label: "¿Qué idea defiende?" },
      { label: "Nuestras creencias contrarias" },
    ],
  },
  {
    title: "A quién le hablamos",
    fields: [
      { label: "¿A quién le hablamos?" },
      { label: "¿Qué necesita de nosotros que no encuentra en otro lado?" },
      { label: "¿Cuándo y cómo nos consume?" },
    ],
  },
  {
    title: "Nuestro carácter",
    fields: [
      { label: "Nuestros valores" },
      { label: "Nuestra personalidad" },
      { label: "Si El Pulso fuera una persona, ¿cómo hablaría?" },
    ],
  },
  {
    title: "Nuestro lugar en el mercado",
    fields: [
      { label: "¿Con quién competimos por su atención?" },
      { label: "¿Qué decimos que otras marcas no?" },
      { label: "Nuestras debilidades" },
      { label: "¿Cómo NO queremos que nos perciban?" },
      { label: "Marcas que admiramos (aunque no sean financieras) y por qué" },
    ],
  },
  {
    title: "Lo que ofrecemos y hacia dónde vamos",
    fields: [
      { label: "¿Qué ofrecemos?" },
      { label: "¿Qué prometemos?" },
      { label: "¿Cuál es nuestro vehículo?" },
      { label: "¿Dónde queremos estar en 3 años?" },
    ],
  },
];

function fieldId(sectionTitle: string, label: string) {
  return `${sectionTitle}::${label}`;
}

export default function AdnRespuestas() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch("/api/elpulso-adn", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { answers?: Record<string, string>; updatedAt?: string | null }) => {
        setAnswers(data.answers ?? {});
        setUpdatedAt(data.updatedAt ?? null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ContentGrid className="pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 pt-6">
        <Link
          href="/elpulsodelasdivisas/brand/adn"
          className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
        >
          ← Volver al formulario
        </Link>
        <div className="flex items-baseline gap-[10px] flex-wrap">
          <h1 className="text-[48px] font-bold leading-none">El Pulso</h1>
          <span className="text-[32px] text-black/80">/</span>
          <span className="text-[32px] text-black/80">Respuestas (privado)</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-black/50">
          <span>
            {updatedAt
              ? `Última actualización: ${new Date(updatedAt).toLocaleString("es-MX")}`
              : "Aún no hay respuestas guardadas."}
          </span>
          <button
            onClick={load}
            className="underline underline-offset-4 hover:text-black transition-colors"
          >
            Actualizar
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-black/50">Cargando...</p>
      ) : (
        sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold text-black">{section.title}</h2>
            <div className="flex flex-col gap-4">
              {section.fields.map((field) => {
                const id = fieldId(section.title, field.label);
                const value = answers[id];
                return (
                  <div key={field.label} className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold text-black">{field.label}</p>
                    <p
                      className={`text-[15px] whitespace-pre-line ${
                        value ? "text-black/80 font-light" : "text-black/30 italic"
                      }`}
                    >
                      {value || "(sin respuesta)"}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr className="border-black/10" />
          </div>
        ))
      )}
    </ContentGrid>
  );
}
