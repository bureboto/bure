import type { Metadata } from "next";
import ProjectsContent from "./content";

export const metadata: Metadata = {
  title: "Projects — Bure",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
