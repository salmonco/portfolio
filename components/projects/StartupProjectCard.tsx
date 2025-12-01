"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { StartupProject } from "@/types/startup-project";
import { useState } from "react";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackTags } from "./TechStackTags";

interface Props {
  project: StartupProject;
}

export function StartupProjectCard({ project }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});

  return (
    <Card id={`project-${project.id}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              {project.period.start} ~ {project.period.end || "진행중"}
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              project.status === "MVP 개발 완료"
                ? "bg-blue-100 text-blue-800"
                : project.status === "PMF 검증 완료"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {project.status}
          </span>
        </div>
        <ProjectLinks links={project.links} />
        <CardDescription className="text-base mt-2">
          {project.summary}
        </CardDescription>
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:underline mb-4"
        >
          {isExpanded ? "▼ 접기" : "▶ 자세히 보기"}
        </button>

        {isExpanded && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. 목적</h3>
              <p>{project.purpose}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. 배경</h3>
              <p>{project.background}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. 가치제안</h3>
              <ol className="list-decimal list-inside space-y-1">
                {project.valueProposition.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. 원칙</h3>
              <ol className="list-decimal list-inside space-y-1">
                {project.principles.map((principle, idx) => (
                  <li key={idx}>{principle}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. 목표</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. 주요 지표</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">지표</th>
                      <th className="border p-2">목표</th>
                      <th className="border p-2">선정 근거</th>
                      <th className="border p-2">측정 방법</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.metrics.map((m, idx) => (
                      <tr key={idx}>
                        <td className="border p-2">{m.metric}</td>
                        <td className="border p-2">{m.target}</td>
                        <td className="border p-2">{m.reason}</td>
                        <td className="border p-2">{m.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. 로드맵</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">단계</th>
                      <th className="border p-2">내용</th>
                      <th className="border p-2">ETA</th>
                      <th className="border p-2">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.roadmap.map((r, idx) => (
                      <tr key={idx}>
                        <td className="border p-2">{r.stage}</td>
                        <td className="border p-2">{r.content}</td>
                        <td className="border p-2">{r.eta}</td>
                        <td className="border p-2">{r.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. FAQ</h3>
              <div className="space-y-2">
                {project.faq.map((item, idx) => (
                  <div key={idx} className="border rounded p-3">
                    <button
                      onClick={() =>
                        setExpandedFaqs((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }))
                      }
                      className="w-full text-left font-semibold flex justify-between items-center"
                    >
                      <span>Q. {item.question}</span>
                      <span>{expandedFaqs[idx] ? "▼" : "▶"}</span>
                    </button>
                    {expandedFaqs[idx] && (
                      <p className="text-gray-700 mt-2">A. {item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
