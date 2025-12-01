import { OpenSourceProjectsSection } from "@/components/projects/OpenSourceProjectsSection";
import { SideProjectsSection } from "@/components/projects/SideProjectsSection";
import { StartupProjectsSection } from "@/components/projects/StartupProjectsSection";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-16">Projects</h1>
      <StartupProjectsSection />
      <SideProjectsSection />
      <OpenSourceProjectsSection />
    </main>
  );
}
