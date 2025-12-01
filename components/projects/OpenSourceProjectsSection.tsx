import { PROJECT_DATA } from "@/data/projects";
import { OpenSourceProjectCard } from "./OpenSourceProjectCard";

export function OpenSourceProjectsSection() {
  return (
    <section className="w-full">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
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
