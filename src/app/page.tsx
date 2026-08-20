export default function Home() {
  const bio =
    "Artista multidisciplinario que comenzó a sus 15 años explorando el graffiti. Con el tiempo, ha evolucionado hacia nuevas técnicas y enfoques creativos, desarrollando un estilo único que juega con formas, contrastes y luces. Su pasión por el arte lo ha llevado a exponer y pintar en lugares como Nueva York, Italia y Francia.";

  return (
    <div className="px-5 flex-1">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10 md:gap-0 min-h-[70vh]">
        <div className="md:w-1/2 aspect-[4/5] md:aspect-auto bg-black" />
        <div className="md:w-1/2 flex flex-col justify-center md:pl-16">
          <h1 className="text-5xl md:text-6xl font-medium mb-8 tracking-tight">
            Bure
          </h1>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl text-sm leading-relaxed text-black/80">
            <p>{bio}</p>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
