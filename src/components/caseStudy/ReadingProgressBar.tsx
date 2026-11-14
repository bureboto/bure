"use client";

import { useEffect, useState } from "react";

/**
 * Fixed top bar tracking scroll progress through the whole page: starts as
 * a 1.5rem nub and grows to full width by the time the user reaches the
 * end of the article.
 */
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, window.scrollY / total)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-6 w-screen">
      <div
        className="h-full bg-[#D5007E] transition-[width] duration-500 ease-out"
        style={{ width: `calc(1.5rem + (100% - 1.5rem) * ${progress})` }}
      />
    </div>
  );
}
