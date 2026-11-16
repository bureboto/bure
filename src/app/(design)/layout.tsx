import type { Metadata } from "next";
import "../globals.css";
import DesignHeader from "@/components/DesignHeader";
import FloatingHeader from "@/components/FloatingHeader";
import { LanguageProvider } from "@/lib/LanguageContext";
import { LangTransitionProvider } from "@/lib/langTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://design.bure.art"),
  title: "Bure Design",
  description: "Bure — Trabajo de diseño.",
};

export default function DesignLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        <LanguageProvider>
          <LangTransitionProvider>
            <DesignHeader />
            <main className="flex-1 flex flex-col">{children}</main>
            <FloatingHeader />
          </LangTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
