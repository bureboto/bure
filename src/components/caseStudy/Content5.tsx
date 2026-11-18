import type { ReactNode } from "react";
import { JumboTitle, FocusText, BodyText, Subtitle18, MiniTitle, LinkText, SectionDivider } from "./Typography";

export type Content5Link = { label: ReactNode; href: string; text: ReactNode };
export type Content5Image = { src: string; alt: string };

/**
 * Content-5: a jumbo title/focus/body intro plus an optional labeled row
 * of mini-title+link items, beside one or more images. Omit
 * `linksLabel`/`links` entirely when a project has no links row (Figma
 * hides that block). Pass a single image to fill the full column height
 * (e.g. Research), or two+ to stack them at a fixed 360px each with a
 * 24px gap (e.g. Explorations).
 */
export default function Content5({
  title,
  focus,
  body,
  linksLabel,
  links,
  images,
}: {
  title: ReactNode;
  focus?: ReactNode;
  body?: ReactNode;
  linksLabel?: ReactNode;
  links?: Content5Link[];
  images: Content5Image[];
}) {
  return (
    <>
      <SectionDivider />
      <div className="flex items-start gap-10 pt-16">
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
        {images.length === 1 ? (
          <div className="flex flex-1 items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-auto max-h-[800px] object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-6">
            {images.map((image, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[800px] object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
