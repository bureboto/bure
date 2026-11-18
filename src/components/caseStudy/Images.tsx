import Image from "next/image";

export type ImageSlot = { src: string; alt: string; caption?: string };

function Caption({ caption }: { caption?: string }) {
  if (!caption) return null;
  return <p className="w-full text-[11px] text-[#6e6e73]">{caption}</p>;
}

function Slot({ image, aspect = "h-[400px]" }: { image: ImageSlot; aspect?: string }) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className={`relative w-full ${aspect}`}>
        <Image src={image.src} alt={image.alt} fill className="object-contain" />
      </div>
      <Caption caption={image.caption} />
    </div>
  );
}

/** Images/Image-Focus: a single full-width image with a caption below. */
export function ImagesFocus({ image }: { image: ImageSlot }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-10 md:px-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        className="h-auto max-h-[400px] w-full object-contain md:max-h-[800px]"
      />
      {image.caption && (
        <p className="w-full text-[12px] text-[#6e6e73] md:text-[11px]">{image.caption}</p>
      )}
    </div>
  );
}

/** Images/Image-Double: two images side by side. */
export function ImagesDouble({ images }: { images: [ImageSlot, ImageSlot] }) {
  return (
    <div className="flex flex-col items-start gap-10 py-10 md:flex-row">
      {images.map((image, i) => (
        <Slot key={i} image={image} />
      ))}
    </div>
  );
}

/** Images/Image-Triple: three images side by side. */
export function ImagesTriple({ images }: { images: [ImageSlot, ImageSlot, ImageSlot] }) {
  return (
    <div className="flex flex-col items-start gap-10 py-10 md:flex-row">
      {images.map((image, i) => (
        <Slot key={i} image={image} />
      ))}
    </div>
  );
}

/** Images/Grid-6: two rows of three images. */
export function ImagesGrid6({ images }: { images: [ImageSlot, ImageSlot, ImageSlot, ImageSlot, ImageSlot, ImageSlot] }) {
  return (
    <div className="flex flex-col gap-6 py-10">
      <div className="flex flex-col items-start gap-6 md:flex-row">
        {images.slice(0, 3).map((image, i) => (
          <Slot key={i} image={image} />
        ))}
      </div>
      <div className="flex flex-col items-start gap-6 md:flex-row">
        {images.slice(3, 6).map((image, i) => (
          <Slot key={i} image={image} />
        ))}
      </div>
    </div>
  );
}

/** Images/Grid-4: two rows of two images, each 421px tall. */
export function ImagesGrid4({ images }: { images: [ImageSlot, ImageSlot, ImageSlot, ImageSlot] }) {
  return (
    <div className="flex flex-col gap-6 py-10">
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <Slot image={images[0]} />
        <Slot image={images[1]} />
      </div>
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <Slot image={images[2]} aspect="h-[421px]" />
        <Slot image={images[3]} aspect="h-[421px]" />
      </div>
    </div>
  );
}

/** Images/Complex: a single top image + a double row stacked on the left (866px total), beside a tall right image. */
export function ImagesComplex({
  top,
  bottomLeft,
  bottomRight,
  right,
}: {
  top: ImageSlot;
  bottomLeft: ImageSlot;
  bottomRight: ImageSlot;
  right: ImageSlot;
}) {
  return (
    <div className="flex flex-col items-stretch gap-6 py-10 md:flex-row">
      <div className="flex flex-col justify-center gap-6 md:h-[866px] md:flex-1">
        <Slot image={top} aspect="h-[421px]" />
        <div className="flex flex-col gap-6 md:flex-row">
          <Slot image={bottomLeft} aspect="h-[421px]" />
          <Slot image={bottomRight} aspect="h-[421px]" />
        </div>
      </div>
      <div className="flex flex-1">
        <Slot image={right} aspect="h-full" />
      </div>
    </div>
  );
}
