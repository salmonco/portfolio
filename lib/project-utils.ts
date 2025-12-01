import type { SideStatus } from "@/types/side-project";

export const getSideStatus = (endDate: string | null): SideStatus => {
  return endDate ? "완료" : "진행중";
};
