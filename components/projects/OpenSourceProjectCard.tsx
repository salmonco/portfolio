import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { OpenSourceProject } from "@/types/opensource-project";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackTags } from "./TechStackTags";

interface Props {
  project: OpenSourceProject;
}

export function OpenSourceProjectCard({ project }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <ProjectLinks links={project.links} />
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
    </Card>
  );
}
