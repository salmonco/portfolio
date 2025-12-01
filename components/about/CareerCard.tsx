"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CareerProps {
  career: {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
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
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl sm:text-2xl">
              {career.company}
            </CardTitle>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {career.position} · {career.team}
            </p>
          </div>
          <span className="text-sm text-muted-foreground">{career.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-start text-primary hover:text-primary mb-2"
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
            <p className="text-sm sm:text-base">{career.description}</p>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base sm:text-lg">
                주요 프로젝트
              </h3>
              {career.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="pl-4 border-l-2 border-muted space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-sm sm:text-base">
                      {project.title}
                    </h4>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {project.tasks && (
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                      {project.tasks.map((task, taskIdx) => (
                        <li key={taskIdx}>{task}</li>
                      ))}
                    </ul>
                  )}
                  {project.achievements && (
                    <div className="mt-2 p-2 bg-primary/5 rounded border-l-2 border-primary">
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
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
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg">
                기술 공유 활동
              </h3>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                {career.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
