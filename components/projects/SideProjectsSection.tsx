import { PROJECT_DATA } from "@/data/projects";
import { SideProjectCard } from "./SideProjectCard";

export function SideProjectsSection() {
  return (
    <section className="w-full mb-12 sm:mb-16 lg:mb-20">
      <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
        Side Projects
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {PROJECT_DATA.side.map((project) => (
          <SideProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
