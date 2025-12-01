import { PROJECT_DATA } from "@/data/projects";
import { SideProjectCard } from "./SideProjectCard";

export function SideProjectsSection() {
  return (
    <section className="w-full max-w-4xl mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Side Projects</h2>
      <div className="space-y-8">
        {PROJECT_DATA.side.map((project) => (
          <SideProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
