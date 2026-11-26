"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useMadHref } from "./MadNav";

// Mock: no authentication yet. "Entrar" goes straight to Abscot's dashboard.
const MOCK_ARTIST_ID = "2VQkqhOnfK4FDNoIJklQ8e"; // Abscot

const field =
  "w-full rounded-[8px] border border-white bg-transparent p-4 text-[16px] font-bold leading-none text-white outline-none placeholder:text-white focus:ring-2 focus:ring-white/40";

// Login form (Figma 397:3211 / 397:3369): Email, Password, Entrar and the
// forgot-password link, all 400px wide on desktop and full width on mobile.
export default function LoginForm() {
  const router = useRouter();
  const href = useMadHref();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push(`${href("/dashboard")}?artist=${MOCK_ARTIST_ID}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center gap-6 px-10 sm:w-[400px] sm:px-0">
      <input type="email" name="email" autoComplete="email" placeholder="Email" aria-label="Email" className={field} />
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        placeholder="Password"
        aria-label="Password"
        className={field}
      />
      <button
        type="submit"
        className="w-full rounded-[8px] border border-white p-4 text-[16px] font-bold leading-none text-white transition-colors hover:bg-white hover:text-[#111]"
      >
        Entrar
      </button>
      <a href="#forgot-password" className="text-[16px] font-bold leading-none text-white underline">
        Olvidé mi contraseña
      </a>
    </form>
  );
}
