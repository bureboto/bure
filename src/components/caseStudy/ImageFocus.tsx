import Image from "next/image";

/**
 * Inset "focus" image(s) between sections. Tokens from Figma: padding Jumbo
 * (160px) horizontal, 40px vertical. Background and height vary per
 * instance in Figma (e.g. #e4e4e4 at 475px after the Hero, white at 523px
 * elsewhere), so both are props with the first instance's values as defaults.
 * Takes one or more images, shown side by side.
 */
export default function ImageFocus({
  images,
  bg = "#e4e4e4",
  height = 475,
}: {
  images: { src: string; alt: string }[];
  bg?: string;
  height?: number;
}) {
  return (
    <div className="flex items-center justify-center px-40 py-10">
      <div className="relative flex w-full overflow-hidden" style={{ height, backgroundColor: bg }}>
        {images.map((image, i) => (
          <div key={i} className="relative flex-1">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
