export interface OpenSourceProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
}
