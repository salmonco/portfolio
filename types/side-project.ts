export type SideStatus = "진행중" | "완료";

export interface SideProject {
  id: number;
  title: string;
  period: {
    start: string;
    end: string | null;
  };
  status: SideStatus;
  techStack: string[];
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
  purpose: string;
  tech: string;
  role: string;
  features: string;
  result: string;
}
