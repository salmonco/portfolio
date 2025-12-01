import { getSideStatus } from "@/lib/project-utils";
import type { SideProject } from "@/types/side-project";

export const SIDE_PROJECT: SideProject[] = [
  {
    id: 1,
    title: "제주 농업 통계 시스템",
    period: {
      start: "2025.11",
      end: null,
    },
    get status() {
      return getSideStatus(this.period.end);
    },
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "React-Query",
      "TailwindCSS",
      "d3",
      "OpenLayers",
    ],
    links: {
      web: "https://agri.jeju.go.kr/stats/",
      ios: "",
      android: "",
      github: "https://github.com/salmonco/jadx-stats",
    },
    purpose:
      "제주 농업의 주요 통계 지표와 주제별 지도를 제공하는 통계 시스템 개발",
    role: "외주 프로젝트 - 특화 통계 고도화 개발",
    features: "제주 농업 통계 지표 시각화, 주제별 지도 제공",
    result: "제주 농업 통계 시스템 특화 통계 고도화 완료",
  },
];
