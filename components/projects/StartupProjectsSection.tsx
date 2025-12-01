"use client";

import { PROJECT_DATA } from "@/data/projects";
import { useEffect, useState } from "react";
import { StartupProjectCard } from "./StartupProjectCard";

export function StartupProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#project-", "");
      setTimeout(() => {
        setExpandedProjects({ [Number(id)]: true });
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
    }
  }, []);

  return (
    <section className="w-full mb-12 sm:mb-16 lg:mb-20">
      <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
        Startup Projects
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {PROJECT_DATA.startup.map((project) => (
          <StartupProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
