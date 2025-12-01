export interface OpenSourceProject {
  id: number;
  title: string;
  summary: string;
  description: string;
  achievements: string[];
  techStack: string[];
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
}
