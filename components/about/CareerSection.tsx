"use client";

import { CAREER_DATA } from "@/data/career";
import { startTransition, useEffect, useState } from "react";
import { CareerCard } from "./CareerCard";

export function CareerSection() {
  const [expandedCareers, setExpandedCareers] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#career")) {
      // startTransition: useEffect 내 setState의 cascading render 에러 방지
      // 토글 열기는 긴급하지 않은 업데이트이므로 transition으로 처리
      startTransition(() => {
        if (hash === "#career") {
          const allExpanded = CAREER_DATA.reduce((acc, career) => {
            acc[career.id] = true;
            return acc;
          }, {} as Record<number, boolean>);
          setExpandedCareers(allExpanded);
        } else {
          const careerId = Number(hash.replace("#career-", ""));
          setExpandedCareers({ [careerId]: true });
        }
      });

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
