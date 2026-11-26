"use client";

import Image from "next/image";
import { useState } from "react";
import { LoginButton, MadHomeLink, MadNavLinks } from "./MadNav";

// Mobile menu (Figma 391:2333): 80px black bar with logo, wordmark and a
// hamburger that opens the nav as an overlay.
export default function MadMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 md:hidden">
      <div className="flex h-20 items-center justify-between bg-black p-4">
        <MadHomeLink className="flex h-[42.575px] w-10 shrink-0 justify-end">
          <Image src="/mad/logo-mobile.svg" alt="" width={37.4276} height={42.5747} priority />
        </MadHomeLink>
        <p className="whitespace-nowrap text-[32px] leading-none tracking-[-0.64px]">Mad Cactus</p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mad-mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="size-8"
        >
          <Image src="/mad/menu.svg" alt="" width={32} height={32} />
        </button>
      </div>

      {open && (
        <nav
          id="mad-mobile-nav"
          className="absolute inset-x-0 top-20 flex h-[calc(100dvh-80px)] flex-col items-start gap-6 bg-black p-4 pt-8 text-[32px] leading-none tracking-[-0.64px]"
        >
          <MadNavLinks onNavigate={() => setOpen(false)} />
          <div className="mt-2 tracking-normal">
            <LoginButton />
          </div>
        </nav>
      )}
    </header>
  );
}
