export interface OpenSourceProject {
  id: number;
  title: string;
  description: string;
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
}
