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
        <CardTitle className="text-sm sm:text-base">{project.title}</CardTitle>
        <ProjectLinks links={project.links} />
        <CardDescription className="text-sm">{project.summary}</CardDescription>
        {project.achievements.length > 0 && (
          <div>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
              {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-xs sm:text-sm text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
