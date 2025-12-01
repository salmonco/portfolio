import {
  Card,
  CardContent,
  CardDescription,
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
    <Card className="h-full flex flex-col">
      <CardHeader className="space-y-3">
        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
        <ProjectLinks links={project.links} />
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
