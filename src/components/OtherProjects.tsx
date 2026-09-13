"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function OtherProjects({ currentHref, count = 2 }: { currentHref: string; count?: number }) {
  const pool = projects.filter((project) => project.href !== currentHref);
  // orden estable en el server; se elige al azar en el cliente tras montar
  // para evitar mismatches de hidratación
  const [others, setOthers] = useState(pool.slice(0, count));
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOthers(shuffle(pool).slice(0, count));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHref, count]);

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
