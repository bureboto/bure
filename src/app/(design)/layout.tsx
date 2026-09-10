import type { Metadata } from "next";
import "../globals.css";
import DesignHeader from "@/components/DesignHeader";

export const metadata: Metadata = {
  title: "Bure Design",
  description: "Bure — Trabajo de diseño.",
};

export default function DesignLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        <DesignHeader />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
