// Artist login — mad.bure.art/login (rewritten to /mad/login).
// Figma: Login desktop (397:3208) / mobile (397:3349). Mock only for now:
// no authentication, "Entrar" opens Abscot's dashboard.
import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "@/components/mad/LoginForm";
import { MadHomeLink } from "@/components/mad/MadNav";

export const metadata: Metadata = { title: "Login — Mad Cactus", robots: { index: false } };

export default function MadLogin() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-[#111] py-10">
      <MadHomeLink className="flex h-[87px] w-[81.739px] justify-end">
        <Image src="/mad/logo-white.svg" alt="" width={78.3634} height={87} priority />
      </MadHomeLink>
      <LoginForm />
    </main>
  );
}
