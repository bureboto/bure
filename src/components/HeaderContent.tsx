"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CVLink from "@/components/CVLink";
import LanguageSwitch from "@/components/LanguageSwitch";

const navLinks = [
  { href: "/about-me", label: "About me" },
  { href: "/projects", label: "Projects" },
];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-['Helvetica'] text-[16px] tracking-[0.16px] text-[#111] underline underline-offset-2 ${className}`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6.5" y="10" width="2" height="7.5" fill="currentColor" />
      <circle cx="7.5" cy="6.5" r="1.25" fill="currentColor" />
      <path
        d="M11 17.5V10h2v1.1c.5-.75 1.35-1.3 2.4-1.3 1.85 0 3.1 1.25 3.1 3.4v4.3h-2v-4c0-1.05-.5-1.7-1.5-1.7s-1.6.65-1.6 1.7v4h-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Header master from Figma (desktop node 3542:21786, mobile node
 * 3591:41565). Desktop: logo, "About me" / "Projects" nav links,
 * "Download CV" button, LinkedIn icon (kept per request instead of
 * Figma's Instagram icon). Mobile: logo + hamburger opening a dropdown
 * with the same items — Figma's mobile frame only specs the closed
 * state, so the dropdown's own layout is this component's own design.
 */
export default function HeaderContent() {
  const pathname = usePathname();
  const showCV = !pathname.startsWith("/elpulsodelasdivisas");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex h-[56px] items-center justify-between md:h-[72px]">
      <Link href="/home" aria-label="Bure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Bure" width={77} height={20} />
      </Link>

      {/* Desktop nav */}
      <div className="hidden items-center gap-4 md:flex">
        <NavLinks />
        {showCV && (
          <CVLink className="rounded px-4 py-2 text-[16px] tracking-[0.16px] border border-black" />
        )}
        <a
          href="https://www.linkedin.com/in/bureboto/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="opacity-70 transition-opacity hover:opacity-100"
        >
          <LinkedInIcon />
        </a>
        <LanguageSwitch />
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="flex h-8 w-8 items-center justify-center md:hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {menuOpen ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="#1f1f1f" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#1f1f1f" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex w-48 flex-col gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-lg md:hidden">
          <NavLinks className="underline-offset-2" />
          {showCV && (
            <CVLink className="rounded px-4 py-2 text-[16px] tracking-[0.16px] border border-black" />
          )}
          <a
            href="https://www.linkedin.com/in/bureboto/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <LinkedInIcon />
          </a>
          <LanguageSwitch className="border-l-0 pl-0" />
        </div>
      )}
    </div>
  );
}
