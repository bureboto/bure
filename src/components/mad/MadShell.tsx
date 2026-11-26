import type { ReactNode } from "react";
import MadMobileHeader from "./MadMobileHeader";
import MadSidebar from "./MadSidebar";

// Shared frame for Mad Cactus pages: desktop sidebar / mobile header + content.
export default function MadShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:items-start">
      <MadSidebar />
      <MadMobileHeader />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
