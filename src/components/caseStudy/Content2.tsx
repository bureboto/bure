import Image from "next/image";
import type { ReactNode } from "react";
import { JumboTitle, BodyText, SectionDivider } from "./Typography";

/** Content-2: a jumbo Intro (title + body, with trailing empty space to its right) over one or more Content2Item rows. */
export default function Content2({
  title,
  body,
  children,
}: {
  title: ReactNode;
  body?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <SectionDivider />
      <div className="flex flex-col gap-10 py-20">
        <div className="flex items-start gap-20">
          <div className="flex w-[480px] flex-col gap-4 pr-20">
            <JumboTitle>{title}</JumboTitle>
            {body && <BodyText>{body}</BodyText>}
          </div>
          <div className="flex-1" />
        </div>
        {children}
      </div>
    </>
  );
}

/**
 * One Content-2 row: a numbered/titled Left column (compose with
 * JumboTitle+Subtitle36 for the number+title, Subtitle18+FocusText,
 * and ContentBorderedItem+Subtitle18+BodyText from ./Typography) beside
 * a Right image. Each row carries its own top divider (border-t pt-10),
 * so stacking rows under Content2 produces one divider per row.
 */
export function Content2Item({ children, image }: { children: ReactNode; image: { src: string; alt: string } }) {
  return (
    <div className="flex items-start gap-20 border-t border-[#6e6e73] pt-10">
      <div className="flex flex-1 flex-col gap-6">{children}</div>
      <div className="relative flex-1 self-stretch">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
    </div>
  );
}
