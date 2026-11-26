import Image from "next/image";
import NewReleaseButton from "./NewReleaseButton";

// Desktop dashboard menu (Figma 392:2536): black column, logo on top,
// New Release + Log out at the bottom.
export default function DashboardSidebar() {
  return (
    <aside className="hidden h-full shrink-0 flex-col items-start justify-between bg-[#111] p-10 lg:flex">
      <div className="flex h-[87px] w-[81.739px] justify-end">
        <Image src="/mad/logo-white.svg" alt="Mad Cactus" width={78.3634} height={87} priority />
      </div>
      <div className="flex flex-col items-start gap-6">
        <NewReleaseButton variant="outline" />
        <a href="#logout" className="flex items-center gap-4 text-[16px] font-bold leading-none text-white">
          <Image src="/mad/logout.svg" alt="" width={24} height={24} />
          Log out
        </a>
      </div>
    </aside>
  );
}
