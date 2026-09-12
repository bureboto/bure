export default function ProjectMedia({
  src,
  alt,
  className = "w-full h-auto",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (src.endsWith(".mp4")) {
    return (
      <video src={src} autoPlay loop muted playsInline controls={false} className={className} />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}
