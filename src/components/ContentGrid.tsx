import type { ReactNode } from "react";

/**
 * Shared content grid for design.bure.art interiors: on desktop the page is
 * an 8-column grid, with content occupying the center 6 columns (1-column
 * gutter on each side). On mobile it's a single column with fixed side
 * padding. Does not apply to the header — only the content area of each page.
 */
export default function ContentGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="w-full px-6 lg:px-0 lg:grid lg:grid-cols-8 lg:gap-x-6">
      <div className={`lg:col-start-2 lg:col-span-6 ${className}`}>{children}</div>
    </div>
  );
}
