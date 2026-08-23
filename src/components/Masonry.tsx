"use client";

import { useEffect, useState } from "react";
import type { Piece } from "@/lib/pieces";
import PieceCard from "@/components/PieceCard";

function columnCountForWidth(width: number) {
  if (width <= 520) return 1;
  if (width <= 760) return 2;
  if (width <= 1100) return 3;
  return 4;
}

function useColumnCount() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => setCols(columnCountForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

// Reparte las piezas en columnas round-robin (col0, col1, col2, ..., col0, ...)
// así el orden de lectura queda en Z (izquierda a derecha, luego la siguiente
// fila), pero cada columna se apila sin huecos, como el feed de Pinterest.
export default function Masonry({ pieces }: { pieces: Piece[] }) {
  const cols = useColumnCount();
  const buckets: Piece[][] = Array.from({ length: cols }, () => []);
  pieces.forEach((p, i) => buckets[i % cols].push(p));

  return (
    <div className="flex gap-6 items-start">
      {buckets.map((bucket, i) => (
        <div key={i} className="flex flex-col gap-6 flex-1 min-w-0">
          {bucket.map((p) => (
            <PieceCard key={p.id} piece={p} />
          ))}
        </div>
      ))}
    </div>
  );
}
