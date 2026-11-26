// Mad Cactus contact — mad.bure.art/contact (rewritten to /mad/contact).
// Figma: Contact desktop (397:3393) / mobile (397:3448, menu bar at the bottom).
import type { Metadata } from "next";
import ContactForm from "@/components/mad/ContactForm";
import MadShell from "@/components/mad/MadShell";

export const metadata: Metadata = { title: "Contact — Mad Cactus" };

export default function MadContact() {
  return (
    <MadShell mobileHeader="bottom" mainClassName="flex min-h-dvh items-center justify-center bg-[#111] md:bg-black">
      <ContactForm />
    </MadShell>
  );
}
