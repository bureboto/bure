"use client";

import { useEffect, useState } from "react";
import HeaderContent from "@/components/HeaderContent";

export default function FloatingHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 px-12 pb-5 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className="relative bg-white/40 backdrop-blur-xl backdrop-saturate-150 rounded-[99rem] px-4 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3)] overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[99rem] bg-gradient-to-b from-white/30 via-transparent to-black/5" />
        <div className="relative">
          <HeaderContent />
        </div>
      </div>
    </div>
  );
}
