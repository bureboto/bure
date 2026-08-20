"use client";

import { useEffect, useMemo, useState } from "react";
import { pieces, piecesByYearDesc } from "@/lib/pieces";
import PieceCard from "@/components/PieceCard";

type Mode = "random" | "order";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ArchiveTabs() {
  const [mode, setMode] = useState<Mode>("random");
  // orden estable en el server; se re-mezcla en el cliente tras montar
  // para evitar mismatches de hidratación, y de nuevo en cada recarga.
  const [randomPieces, setRandomPieces] = useState(pieces);
  useEffect(() => {
    setRandomPieces(shuffle(pieces));
  }, []);
  const grouped = useMemo(() => piecesByYearDesc(), []);

  return (
    <div className="px-5 flex-1">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6 py-6 text-sm">
          <button
            onClick={() => setMode("random")}
            className={mode === "random" ? "font-medium" : "text-black/50 hover:text-black transition-colors"}
          >
            Random
          </button>
          <button
            onClick={() => setMode("order")}
            className={mode === "order" ? "font-medium" : "text-black/50 hover:text-black transition-colors"}
          >
            Order
          </button>
        </div>

        {mode === "random" ? (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
            {randomPieces.map((p) => (
              <PieceCard key={p.id} piece={p} showYear={false} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-12 pb-12">
            {grouped.map(({ year, items }) => (
              <div key={year}>
                <h2 className="text-2xl font-medium mb-4">{year}</h2>
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
                  {items.map((p) => (
                    <PieceCard key={p.id} piece={p} showYear={true} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
