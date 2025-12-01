import { OpenSourceProjectsSection } from "@/components/projects/OpenSourceProjectsSection";
import { SideProjectsSection } from "@/components/projects/SideProjectsSection";
import { StartupProjectsSection } from "@/components/projects/StartupProjectsSection";

export default function Projects() {
  return (
    <main className="container mx-auto px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-20 max-w-4xl">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-12 sm:mb-16 leading-relaxed">
        Projects
      </h1>
      <StartupProjectsSection />
      <SideProjectsSection />
      <OpenSourceProjectsSection />
    </main>
  );
}
