import { getSideStatus } from "@/lib/project-utils";
import type { SideProject } from "@/types/side-project";

export const SIDE_PROJECT: SideProject[] = [
  {
    id: 1,
    title: "Side Project Title 1",
    period: {
      start: "2024.01",
      end: null, // null이면 진행중
    },
    get status() {
      return getSideStatus(this.period.end);
    },
    techStack: ["React", "Node.js"],
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
    period: {
      start: "2023.06",
      end: "2023.12",
    },
    get status() {
      return getSideStatus(this.period.end);
    },
    techStack: ["Vue.js", "Python"],
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
];
