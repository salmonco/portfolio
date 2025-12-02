"use client";

import { PROJECT_DATA } from "@/data/projects";
import { startTransition, useEffect, useState } from "react";
import { StartupProjectCard } from "./StartupProjectCard";

export function StartupProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // startTransition: useEffect 내 setState의 cascading render 에러 방지
      // 프로젝트 상세 열기는 긴급하지 않은 업데이트이므로 transition으로 처리
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
        Startup Projects
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {PROJECT_DATA.startup.map((project) => (
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
      </div>
    </section>
  );
}
