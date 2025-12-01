import { OPEN_SOURCE_PROJECT_DATA } from "@/data/opensource-projects";
import { SIDE_PROJECT_DATA } from "@/data/side-projects";
import { STARTUP_PROJECT_DATA } from "@/data/startup-projects";

export const PROJECT_DATA = {
  startup: STARTUP_PROJECT_DATA,
  side: SIDE_PROJECT_DATA,
  openSource: OPEN_SOURCE_PROJECT_DATA,
} as const;
