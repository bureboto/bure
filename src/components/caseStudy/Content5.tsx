import Image from "next/image";
import type { ReactNode } from "react";
import { JumboTitle, FocusText, BodyText, Subtitle18, MiniTitle, LinkText, SectionDivider } from "./Typography";

export type Content5Link = { label: ReactNode; href: string; text: ReactNode };

/**
 * Content-5: a jumbo title/focus/body intro plus an optional labeled row
 * of mini-title+link items, beside a tall image. Omit `linksLabel`/`links`
 * entirely when a project has no links row (Figma hides that block).
 */
export default function Content5({
  title,
  focus,
  body,
  linksLabel,
  links,
  image,
}: {
  title: ReactNode;
  focus?: ReactNode;
  body?: ReactNode;
  linksLabel?: ReactNode;
  links?: Content5Link[];
  image: { src: string; alt: string };
}) {
  return (
    <>
      <SectionDivider />
      <div className="flex items-start gap-10 py-10">
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-2">
            <JumboTitle>{title}</JumboTitle>
            {focus && <FocusText>{focus}</FocusText>}
            {body && <BodyText>{body}</BodyText>}
          </div>
          {links && links.length > 0 && (
            <div className="flex flex-col gap-4">
              {linksLabel && <Subtitle18>{linksLabel}</Subtitle18>}
              <div className="flex items-start justify-between">
                {links.map((link, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <MiniTitle>{link.label}</MiniTitle>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <LinkText>{link.text}</LinkText>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative flex-1 self-stretch">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      </div>
    </>
  );
}
