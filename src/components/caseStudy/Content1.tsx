import type { ReactNode } from "react";
import { JumboTitle, Subtitle36, SectionDivider } from "./Typography";

/**
 * Content-1: jumbo title on the left, an optional Subtitle36 lead-in plus
 * freeform stacked content on the right (compose items with
 * ContentBorderedItem/Subtitle24/FocusText/BodyText from ./Typography).
 */
export default function Content1({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <SectionDivider />
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex-1">
          <JumboTitle>{title}</JumboTitle>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          {subtitle && <Subtitle36>{subtitle}</Subtitle36>}
          {children}
        </div>
      </div>
    </>
  );
}
