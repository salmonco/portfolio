"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { StartupProject } from "@/types/startup-project";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackTags } from "./TechStackTags";

interface Props {
  project: StartupProject;
}

export function StartupProjectCard({ project }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});

  const statusColor =
    project.status === "MVP 개발 중"
      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      : project.status === "MVP 개발 완료"
      ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
      : project.status === "PMF 검증 완료"
      ? "bg-green-100 text-green-800 hover:bg-green-200"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <Card id={`project-${project.id}`} className="overflow-hidden">
      <CardHeader className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm sm:text-base mb-2">
              {project.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {project.period.start} ~ {project.period.end || "진행중"}
            </p>
          </div>
          <Badge className={`${statusColor} shrink-0 self-start`}>
            {project.status}
          </Badge>
        </div>
        <ProjectLinks links={project.links} />
        <CardDescription className="text-sm sm:text-base">
          {project.summary}
        </CardDescription>
        {project.achievements.length > 0 && (
          <div className="mt-2">
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
              {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="ghost"
          onClick={() => {
            trackEvent("startup_project_card_toggle", {
              project_id: project.id,
              expanded: !isExpanded,
            });
            setIsExpanded(!isExpanded);
          }}
          className="w-full justify-start text-primary hover:text-primary"
        >
          {isExpanded ? (
            <ChevronDown className="mr-2 h-4 w-4" />
          ) : (
            <ChevronRight className="mr-2 h-4 w-4" />
          )}
          {isExpanded ? "접기" : "자세히 보기"}
        </Button>

        {isExpanded && (
          <div className="space-y-6 pt-4">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                1. 목적
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.purpose}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                2. 배경
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.background}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                3. 가치제안
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                {project.valueProposition.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                4. 원칙
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                {project.principles.map((principle, idx) => (
                  <li key={idx}>{principle}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                5. 목표
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                {project.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                6. 주요 지표
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-3 py-2 text-left text-xs font-medium">
                          지표
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium">
                          목표
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium hidden sm:table-cell">
                          선정 근거
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium hidden md:table-cell">
                          측정 방법
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {project.metrics.map((m, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-2 text-xs sm:text-sm">
                            {m.metric}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm">
                            {m.target}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm hidden sm:table-cell">
                            {m.reason}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm hidden md:table-cell">
                            {m.method}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                7. 로드맵
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-3 py-2 text-left text-xs font-medium">
                          단계
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium">
                          내용
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium hidden sm:table-cell">
                          ETA
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium">
                          상태
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {project.roadmap.map((r, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-2 text-xs sm:text-sm">
                            {r.stage}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm">
                            {r.content}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm hidden sm:table-cell">
                            {r.eta}
                          </td>
                          <td className="px-3 py-2 text-xs sm:text-sm">
                            {r.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                8. FAQ
              </h3>
              <div className="space-y-2">
                {project.faq.map((item, idx) => (
                  <Card key={idx} className="border">
                    <button
                      onClick={() => {
                        trackEvent("startup_project_faq_toggle", {
                          project_id: project.id,
                          faq_index: idx,
                          expanded: !expandedFaqs[idx],
                        });
                        setExpandedFaqs((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }));
                      }}
                      className="w-full p-3 sm:p-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium text-sm sm:text-base">
                        Q. {item.question}
                      </span>
                      {expandedFaqs[idx] ? (
                        <ChevronDown className="h-4 w-4 shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      )}
                    </button>
                    {expandedFaqs[idx] && (
                      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          A. {item.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
