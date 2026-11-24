import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "El Pulso / Branding",
  description: "Branding para El Pulso de las Divisas, por Bure.",
  openGraph: {
    title: "El Pulso / Branding",
    description: "Branding para El Pulso de las Divisas, por Bure.",
    images: [{ url: "/design/elpulsodelasdivisas/og-pulso.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Pulso / Branding",
    description: "Branding para El Pulso de las Divisas, por Bure.",
    images: ["/design/elpulsodelasdivisas/og-pulso.jpg"],
  },
};

export default function PulsoLayout({ children }: { children: ReactNode }) {
  return children;
}
