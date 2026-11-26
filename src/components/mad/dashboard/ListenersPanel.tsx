"use client";

import { useState } from "react";
import type { ListenerRange, ListenerStats } from "@/lib/mad/dashboard-demo";
import VerticalLabel from "./VerticalLabel";

const RANGES: { id: ListenerRange; label: string }[] = [
  { id: "all", label: "All" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "year", label: "Year" },
];

const fmt = (n: number) => n.toLocaleString("en-US");

// Listeners section (Figma 392:2658 / 397:3523): range tabs, period, total and
// per-platform numbers. 3-column grid when there's room (≥32rem, as on the
// desktop Figma); otherwise total on top + 2 columns, as on mobile.
export default function ListenersPanel({ stats }: { stats: Record<ListenerRange, ListenerStats> }) {
  const [range, setRange] = useState<ListenerRange>("all");
  const s = stats[range];

  return (
    <section className="flex flex-1 items-start gap-2 border-t border-[#737373] py-4 pl-6">
      <VerticalLabel className="h-[88px]">Listeners</VerticalLabel>
      <div className="@container flex min-w-0 flex-1 flex-col gap-2 self-stretch">
        <div className="flex gap-2 pr-6" role="tablist" aria-label="Periodo">
          {RANGES.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={range === r.id}
              onClick={() => setRange(r.id)}
              className={`flex min-w-0 flex-1 items-center justify-center rounded-[10px] border border-[#111] px-4 py-2 text-[16px] font-bold leading-none transition-opacity ${
                range === r.id ? "" : "opacity-40 hover:opacity-70"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <p className="text-[12px] leading-none tracking-[-0.24px]">{s.period}</p>
        <div className="flex flex-col gap-6 pr-6 @lg:grid @lg:grid-cols-3 @lg:gap-x-6 @lg:pr-0">
          <div className="flex flex-col gap-1 font-bold @lg:gap-2">
            <p className="text-[40px] leading-none tracking-[-0.8px]">{fmt(s.total)}</p>
            <p className="text-[16px] leading-none">Total</p>
          </div>
          <div className="grid grid-cols-2 gap-6 @lg:contents">
            {s.platforms.map((p) => (
              <div key={p.name} className="flex flex-col gap-1 @lg:gap-2">
                <p className="text-[24px] leading-none tracking-[-0.48px]">{fmt(p.value)}</p>
                <p className="text-[16px] font-bold leading-none">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
