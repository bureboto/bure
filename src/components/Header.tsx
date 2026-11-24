"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitch from "@/components/LanguageSwitch";

const navItems = [
  { href: "/", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/pieces", label: "Pieces" },
  { href: "mailto:hola@bure.art", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-[28px] pt-5">
      <div className="flex min-h-[60px] flex-wrap items-center justify-between gap-y-2">
        <Link href="/" aria-label="Bure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Bure" width={77} height={20} />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:gap-x-6 sm:text-sm">
          {navItems.map((item) => {
            const isMailto = item.href.startsWith("mailto:");
            const active = !isMailto && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));
            const className = active
              ? "underline underline-offset-4"
              : "opacity-70 hover:opacity-100 transition-opacity";
            if (isMailto) {
              return (
                <a key={item.href} href={item.href} className={className}>
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://www.instagram.com/bure.eth/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}
