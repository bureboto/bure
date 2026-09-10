export default function ProjectMedia({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith(".mp4")) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="w-full h-auto"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="w-full h-auto" />
  );
}
