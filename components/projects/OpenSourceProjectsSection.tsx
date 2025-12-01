import { PROJECT_DATA } from "@/data/projects";
import { OpenSourceProjectCard } from "./OpenSourceProjectCard";

export function OpenSourceProjectsSection() {
  return (
    <section className="w-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
        Open Source
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {PROJECT_DATA.openSource.map((project) => (
          <OpenSourceProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
