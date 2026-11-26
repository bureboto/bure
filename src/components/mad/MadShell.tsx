import type { ReactNode } from "react";
import MadMobileHeader from "./MadMobileHeader";
import MadSidebar from "./MadSidebar";

// Shared frame for Mad Cactus pages: desktop sidebar / mobile header + content.
// `mobileHeader="bottom"` moves the mobile bar to the bottom of the screen.
export default function MadShell({
  children,
  mobileHeader = "top",
  mainClassName = "",
}: {
  children: ReactNode;
  mobileHeader?: "top" | "bottom";
  mainClassName?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:items-start">
      <MadSidebar />
      {mobileHeader === "top" && <MadMobileHeader />}
      <main className={`min-w-0 flex-1 ${mobileHeader === "bottom" ? "pb-20 md:pb-0" : ""} ${mainClassName}`}>
        {children}
      </main>
      {mobileHeader === "bottom" && <MadMobileHeader position="bottom" />}
    </div>
  );
}
