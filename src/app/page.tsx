export default function Home() {
  return (
    <div className="px-5 flex-1 flex flex-col min-h-0">
      <div className="max-w-[1440px] mx-auto w-full flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-14 md:items-center">
        <div className="relative w-full h-[340px] md:h-full md:self-stretch overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/textura-home.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: "fill" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Bure" width={77} height={20} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[17px] text-black/70">
              Soy Bure, artista visual, nacido en 1992, dedicado al estudio de las formas y a hacer visibles las formas invisibles.
            </p>
            <p className="text-base md:text-[17px] text-black/70">
              Crecí en Nezahualcóyotl, Estado de México. Estoy explorando el diseño, el arte, el graffiti, la musica y en general la vida :)
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 text-[0.8rem] text-black/60">
              <p>
                Hago graffiti desde el 2007 y, al ingresar a la universidad en el 2010, tuve la necesidad de converger las formas del graffiti y el diseño. A lo largo de estos años he experimentado con distintas técnicas y soportes que van desde los acrílicos, óleo, aerosol y vitralismo, hasta medios digitales para ilustración y motion graphics.
              </p>
              <p>He expuesto y pintado en lugares como Nueva York, Italia, España y Francia, wow todo muy lejos de mi colonia.</p>
              <p>
                Mi obra se enmarca en un estilo abstracto, orgánico y cromático. Me encanta jugar con los contraste de pesos, colores y trazos. Mi obra ha evolucionado del graffiti hacia composiciones que ya no son del todo graffiti, me da curiosidad saber a donde mas caminará esto. Nunca dejo de explorar mi estilo.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-[0.8rem] text-black/60">
              <p>
                Busco expresar la forma, encontrando inspiración en las letras, en mi entorno y en los aspectos conscientes y subconscientes de nuestra realidad (si suena loco, pero no lo es tanto si prestas un poco de atencion).
              </p>
              <p>
                El estilo visual de mi obra es versátil y dinámico. A través de luces, sombras y contrastes, creo una sensación de profundidad y movimiento en mis composiciones. Los contrastes intensos y la armonía cromática son elementos recurrentes que dan una dimensión a mi obra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
