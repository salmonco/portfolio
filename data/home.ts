import { STARTUP_PROJECT_DATA } from "@/data/startup-projects";

const MAIN_PROJECTS_LIMIT = 3;

export const HOME_DATA = {
  hero: {
    title: "안녕하세요",
    description: "설명",
  },
  mainProjects: STARTUP_PROJECT_DATA.slice(0, MAIN_PROJECTS_LIMIT).map(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.summary,
    })
  ),
} as const;
