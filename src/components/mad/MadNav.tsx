"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

// Section paths as seen on mad.bure.art. Elsewhere (Vercel previews, the main
// domain) the same pages live under /mad, which src/proxy.ts maps for us.
export const MAD_NAV: { path: string; label: string }[] = [
  { path: "/", label: "Releases" },
  { path: "/artists", label: "Artists" },
  { path: "/contact", label: "Contact" },
];

const subscribe = () => () => {};

// "" on mad.bure.art, "/mad" anywhere else. The server render (and the first
// client render, so hydration matches) uses "/mad", which also works on
// mad.bure.art since the proxy passes /mad paths through.
function useMadBase() {
  return useSyncExternalStore(
    subscribe,
    () => (/^(www\.)?mad\.bure\.art$/.test(window.location.hostname) ? "" : "/mad"),
    () => "/mad",
  );
}

export function useMadHref() {
  const base = useMadBase();
  return (path: string) => (base && path === "/" ? base : `${base}${path}`);
}

// Current section path, with any /mad prefix stripped.
function useMadSection() {
  const pathname = usePathname() ?? "/";
  return pathname.replace(/^\/mad(?=\/|$)/, "") || "/";
}

export function MadNavLinks({ className = "", onNavigate }: { className?: string; onNavigate?: () => void }) {
  const href = useMadHref();
  const section = useMadSection();
  return (
    <>
      {MAD_NAV.map((item) => {
        const active = item.path === "/" ? section === "/" : section.startsWith(item.path);
        return (
          <Link
            key={item.label}
            href={href(item.path)}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`${className} hover:text-white ${active ? "underline underline-offset-4" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function MadHomeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const href = useMadHref();
  return (
    <Link href={href("/")} aria-label="Mad Cactus — inicio" className={className}>
      {children}
    </Link>
  );
}

// "Login" — opens the artist login in a new tab (Figma 397:3402).
export function LoginLink({ className = "" }: { className?: string }) {
  const href = useMadHref();
  return (
    <a href={href("/login")} target="_blank" rel="noopener" className={`${className} hover:text-white`}>
      Login
    </a>
  );
}

// "Send demo" button (Figma 397:3403). No destination yet.
export function SendDemoButton() {
  return (
    <a
      href="#send-demo"
      className="flex items-center justify-center gap-[10px] rounded-[4px] border border-white px-3 py-2 text-[16px] leading-none tracking-normal text-[#e0e0e0] transition-colors hover:bg-white/10"
    >
      <Image src="/mad/disc.svg" alt="" width={24} height={24} />
      Send demo
    </a>
  );
}
