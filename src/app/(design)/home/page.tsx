import Link from "next/link";

const projects = [
  { href: "/project1", label: "Project 1" },
  { href: "/project2", label: "Project 2" },
  { href: "/project3", label: "Project 3" },
];

export default function DesignHome() {
  return (
    <div className="px-[28px] flex-1 flex flex-col gap-8 py-10">
      <h1 className="text-2xl">Design</h1>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.href}>
            <Link href={project.href} className="text-lg underline-offset-4 hover:underline">
              {project.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
