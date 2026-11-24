"use client";

import { usePathname } from "next/navigation";

/** Hidden on the About page ("/") — its Figma frame fits one screen with no footer. */
export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="w-full px-5 py-4">
      <div className="max-w-[1440px] mx-auto text-center text-xs text-black/60">
        Bure {new Date().getFullYear()}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
