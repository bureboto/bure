"use client";

import type { FormEvent } from "react";

const field =
  "w-full rounded-[8px] border border-white bg-transparent p-4 text-[16px] font-bold leading-none text-white outline-none placeholder:text-white focus:ring-2 focus:ring-white/40";

// Contact form (Figma 397:3437 / 397:3451): Email, Nombre, Mensaje, Enviar.
// Mock: not connected to anything yet, so submitting does nothing.
export default function ContactForm() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center gap-6 px-10 md:max-w-[572px] md:px-0">
      <input type="email" name="email" autoComplete="email" placeholder="Email" aria-label="Email" className={field} />
      <input type="text" name="name" autoComplete="name" placeholder="Nombre" aria-label="Nombre" className={field} />
      <textarea
        name="message"
        placeholder="Mensaje"
        aria-label="Mensaje"
        className={`${field} h-[101px] resize-none leading-tight max-md:h-[109px]`}
      />
      <button
        type="submit"
        className="w-full rounded-[8px] border border-white p-4 text-[16px] font-bold leading-none text-white transition-colors hover:bg-white hover:text-[#111]"
      >
        Enviar
      </button>
    </form>
  );
}
