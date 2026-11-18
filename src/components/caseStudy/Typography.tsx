import type { ReactNode } from "react";

/** Shared text-scale primitives for case-study content sections (Content-1 through Content-5, Images). */

export function JumboTitle({ children }: { children: ReactNode }) {
  return <p className="text-[80px] font-light text-[#1d1d1d]">{children}</p>;
}

export function Subtitle36({ children }: { children: ReactNode }) {
  return <p className="text-[36px] font-bold text-[#1d1d1d]">{children}</p>;
}

export function Subtitle24({ children }: { children: ReactNode }) {
  return <p className="text-[24px] font-bold text-[#1d1d1d]">{children}</p>;
}

export function Subtitle18({ children }: { children: ReactNode }) {
  return <p className="text-[18px] font-bold text-[#1d1d1d]">{children}</p>;
}

export function FocusText({ children }: { children: ReactNode }) {
  return <p className="text-[28px] text-[#6e6e73]">{children}</p>;
}

/** Body/lg (21px) — used for a shorter lead line in a couple of Content-1 items, distinct from the 28px Focus scale. */
export function LeadText({ children }: { children: ReactNode }) {
  return <p className="text-[21px] text-[#6e6e73]">{children}</p>;
}

export function BodyText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[16px] tracking-[0.16px] text-[#6e6e73] ${className}`}>{children}</p>;
}

export function DetailText({ children }: { children: ReactNode }) {
  return <p className="text-[11px] text-[#6e6e73]">{children}</p>;
}

export function MiniTitle({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-bold text-[#6e6e73]">{children}</p>;
}

export function LinkText({ children }: { children: ReactNode }) {
  return <p className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2">{children}</p>;
}

/** Bordered stacked item used in Content-1, Content-2, and Content-4 (border-l black, 16px left padding). */
export function ContentBorderedItem({ children }: { children: ReactNode }) {
  return <div className="border-l border-black pl-4">{children}</div>;
}

/** Full-bleed divider — breaks out of ContentGrid's centered column to span the full viewport width, matching Figma's edge-to-edge section borders. */
export function SectionDivider() {
  return <hr className="w-screen ml-[calc(50%-50vw)] border-black/20" />;
}
