import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="flex flex-col gap-3 group">
      {project.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.cover}
          alt={project.name}
          className="w-full aspect-[4/3] object-cover transition-opacity group-hover:opacity-80"
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-black transition-opacity group-hover:opacity-80" />
      )}
      <div>
        <p className="font-bold">
          {project.name}. {project.date}.
        </p>
        <p className="text-sm text-black/70">{project.description}</p>
      </div>
    </Link>
  );
}
