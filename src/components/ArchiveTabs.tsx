"use client";

import { useEffect, useState } from "react";
import { pieces, piecesByYearDesc } from "@/lib/pieces";
import Masonry from "@/components/Masonry";

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
  const grouped = piecesByYearDesc();

  return (
    <div className="px-5 flex-1">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6 py-6 text-sm">
          <button
            onClick={() => setMode("random")}
            className={mode === "random" ? "font-medium underline underline-offset-4" : "text-black/50 hover:text-black transition-colors"}
          >
            Random
          </button>
          <button
            onClick={() => setMode("order")}
            className={mode === "order" ? "font-medium underline underline-offset-4" : "text-black/50 hover:text-black transition-colors"}
          >
            Order
          </button>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[28px] pb-12 box-border">
        {mode === "random" ? (
          <Masonry pieces={randomPieces} respectSpan={false} />
        ) : (
          <div className="flex flex-col gap-12">
            {grouped.map(({ year, items }) => (
              <div key={year}>
                <h2 className="text-2xl font-medium mb-4 max-w-[1440px] mx-auto">{year}</h2>
                <Masonry pieces={items} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
