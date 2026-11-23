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
      <div className="flex flex-col gap-20 py-20">
        <div className="flex flex-col gap-4">
          <JumboTitle>{title}</JumboTitle>
          {body && (
            <div className="w-full md:w-[480px]">
              <BodyText>{body}</BodyText>
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
}

/**
 * One Content-2 row: a numbered/titled Left column (compose with
 * JumboTitle+Subtitle36 for the number+title, FocusText, and
 * ContentBorderedItem+BodyText from ./Typography) beside a Right image.
 * Every row except the first in a Content2 group carries its own top
 * divider (border-t pt-20) — pass `first` on the one right after Intro,
 * which relies solely on Content2's own gap for spacing.
 * Pass `media` instead of `image` for a custom Right column (stacked or
 * layered images, placeholders).
 */
export function Content2Item({
  children,
  image,
  media,
  first = false,
}: {
  children: ReactNode;
  image?: { src: string; alt: string };
  media?: ReactNode;
  first?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-10 md:flex-row md:gap-20 ${first ? "" : "border-t border-[#6e6e73] pt-10 md:pt-20"}`}
    >
      <div className="flex flex-1 flex-col gap-6">{children}</div>
      <div className="flex flex-1 items-start">
        {media ??
          (image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image.src} alt={image.alt} className="w-full h-auto max-h-[800px] object-contain" />
          ))}
      </div>
    </div>
  );
}
