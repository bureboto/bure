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

  const bio =
    "Artista multidisciplinario que comenzó a sus 15 años explorando el graffiti.";

  return (
    <div className="px-5 flex-1">
      <div className="max-w-[1440px] mx-auto py-6">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-xs text-black/60 mb-2">
              <span>{piece.year}</span>
              <span>{piece.place}</span>
              {piece.ft && <span>ft. {piece.ft}</span>}
            </div>
            <p className="text-2xl">
              {piece.place}
              {piece.year ? `, ${piece.year}` : ""}
            </p>
          </div>
          <p className="max-w-sm text-sm text-black/60">{bio}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div
            className="w-full bg-black"
            style={{ aspectRatio: `1 / ${piece.ratio}` }}
          />
          <div className="w-full bg-black" style={{ aspectRatio: "1 / 0.51" }} />
        </div>
      </div>
    </div>
  );
}
