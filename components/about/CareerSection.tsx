"use client";

import { CAREER_DATA } from "@/data/career";
import { useEffect, useState } from "react";
import { CareerCard } from "./CareerCard";

export function CareerSection() {
  const [expandedCareers, setExpandedCareers] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#career")) {
      if (hash === "#career") {
        // 모든 커리어 카드 펼치기
        const allExpanded = CAREER_DATA.reduce((acc, career) => {
          acc[career.id] = true;
          return acc;
        }, {} as Record<number, boolean>);
        setExpandedCareers(allExpanded);
      } else {
        // 특정 커리어 카드만 펼치기
        const careerId = Number(hash.replace("#career-", ""));
        setExpandedCareers({ [careerId]: true });
      }

      setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <section id="career" className="w-full mb-16 sm:mb-20 lg:mb-24">
      <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
        Career
      </h2>
      <div className="space-y-0">
        {CAREER_DATA.map((career) => (
          <CareerCard
            key={career.id}
            career={career}
            isExpanded={expandedCareers[career.id] || false}
            onToggle={(expanded) =>
              setExpandedCareers((prev) => ({
                ...prev,
                [career.id]: expanded,
              }))
            }
          />
        ))}
      </div>
    </section>
  );
}
