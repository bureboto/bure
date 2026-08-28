import Image from "next/image";
import type { Piece } from "@/lib/pieces";

export default function PieceCard({ piece }: { piece: Piece }) {
  const isColor = piece.year === 2026;
  const isGif = piece.file.toLowerCase().endsWith(".gif");
  const mediaClassName = isColor
    ? "absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-95"
    : "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500";

  // Las piezas aún no son clickeables: la página de detalle por ahora
  // permanece oculta.
  return (
    <div className="block group">
      <div
        className="relative w-full bg-black overflow-hidden"
        style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
      >
        {piece.video ? (
          <video
            src={piece.file}
            className={mediaClassName}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen"
          />
        ) : isGif ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={piece.file} alt="" className={mediaClassName} />
        ) : (
          <Image
            src={piece.file}
            alt=""
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
            className={mediaClassName}
          />
        )}
      </div>
      <div className="mt-2 pb-8">
        <div className="text-xs text-black/60">{piece.dateLabel}</div>
        {piece.caption && (
          <div className="text-xs text-black/60 mt-1">{piece.caption}</div>
        )}
      </div>
    </div>
  );
}
