export const SIDE_PROJECT_DATA = [
  {
    id: 1,
    title: "Side Project Title 1",
    status: "진행중" as const, // "진행중" | "완료"
    links: {
      web: "",
      ios: "",
      android: "",
      github: "",
    },
    purpose: "프로젝트의 목적.",
    tech: "사용된 기술 스택.",
    role: "프로젝트 내에서 본인의 역할.",
    features: "핵심 기능 설명.",
    result: "프로젝트 결과 및 학습 내용.",
  },
  {
    id: 2,
    title: "Side Project Title 2",
    status: "완료" as const, // "진행중" | "완료"
    links: {
      web: "",
      ios: "",
      android: "",
      github: "",
    },
    purpose: "프로젝트의 목적.",
    tech: "사용된 기술 스택.",
    role: "프로젝트 내에서 본인의 역할.",
    features: "핵심 기능 설명.",
    result: "프로젝트 결과 및 학습 내용.",
  },
] as const;
