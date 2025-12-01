"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CareerProps {
  career: {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
    techStack: string[];
    projects: Array<{
      title: string;
      period: string;
      description: string;
      tasks?: string[];
      achievements?: string[];
    }>;
    activities: string[];
    team: string;
  };
}

export function CareerCard({ career }: CareerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-2 border-muted pl-4 pb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold">
            {career.company}
          </h3>
          <p className="text-xs text-muted-foreground">
            {career.position} · {career.team}
          </p>
        </div>
        <span className="text-xs text-muted-foreground">{career.period}</span>
      </div>

      <Button
        variant="ghost"
        onClick={() => {
          trackEvent("career_card_toggle", {
            career_id: career.id,
            expanded: !isExpanded,
          });
          setIsExpanded(!isExpanded);
        }}
        className="h-6 px-2 text-xs text-muted-foreground hover:text-primary -ml-2 mb-2"
      >
        {isExpanded ? (
          <ChevronDown className="mr-1 h-3 w-3" />
        ) : (
          <ChevronRight className="mr-1 h-3 w-3" />
        )}
        {isExpanded ? "접기" : "자세히 보기"}
      </Button>

      {isExpanded && (
        <div className="space-y-3 text-xs">
          <div>
            <p className="text-muted-foreground mb-2">{career.description}</p>
            <div className="flex flex-wrap gap-1">
              {career.techStack.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs py-0 h-4 px-1.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs">주요 프로젝트</h4>
            {career.projects.map((project, idx) => (
              <div key={idx} className="pl-2 border-l border-muted space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                  <h5 className="font-medium text-xs">{project.title}</h5>
                  <span className="text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {project.tasks && (
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
                    {project.tasks.map((task, taskIdx) => (
                      <li key={taskIdx}>{task}</li>
                    ))}
                  </ul>
                )}
                {project.achievements && (
                  <div className="mt-1 p-1.5 bg-primary/5 rounded border-l border-primary">
                    <ul className="list-disc list-inside space-y-0.5 text-xs">
                      {project.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="font-medium">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Activities */}
          {career.activities.length > 0 && (
            <div className="space-y-1">
              <h4 className="font-semibold text-xs">기술 공유 활동</h4>
              <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
                {career.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
