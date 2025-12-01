import type { SideStatus } from "@/types/side-project";
import type { StartupStatus } from "@/types/startup-project";

export const getStartupStatus = (
  startDate: string,
  endDate: string | null
): StartupStatus => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const monthsDiff =
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (endDate) return "중단";
  if (monthsDiff < 3) return "MVP 개발 완료";
  return "PMF 검증 완료";
};

export const getSideStatus = (endDate: string | null): SideStatus => {
  return endDate ? "완료" : "진행중";
};
