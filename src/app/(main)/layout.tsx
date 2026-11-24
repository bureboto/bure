import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { LangTransitionProvider } from "@/lib/langTransition";

export const metadata: Metadata = {
  title: "Bure",
  description: "Bure — Artista multidisciplinario.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        <LanguageProvider>
          <LangTransitionProvider>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </LangTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
