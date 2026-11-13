import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Case-study breadcrumb: "← Client / Project name".
 * Tokens from Figma: gap XS (8px), padding XXXL (120px, applied by the
 * page via ContentGrid, not here), text Body/XL (28px) for the back
 * link, Body/lg (21px) for the project name, colors Secondary (#6e6e73)
 * for the back link + separator, Primary (#1d1d1d) for the project name.
 */
export default function Breadcrumb({ client, project }: { client: ReactNode; project: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Link href="/home" className="text-[28px] text-[#6e6e73] hover:opacity-70 transition-opacity w-fit">
        ← {client}
      </Link>
      <p className="text-[21px] text-[#6e6e73]">
        / <span className="text-[#1d1d1d]">{project}</span>
      </p>
    </div>
  );
}
