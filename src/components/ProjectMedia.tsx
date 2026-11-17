export default function ProjectMedia({
  src,
  alt,
  className = "w-auto h-auto max-w-full",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (src.endsWith(".mp4")) {
    return (
      <div className="flex w-full items-center justify-center">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className={className}
          style={{ maxHeight: 600 }}
        />
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={className} style={{ maxHeight: 600 }} />
    </div>
  );
}
