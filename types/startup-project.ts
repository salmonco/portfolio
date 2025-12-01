export type StartupStatus =
  | "MVP 개발 중"
  | "MVP 개발 완료"
  | "PMF 검증 완료"
  | "중단";

export interface StartupProject {
  id: number;
  title: string;
  period: {
    start: string;
    end: string | null;
  };
  status: StartupStatus;
  summary: string;
  techStack: string[];
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
  purpose: string;
  background: string;
  valueProposition: string[];
  principles: string[];
  goals: string[];
  metrics: Array<{
    metric: string;
    target: string;
    reason: string;
    method: string;
  }>;
  roadmap: Array<{
    stage: string;
    content: string;
    eta: string;
    status: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}
