import Image from "next/image";
import { notFound } from "next/navigation";
import { getPiece, pieces } from "@/lib/pieces";

export function generateStaticParams() {
  return pieces.map((p) => ({ id: p.id }));
}

export default async function ArchiveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const piece = getPiece(id);
  if (!piece) notFound();

  return (
    <div className="px-5 flex-1">
      <div className="max-w-[1440px] mx-auto py-6">
        <div className="mb-8">
          <div className="text-xs text-black/60">{piece.dateLabel}</div>
        </div>

        <div
          className="relative w-full max-w-2xl bg-black overflow-hidden"
          style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
        >
          {piece.video ? (
            <video
              src={piece.file}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload noplaybackrate nofullscreen"
            />
          ) : (
            <Image
              src={piece.file}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
