"use client";

import { usePathname } from "next/navigation";
import HeaderContent from "@/components/HeaderContent";

/**
 * Home's desktop layout (Figma node 3578:39752) scopes its own header to
 * the left column only, so the project grid on the right can start flush
 * at the top. This global header still covers Home on mobile — only the
 * desktop row is hidden there, in favor of Home's own left-column header.
 */
export default function DesignHeader() {
  const pathname = usePathname();
  const hideOnDesktop = pathname === "/home";

  return (
    <header className={`w-full px-4 md:px-10 ${hideOnDesktop ? "md:hidden" : ""}`}>
      <HeaderContent />
    </header>
  );
}
