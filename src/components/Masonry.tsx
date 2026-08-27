"use client";

import { useEffect, useRef, useState } from "react";
import type { Piece } from "@/lib/pieces";
import PieceCard from "@/components/PieceCard";

const GAP = 24;

// Estimación de la altura del bloque de texto (fecha + caption + padding)
// bajo la imagen, para que el masonry no encime las filas. No es exacta
// (no medimos el DOM real), pero es suficiente para texto de una o pocas
// líneas a este tamaño de letra (text-xs, ~12px).
const DATE_LINE_HEIGHT = 16;
const CAPTION_LINE_HEIGHT = 16;
const TEXT_TOP_MARGIN = 8; // mt-2
const CAPTION_TOP_MARGIN = 4; // mt-1
const BOTTOM_PADDING = 32; // pb-8 (2rem)
const AVG_CHAR_WIDTH = 5.7; // ancho promedio de un caracter en text-xs

function textBlockHeight(piece: Piece, width: number) {
  let height = TEXT_TOP_MARGIN + DATE_LINE_HEIGHT;
  if (piece.caption) {
    const charsPerLine = Math.max(1, Math.floor(width / AVG_CHAR_WIDTH));
    const lines = Math.max(1, Math.ceil(piece.caption.length / charsPerLine));
    height += CAPTION_TOP_MARGIN + lines * CAPTION_LINE_HEIGHT;
  }
  return height + BOTTOM_PADDING;
}

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
function layout(
  pieces: Piece[],
  cols: number,
  containerWidth: number,
  respectSpan: boolean
): { placed: Placed[]; height: number } {
  if (containerWidth <= 0 || cols <= 0) return { placed: [], height: 0 };

  const colWidth = (containerWidth - GAP * (cols - 1)) / cols;
  const colHeights = new Array(cols).fill(0);
  let cursor = 0;
  const placed: Placed[] = [];

  for (const piece of pieces) {
    const span = respectSpan ? Math.min(piece.span ?? 1, cols) : 1;
    if (cursor + span > cols) cursor = 0;

    const targetCols = Array.from({ length: span }, (_, i) => cursor + i);
    const width = colWidth * span + GAP * (span - 1);
    const y = Math.max(...targetCols.map((c) => colHeights[c]));
    const height = width * piece.ratio + textBlockHeight(piece, width);

    placed.push({ piece, x: targetCols[0] * (colWidth + GAP), y, width, height });

    const newBottom = y + height + GAP;
    for (const c of targetCols) colHeights[c] = newBottom;

    cursor = (cursor + span) % cols;
  }

  return { placed, height: Math.max(...colHeights) - GAP };
}

export default function Masonry({
  pieces,
  respectSpan = true,
}: {
  pieces: Piece[];
  respectSpan?: boolean;
}) {
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

  const { placed, height } = layout(pieces, cols, containerWidth, respectSpan);

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
