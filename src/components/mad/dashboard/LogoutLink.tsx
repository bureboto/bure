"use client";

import Image from "next/image";
import Link from "next/link";
import { useMadHref } from "../MadNav";

// "Log out" — no session yet, so it just goes back to the login page.
export default function LogoutLink({ className = "" }: { className?: string }) {
  const href = useMadHref();
  return (
    <Link href={href("/login")} className={`flex items-center gap-4 ${className}`}>
      <Image src="/mad/logout.svg" alt="" width={24} height={24} />
      Log out
    </Link>
  );
}
