import { STARTUP_PROJECT } from "./startup-projects";

const MAIN_PROJECTS_LIMIT = 3;

export const HOME_DATA = {
  hero: {
    title: "Invisible, but Valuable",
    slogan: "보이지 않는 문제를 발견하고, 해결합니다.",
    description:
      "2023년 말, SW마에스트로 활동에 참여하며 프론트엔드 개발을 시작했습니다. 이후 스타트업에서 사내 직원들을 위한 백오피스를 개발했고, 실무 경험은 서비스 운영에 관심이 생기게 된 계기가 되었습니다. 창업동아리에 들어가 타 직군과 매주 회의하며 소프트스킬을 길렀고, 프론트엔드 개발자로서 서비스 개발에 필요한 HTML, CSS, JavaScript를 공부하게 되었습니다. 현재는 프론트엔드에 대한 깊은 이해를 위해 TypeScript와 React를 공부하면서 깊이 있는 지식을 가진, 내실 있는 프론트엔드 개발자가 되기 위해 노력하고 있습니다.",
  },
  mainProjects: STARTUP_PROJECT.slice(0, MAIN_PROJECTS_LIMIT).map(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.summary,
    })
  ),
} as const;
