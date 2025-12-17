"use client";

import { PROJECT_DATA } from "@/data/projects";
import { startTransition, useEffect, useState } from "react";
import { SideProjectCard } from "./SideProjectCard";
import { StartupProjectCard } from "./StartupProjectCard";

export function SideProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      startTransition(() => {
        const id = hash.replace("#project-", "");
        const projectId = Number(id);
        setExpandedProjects({ [projectId]: true });
      });

      setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <section className="w-full mb-12 sm:mb-16 lg:mb-20">
      <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
        Side Projects
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {/* 상세 정보가 있는 사이드 프로젝트 */}
        {PROJECT_DATA.sideDetailed.map((project) => (
          <StartupProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedProjects[project.id] || false}
            onToggle={(expanded) =>
              setExpandedProjects((prev) => ({
                ...prev,
                [project.id]: expanded,
              }))
            }
          />
        ))}
        {/* 간단한 사이드 프로젝트 (외주 등) */}
        {PROJECT_DATA.side.map((project) => (
          <SideProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
