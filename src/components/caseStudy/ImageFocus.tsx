import Image from "next/image";

/**
 * Inset "focus" image after the Hero. Tokens from Figma: padding X-Jumbo
 * (240px) horizontal, 40px vertical, fixed height 475px, background #e4e4e4.
 */
export default function ImageFocus({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center px-[240px] py-10">
      <div className="relative h-[475px] w-full bg-[#e4e4e4] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}
