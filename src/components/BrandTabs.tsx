"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { label: string; href: string; disabled?: boolean };

const tabs: Tab[] = [
  { label: "ADN", href: "/elpulsodelasdivisas/brand/adn" },
  { label: "Moodboard", href: "/elpulsodelasdivisas/brand/moodboard" },
  { label: "Brand Kit", href: "/pulso/brandkit" },
  { label: "Motions", href: "/elpulsodelasdivisas/brand/motions", disabled: true },
];

export default function BrandTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => {
        if (tab.disabled) {
          return (
            <span
              key={tab.href}
              aria-disabled="true"
              className="border border-[#909096] rounded px-2 py-1 text-[18px] text-[#909096] opacity-50 cursor-not-allowed"
            >
              {tab.label}
            </span>
          );
        }
        const active = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`border border-black rounded px-2 py-1 text-[18px] transition-colors ${
              active ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
