import Image from "next/image";
import LogoutLink from "./LogoutLink";

// Desktop dashboard menu (Figma 392:2536): black column, logo on top,
// Log out at the bottom. (New Release lives next to the artist's name.)
export default function DashboardSidebar() {
  return (
    <aside className="hidden h-full shrink-0 flex-col items-start justify-between bg-[#111] p-10 lg:flex">
      <div className="flex h-[87px] w-[81.739px] justify-end">
        <Image src="/mad/logo-white.svg" alt="Mad Cactus" width={78.3634} height={87} priority />
      </div>
      <LogoutLink className="text-[16px] font-bold leading-none text-white" />
    </aside>
  );
}
