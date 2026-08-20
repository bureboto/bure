import Link from "next/link";
import type { Piece } from "@/lib/pieces";

export default function PieceCard({
  piece,
  showYear = true,
}: {
  piece: Piece;
  showYear?: boolean;
}) {
  return (
    <div className="break-inside-avoid mb-6">
      <div
        className="w-full bg-black"
        style={{ aspectRatio: `1 / ${piece.ratio}` }}
      />
      <div className="flex items-center justify-between mt-2 text-xs text-black/60">
        <div className="flex items-center gap-3">
          {showYear && <span>{piece.year}</span>}
          <span>{piece.place}</span>
          {piece.ft && <span>ft. {piece.ft}</span>}
        </div>
        <Link href={`/archive/${piece.id}`} className="hover:opacity-60 transition-opacity">
          More →
        </Link>
      </div>
    </div>
  );
}
