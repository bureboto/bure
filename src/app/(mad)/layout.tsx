import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["700"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mad.bure.art"),
  title: "Mad Cactus",
  description: "Mad Cactus — sello discográfico.",
  openGraph: {
    title: "Mad Cactus",
    description: "Mad Cactus — sello discográfico.",
  },
  twitter: {
    card: "summary",
    title: "Mad Cactus",
    description: "Mad Cactus — sello discográfico.",
  },
};

export default function MadLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      {/* Inline style: globals.css sets unlayered body colors that beat Tailwind utilities. */}
      <body
        className="min-h-full font-[family-name:var(--font-inter)] font-bold"
        style={{ background: "#e7e7e7", color: "#e0e0e0" }}
      >
        {children}
      </body>
    </html>
  );
}
