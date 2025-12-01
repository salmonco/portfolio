import { getStartupStatus } from "@/lib/project-utils";
import type { StartupProject } from "@/types/startup-project";

export const STARTUP_PROJECT: StartupProject[] = [
  {
    id: 1,
    title: "Startup Project Title 1",
    period: {
      start: "2024.01",
      end: null, // null이면 진행중
    },
    get status() {
      return getStartupStatus(this.period.start, this.period.end);
    },
    summary:
      "프로젝트의 핵심 내용을 2~3문장으로 요약합니다. 어떤 문제를 해결하고, 어떤 가치를 제공하는지 간단히 설명합니다.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      web: "https://example.com",
      ios: "",
      android: "",
      github: "https://github.com/example/repo",
    },
    purpose: "이 문서의 목적을 2~3문장 이내로 설명합니다.",
    background:
      "프로젝트를 시작하게 된 배경을 2~3문단으로 설명합니다. 개발자는 물론, 이 문서를 접하게 된 그 누구라도 이 섹션만 읽으면 일련의 진행 상황, 풀고자 하는 문제, 그리고 앞으로의 방향성에 대해 이해할 수 있어야 합니다.",
    valueProposition: [
      "고객이 이 기능을 고용하는 첫 번째 이유",
      "고객이 이 기능을 고용하는 두 번째 이유",
      "고객이 이 기능을 고용하는 세 번째 이유",
    ],
    principles: [
      "기능 개발 시 결정의 잣대가 되는 첫 번째 원칙",
      "기능 개발 시 결정의 잣대가 되는 두 번째 원칙",
    ],
    goals: ["수치화된 첫 번째 목표", "수치화된 두 번째 목표"],
    metrics: [
      {
        metric: "지표명 1",
        target: "목표값",
        reason: "선정 근거",
        method: "측정 방법",
      },
      {
        metric: "지표명 2",
        target: "목표값",
        reason: "선정 근거",
        method: "측정 방법",
      },
    ],
    roadmap: [
      {
        stage: "1단계 (MVP)",
        content: "MVP 개발 내용",
        eta: "2025.11.30",
        status: "🟢 Green",
      },
      {
        stage: "2단계",
        content: "2단계 개발 내용",
        eta: "2026.02.28",
        status: "🟡 Yellow",
      },
    ],
    faq: [
      { question: "자주 묻는 질문 1", answer: "답변 1" },
      { question: "자주 묻는 질문 2", answer: "답변 2" },
    ],
  },
];
