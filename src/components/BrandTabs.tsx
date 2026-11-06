"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "ADN", href: "/elpulsodelasdivisas/brand/adn" },
  { label: "Moodboard", href: "/elpulsodelasdivisas/brand/moodboard" },
];

export default function BrandTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => {
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
