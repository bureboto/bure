import Image from "next/image";
import Link from "next/link";
import { LoginButton, MAD_NAV } from "./MadNav";

// Desktop menu (Figma 391:2251): black full-height column with logo,
// vertical wordmark and nav pinned to the bottom.
export default function MadSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 flex-col items-start justify-between bg-black p-10 md:flex">
      <Link href="/" aria-label="Mad Cactus — inicio" className="flex h-[87px] w-[81.739px] justify-end">
        <Image src="/mad/logo.svg" alt="" width={78.3634} height={87} priority />
      </Link>

      <div className="flex h-[409px] w-[87px] items-center justify-center">
        <p className="-rotate-90 whitespace-nowrap text-[72px] leading-none tracking-[-1.44px]">Mad Cactus</p>
      </div>

      <nav className="flex flex-col items-start gap-4 text-[16px] leading-none">
        {MAD_NAV.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-white">
            {item.label}
          </a>
        ))}
        <LoginButton />
      </nav>
    </aside>
  );
}
