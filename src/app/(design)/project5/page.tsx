import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";

export default function Project5() {
  return (
    <ContentGrid className="flex-1 flex flex-col gap-6 py-10">
      <h1 className="text-2xl">Project 5</h1>
      <p className="text-black/70">Contenido del proyecto próximamente.</p>

      <OtherProjects currentHref="/project5" />
    </ContentGrid>
  );
}
