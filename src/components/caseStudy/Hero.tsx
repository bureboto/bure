import type { ReactNode } from "react";

/** Client/Service/Year/Industry row. Tokens: Body/xs (11px) label in Secondary, Body/sm (16px) value in Primary, gap XL (40px→gap-8 on this scale). */
export function HeroMeta({ items }: { items: { label: ReactNode; value: ReactNode }[] }) {
  return (
    <div className="flex flex-wrap gap-8">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col">
          <p className="text-[11px] text-[#6e6e73]">{item.label}</p>
          <p className="text-[16px] tracking-[0.15px] text-[#1d1d1d]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

/** Groups title + lead + body paragraph. Token: gap S (16px), padding-bottom S (16px). */
export function HeroIntro({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4 pb-4">{children}</div>;
}

/** H1 title. Token: H/1 (48px bold, Primary). */
export function HeroTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-[48px] leading-[0.9] font-bold text-[#1d1d1d]">{children}</h1>;
}

/** Lead/focus paragraph below the title. Token: Body/lg (21px, Secondary). */
export function HeroLead({ children }: { children: ReactNode }) {
  return <p className="text-[21px] text-[#6e6e73]">{children}</p>;
}

/** Labeled block (e.g. "My rol", "Team", "Impact"). Token: H/5 (18px bold, Primary) label, gap XS (8px) to content. */
export function HeroDetail({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div>
      <p className="text-[18px] font-bold text-[#1d1d1d] mb-2">{label}</p>
      {children}
    </div>
  );
}

/** Stat row (e.g. "+171,000 Users"). Tokens: Body/lg (21px, Primary) value, Body/sm (16px, Secondary) label, gap XL (40px), padding XS (8px) top / S (16px) bottom. */
export function HeroStats({ stats }: { stats: { value: ReactNode; label: ReactNode }[] }) {
  return (
    <div className="flex flex-wrap gap-10 pt-2 pb-6">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-1">
          <p className="text-[21px] text-[#1d1d1d]">{stat.value}</p>
          <p className="text-[16px] tracking-[0.15px] text-[#6e6e73]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
