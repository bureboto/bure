"use client";

import Image from "next/image";
import { useState } from "react";
import NewReleaseButton from "./NewReleaseButton";

// Mobile dashboard menu (Figma 393:3148), pinned to the bottom of the screen
// so it sits under the thumbs. The hamburger opens the menu upwards.
export default function DashboardMobileBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
      {open && (
        <nav
          id="mad-dashboard-menu"
          className="flex flex-col items-start gap-6 border-b border-[#333] bg-black p-6 text-[16px] font-bold leading-none text-white"
        >
          <a href="#logout" className="flex items-center gap-4">
            <Image src="/mad/logout.svg" alt="" width={24} height={24} />
            Log out
          </a>
        </nav>
      )}
      <div className="flex h-20 items-center justify-between bg-black p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
        <div className="flex h-[42.575px] w-10 shrink-0 justify-end">
          <Image src="/mad/logo-mobile.svg" alt="Mad Cactus" width={37.4276} height={42.5747} />
        </div>
        <NewReleaseButton variant="outline" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mad-dashboard-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="size-8"
        >
          <Image src="/mad/menu.svg" alt="" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
