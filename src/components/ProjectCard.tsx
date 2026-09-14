import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="flex flex-col gap-3 group">
      {project.cover ? (
        project.cover.endsWith(".mp4") ? (
          <video
            src={project.cover}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full aspect-video object-cover transition-opacity group-hover:opacity-80"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cover}
            alt={project.name}
            className="w-full aspect-video object-cover transition-opacity group-hover:opacity-80"
          />
        )
      ) : (
        <div className="w-full aspect-video bg-black transition-opacity group-hover:opacity-80" />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <p className="font-bold">
            {project.name}. {project.date}.
          </p>
          {/* Tags hidden for now — kept in data for future catalog/filtering */}
          <div className="hidden flex-wrap justify-end gap-2 shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-black/60 border border-black/20 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-black/70">{project.description}</p>
      </div>
    </Link>
  );
}
