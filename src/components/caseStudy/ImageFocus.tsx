import Image from "next/image";

/**
 * Inset "focus" image(s) after the Hero. Tokens from Figma: padding Jumbo
 * (160px) horizontal, 40px vertical, fixed height 475px, background #e4e4e4.
 * Takes one or more images, shown side by side.
 */
export default function ImageFocus({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="flex items-center justify-center px-40 py-10">
      <div className="relative flex h-[475px] w-full overflow-hidden bg-[#e4e4e4]">
        {images.map((image, i) => (
          <div key={i} className="relative flex-1">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
