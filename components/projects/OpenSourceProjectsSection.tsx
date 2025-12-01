import { PROJECT_DATA } from "@/data/projects";
import { OpenSourceProjectCard } from "./OpenSourceProjectCard";

export function OpenSourceProjectsSection() {
  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8 text-center">Open Source</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECT_DATA.openSource.map((project) => (
          <OpenSourceProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
