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
      className={`fixed bottom-0 left-0 right-0 z-50 px-[28px] pb-5 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl px-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <HeaderContent />
      </div>
    </div>
  );
}
