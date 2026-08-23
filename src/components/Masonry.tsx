"use client";

import { useEffect, useRef, useState } from "react";
import type { Piece } from "@/lib/pieces";
import PieceCard from "@/components/PieceCard";

const GAP = 24;

function columnCountForWidth(width: number) {
  if (width <= 520) return 1;
  if (width <= 760) return 2;
  if (width <= 1100) return 3;
  return 4;
}

type Placed = { piece: Piece; x: number; y: number; width: number; height: number };

// Layout tipo Pinterest con soporte de piezas que ocupan 2 columnas.
// Recorre las piezas en orden y les va asignando columnas con un cursor
// secuencial (izquierda a derecha, salta de fila al llegar al final) —
// así el orden de lectura se mantiene en Z aun con anchos variables.
function layout(pieces: Piece[], cols: number, containerWidth: number): { placed: Placed[]; height: number } {
  if (containerWidth <= 0 || cols <= 0) return { placed: [], height: 0 };

  const colWidth = (containerWidth - GAP * (cols - 1)) / cols;
  const colHeights = new Array(cols).fill(0);
  let cursor = 0;
  const placed: Placed[] = [];

  for (const piece of pieces) {
    const span = Math.min(piece.span ?? 1, cols);
    if (cursor + span > cols) cursor = 0;

    const targetCols = Array.from({ length: span }, (_, i) => cursor + i);
    const width = colWidth * span + GAP * (span - 1);
    const y = Math.max(...targetCols.map((c) => colHeights[c]));
    const height = width * piece.ratio;

    placed.push({ piece, x: targetCols[0] * (colWidth + GAP), y, width, height });

    const newBottom = y + height + GAP;
    for (const c of targetCols) colHeights[c] = newBottom;

    cursor = (cursor + span) % cols;
  }

  return { placed, height: Math.max(...colHeights) - GAP };
}

export default function Masonry({ pieces }: { pieces: Piece[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setContainerWidth(el.clientWidth);
      setCols(columnCountForWidth(window.innerWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { placed, height } = layout(pieces, cols, containerWidth);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      {placed.map(({ piece, x, y, width }) => (
        <div key={piece.id} className="absolute" style={{ left: x, top: y, width }}>
          <PieceCard piece={piece} />
        </div>
      ))}
    </div>
  );
}
