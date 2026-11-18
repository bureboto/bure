import type { ReactNode } from "react";
import { JumboTitle, Subtitle24, SectionDivider } from "./Typography";

export type Content4Item = { subtitle: ReactNode; body: ReactNode };

/** Content-4: jumbo title over a grid of bordered subtitle+body items, 3 per row. */
export default function Content4({ title, items }: { title: ReactNode; items: Content4Item[] }) {
  const rows: Content4Item[][] = [];
  for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));

  return (
    <>
      <SectionDivider />
      <div className="flex flex-col gap-10 py-20">
        <JumboTitle>{title}</JumboTitle>
        {rows.map((row, r) => (
          <div key={r} className="flex flex-col items-start gap-10 md:flex-row">
            {row.map((item, i) => (
              <div key={i} className="flex-1 border-l border-[#6e6e73] pl-4">
                <Subtitle24>{item.subtitle}</Subtitle24>
                <div className="text-[16px] tracking-[0.16px] text-[#6e6e73]">{item.body}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
