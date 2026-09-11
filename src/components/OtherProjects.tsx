import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function OtherProjects({ currentHref, count = 2 }: { currentHref: string; count?: number }) {
  const others = projects.filter((project) => project.href !== currentHref).slice(0, count);

  if (others.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 pt-10 border-t border-black/20">
      <h2 className="text-2xl">Other projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {others.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </section>
  );
}
