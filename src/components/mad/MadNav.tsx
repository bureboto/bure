"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

// Section paths as seen on mad.bure.art. Elsewhere (Vercel previews, the main
// domain) the same pages live under /mad, which src/proxy.ts maps for us.
export const MAD_NAV: { path: string | null; label: string }[] = [
  { path: "/", label: "Releases" },
  { path: "/artists", label: "Artists" },
  { path: null, label: "Contact" }, // no page yet
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
        if (!item.path) {
          return (
            <a key={item.label} href="#contact" className={`${className} hover:text-white`}>
              {item.label}
            </a>
          );
        }
        const active = item.path === "/" ? section === "/" : section.startsWith(item.path);
        return (
          <Link
            key={item.label}
            href={href(item.path)}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`${className} hover:text-white ${active ? "text-white underline underline-offset-4" : ""}`}
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

export function LoginButton() {
  const href = useMadHref();
  return (
    <Link
      href={href("/login")}
      className="rounded-[4px] border border-white px-3 py-2 text-[16px] leading-none text-[#e0e0e0] transition-colors hover:bg-white hover:text-black"
    >
      Login
    </Link>
  );
}
