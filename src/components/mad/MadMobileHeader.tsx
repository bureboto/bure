"use client";

import Image from "next/image";
import { useState } from "react";
import { LoginLink, MadHomeLink, MadNavLinks, SendDemoButton } from "./MadNav";

// Mobile menu (Figma 391:2333 / 397:3461): 80px black bar with logo, wordmark
// and a hamburger that opens the nav as an overlay. `position="bottom"` pins
// it to the bottom of the screen (contact page), with the menu opening upwards.
export default function MadMobileHeader({ position = "top" }: { position?: "top" | "bottom" }) {
  const [open, setOpen] = useState(false);
  const bottom = position === "bottom";

  return (
    <header className={`z-30 md:hidden ${bottom ? "fixed inset-x-0 bottom-0" : "sticky top-0"}`}>
      <div className={`flex h-20 items-center justify-between bg-black p-4 ${bottom ? "pb-[max(16px,env(safe-area-inset-bottom))]" : ""}`}>
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
          className={`absolute inset-x-0 flex h-[calc(100dvh-80px)] flex-col items-start gap-6 bg-black p-4 pt-8 text-[32px] leading-none tracking-[-0.64px] ${
            bottom ? "bottom-20" : "top-20"
          }`}
        >
          <MadNavLinks onNavigate={() => setOpen(false)} />
          <LoginLink />
          <div className="mt-2">
            <SendDemoButton />
          </div>
        </nav>
      )}
    </header>
  );
}
