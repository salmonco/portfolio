import { STARTUP_PROJECT } from "./startup-projects";

const MAIN_PROJECTS_LIMIT = 3;

export const HOME_DATA = {
  hero: {
    title: "No metrics, no improvement.",
    slogan: "지표 없는 개선을 믿지 않는 프론트엔드 개발자",
    description:
      "문제 정의가 흐리면 개발을 멈춥니다. 먼저 문제를 정의하고, 어떻게 측정할지 정한 다음 코드를 씁니다. 2023년 말, SW마에스트로에서 프론트엔드를 시작해 스타트업에서 백오피스를 개발하며 실무를 익혔고, 창업동아리에서 기획자·마케터와 매주 협업하며 '왜 만드는가'를 먼저 묻는 습관을 들였습니다. 지금은 TypeScript와 React의 동작 원리를 깊이 파고들며, 내실 있는 프론트엔드 개발자로 성장하고 있습니다.",
  },
  mainProjects: STARTUP_PROJECT.slice(0, MAIN_PROJECTS_LIMIT).map(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.summary,
    })
  ),
} as const;
