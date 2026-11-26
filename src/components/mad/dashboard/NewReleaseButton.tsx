import Image from "next/image";

// "New Release" button. Variants from the Figma: outlined (on the black
// sidebar / mobile bar) and solid black (dashboard header).
export default function NewReleaseButton({ variant }: { variant: "outline" | "solid" }) {
  const look =
    variant === "outline"
      ? "border-white hover:bg-white/10"
      : "border-[#111] bg-[#111] hover:bg-[#333]";
  return (
    <a
      href="#new-release"
      className={`flex shrink-0 items-center justify-center gap-4 whitespace-nowrap rounded-[8px] border p-4 text-[16px] font-bold leading-none text-white transition-colors ${look}`}
    >
      <Image src="/mad/disc.svg" alt="" width={24} height={24} />
      New Release
    </a>
  );
}
