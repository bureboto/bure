"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/project1", label: "Project 1" },
  { href: "/project2", label: "Project 2" },
  { href: "/project3", label: "Project 3" },
];

export default function DesignHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full px-[28px] pt-5">
      <div className="flex items-center justify-between h-[60px]">
        <Link href="/home" aria-label="Bure Design">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Bure" width={77} height={20} />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "underline underline-offset-4"
                    : "opacity-70 hover:opacity-100 transition-opacity"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
