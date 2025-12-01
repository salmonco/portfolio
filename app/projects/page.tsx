import { OpenSourceProjectsSection } from "@/components/projects/OpenSourceProjectsSection";
import { SideProjectsSection } from "@/components/projects/SideProjectsSection";
import { StartupProjectsSection } from "@/components/projects/StartupProjectsSection";

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-6xl">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center">
        Projects
      </h1>
      <StartupProjectsSection />
      <SideProjectsSection />
      <OpenSourceProjectsSection />
    </main>
  );
}
