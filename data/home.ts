import { STARTUP_PROJECT } from "./startup-projects";

const MAIN_PROJECTS_LIMIT = 3;

export const HOME_DATA = {
  hero: {
    title: "발견하고, 증명하는 개발자 봉지수",
    slogan: "Find the problem, Prove the impact",
    description:
      "VOC 30건을 0건으로, 3주 만에 MVP 출시, 7일차 리텐션 17%. 데이터로 임팩트를 만듭니다.",
  },
  mainProjects: STARTUP_PROJECT.slice(0, MAIN_PROJECTS_LIMIT).map(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.summary,
    })
  ),
} as const;
