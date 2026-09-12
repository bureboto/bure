import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

const idf = (file: string) => `/design/idf/${file}`;

const files = [
  "1_IDF.jpg",
  "2_IDF.jpg",
  "3_IDF.jpg",
  "4_IDF.jpg",
  "5_IDF.jpg",
  "6_IDF.jpg",
  "7_IDF.jpg",
  "8_IDF.jpg",
  "9_IDF.jpg",
  "10_IDF.jpg",
  "11_IDF.jpg",
  "12_IDF.jpg",
  "13_IDF.mp4",
  "14_IDF.mp4",
  "15_IDF.gif",
];

export default function Project11() {
  return (
    <ContentGrid className="pb-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-6">
        <Link href="/home" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit">
          ← Volver
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl">IDF – Inversionista del Futuro</h1>
          <span className="text-sm text-black/60">Brand | UI/UX</span>
        </div>
        <p className="max-w-2xl text-black/70">
          Inversionista del Futuro (IDF) es el curso de Espacio Cripto para aprender a invertir
          en criptomonedas desde cero. Branding, landing page y materiales de venta para redes
          sociales pensados para una comunidad de más de 30,000 personas.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {files.map((file) => (
          <div key={file} className="grid grid-cols-1 md:grid-cols-6">
            <div className="md:col-start-2 md:col-span-4">
              <ProjectMedia src={idf(file)} alt="IDF – Inversionista del Futuro" />
            </div>
          </div>
        ))}
      </div>

      <OtherProjects currentHref="/project11" />
    </ContentGrid>
  );
}
