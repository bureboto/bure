import Image from "next/image";
import type { ReactNode } from "react";
import { JumboTitle, Subtitle24, BodyText, SectionDivider } from "./Typography";

export type Content3Column = {
  subtitle?: ReactNode;
  body?: ReactNode;
  image: { src: string; alt: string };
};

/** Content-3: jumbo title over N (typically 2) subtitle+body+image columns. */
export default function Content3({ title, columns }: { title: ReactNode; columns: Content3Column[] }) {
  return (
    <>
      <SectionDivider />
      <div className="flex flex-col gap-20 py-10">
        <JumboTitle>{title}</JumboTitle>
        <div className="flex flex-col gap-10 md:flex-row">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-1 flex-col gap-8">
              {(col.subtitle || col.body) && (
                <div className="flex flex-col gap-2">
                  {col.subtitle && <Subtitle24>{col.subtitle}</Subtitle24>}
                  {col.body && <BodyText>{col.body}</BodyText>}
                </div>
              )}
              <div className="relative h-[360px] w-full">
                <Image src={col.image.src} alt={col.image.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
