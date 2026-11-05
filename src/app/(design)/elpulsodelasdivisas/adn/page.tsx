"use client";

import { useEffect, useRef, useState } from "react";
import ContentGrid from "@/components/ContentGrid";

type Field = { label: string };

type Section = {
  title: string;
  subtitle: string;
  fields: Field[];
};

const sections: Section[] = [
  {
    title: "Qué ofrecemos",
    subtitle: "De dónde venimos y en qué creemos.",
    fields: [
      { label: "Historia de la marca" },
      { label: "¿Por qué existe?" },
      { label: "¿Qué idea defiende?" },
      { label: "Nuestras creencias contrarias" },
    ],
  },
  {
    title: "A quién le hablamos",
    subtitle: "La persona del otro lado.",
    fields: [
      { label: "¿A quién le hablamos?" },
      { label: "¿Qué necesita de nosotros que no encuentra en otro lado?" },
      { label: "¿Cuándo y cómo nos consume?" },
    ],
  },
  {
    title: "Nuestro carácter",
    subtitle: "Cómo somos y cómo sonamos.",
    fields: [
      { label: "Nuestros valores" },
      { label: "Nuestra personalidad" },
      { label: "Si El Pulso fuera una persona, ¿cómo hablaría?" },
    ],
  },
  {
    title: "Nuestro lugar en el mercado",
    subtitle: "Lo que nos distingue, para bien y para mal.",
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
    subtitle: "La propuesta y el rumbo.",
    fields: [
      { label: "¿Qué ofrecemos?" },
      { label: "¿Qué prometemos?" },
      { label: "¿Cuál es nuestro vehículo?" },
      { label: "¿Dónde queremos estar en 3 años?" },
    ],
  },
];

const summaryHighlight = { label: "El Pulso", section: "Lo que ofrecemos y hacia dónde vamos", field: "¿Qué ofrecemos?" };

const summaryInsights = [
  { label: "Valores", section: "Nuestro carácter", field: "Nuestros valores" },
  { label: "Publico", section: "A quién le hablamos", field: "¿A quién le hablamos?" },
  { label: "Personalidad", section: "Nuestro carácter", field: "Nuestra personalidad" },
  { label: "Voz", section: "Nuestro carácter", field: "Si El Pulso fuera una persona, ¿cómo hablaría?" },
  { label: "Diferencial", section: "Nuestro lugar en el mercado", field: "¿Qué decimos que otras marcas no?" },
  { label: "Promesa", section: "Lo que ofrecemos y hacia dónde vamos", field: "¿Qué prometemos?" },
];

const SUMMARY_WORD_LIMIT = 16;

const STORAGE_KEY = "elpulso-adn-respuestas";

function fieldId(sectionTitle: string, label: string) {
  return `${sectionTitle}::${label}`;
}

function summarize(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= SUMMARY_WORD_LIMIT) return text;
  return `${words.slice(0, SUMMARY_WORD_LIMIT).join(" ")}…`;
}

function AnswerBox({ id, value, onChange }: { id: string; value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Escribe tu respuesta..."
      rows={2}
      className="border border-[#dcdcdc] rounded h-14 w-full p-2 text-sm text-black resize-y focus:outline-none focus:border-black transition-colors placeholder:text-black/30"
      data-field-id={id}
    />
  );
}

export default function AdnDeMarca() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const saveTimeout = useRef<number | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAnswers(JSON.parse(stored));
      }
    } catch {
      // ignore unreadable/corrupt storage
    }

    fetch("/api/elpulso-adn")
      .then((res) => res.json())
      .then((data: { answers?: Record<string, string> }) => {
        if (data.answers && Object.keys(data.answers).length > 0) {
          setAnswers(data.answers);
        }
      })
      .catch(() => {
        // ignore network errors, localStorage already loaded above
      });
  }, []);

  const saveToServer = (next: Record<string, string>) => {
    if (saveTimeout.current) {
      window.clearTimeout(saveTimeout.current);
    }
    saveTimeout.current = window.setTimeout(() => {
      fetch("/api/elpulso-adn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      })
        .then(() => {
          setSaved(true);
          window.setTimeout(() => setSaved(false), 1500);
        })
        .catch(() => {
          // ignore network errors; localStorage still has the latest value
        });
    }, 1000);
  };

  const update = (id: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage write failures (private mode, quota, etc.)
      }
      saveToServer(next);
      return next;
    });
  };

  return (
    <ContentGrid className="pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex items-baseline gap-[10px] flex-wrap">
          <h1 className="text-[48px] font-bold leading-none">El Pulso</h1>
          <span className="text-[32px] text-black/80">/</span>
          <span className="text-[32px] text-black/80">ADN de marca</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-[15px] font-light text-black">
        <div>
          <p>
            Este documento es el ADN de El Pulso: lo que somos, lo que defendemos y lo que nos hace únicos
            e irrepetibles.
          </p>
          <p className="mt-4">
            Todo lo que construyamos a partir de aquí, desde el logo y los colores hasta cada miniatura y
            la manera en que hablamos en cada episodio, va a nacer de estas respuestas. Por eso vale la
            pena contestarlas con calma y con honestidad, sin pensar en cómo suenan, sino en qué tan
            ciertas son.
          </p>
        </div>
        <p>
          Este no es un formulario para llenar y olvidar. Es el punto al que siempre podremos regresar:
          cuando tengamos que tomar una decisión, cuando surja una idea nueva o cuando sintamos que
          perdimos el rumbo. Si algo no coincide con lo que está escrito aquí, no es El Pulso.
        </p>
      </div>

      <p className="text-xs text-black/40 -mt-8">
        Tus respuestas se guardan automáticamente.
        <span className={`ml-2 transition-opacity ${saved ? "opacity-100" : "opacity-0"}`}>Guardado ✓</span>
      </p>

      {/* En resumen */}
      <div className="flex flex-col gap-4 text-black">
        <h2 className="text-[24px] font-bold">En resumen</h2>
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
          <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-black/20 pb-4 md:pb-0 md:pr-4">
            <p className="text-[16px] font-bold">{summaryHighlight.label}</p>
            <p className="text-[21px] font-light">
              {(() => {
                const value = answers[fieldId(summaryHighlight.section, summaryHighlight.field)];
                return value ? summarize(value) : "...";
              })()}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {summaryInsights.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <p className="text-[16px] font-bold">{item.label}</p>
                <p className="text-[15px] font-light whitespace-pre-line">
                  {(() => {
                    const value = answers[fieldId(item.section, item.field)];
                    return value ? summarize(value) : "...";
                  })()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-black/20" />

      {sections.map((section, i) => (
        <div key={section.title} className="flex flex-col gap-10">
          {i > 0 && <hr className="border-black/10" />}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-4 md:w-56 shrink-0 text-black">
              <p className="text-[24px] font-bold">{section.title}</p>
              <p className="text-[18px]">{section.subtitle}</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {section.fields.map((field) => {
                const id = fieldId(section.title, field.label);
                return (
                  <div key={field.label} className="flex flex-col gap-2">
                    <p className="text-[16px] font-bold text-black">{field.label}</p>
                    <AnswerBox id={id} value={answers[id] ?? ""} onChange={(v) => update(id, v)} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </ContentGrid>
  );
}
