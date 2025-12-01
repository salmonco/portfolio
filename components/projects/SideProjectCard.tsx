import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SideProject } from "@/types/side-project";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackTags } from "./TechStackTags";

interface Props {
  project: SideProject;
}

export function SideProjectCard({ project }: Props) {
  const statusColor =
    project.status === "진행중"
      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      : "bg-green-100 text-green-800 hover:bg-green-200";

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg sm:text-xl mb-2">
              {project.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {project.period.start} ~ {project.period.end || "진행중"}
            </p>
          </div>
          <Badge className={`${statusColor} shrink-0 self-start`}>
            {project.status}
          </Badge>
        </div>
        <ProjectLinks links={project.links} />
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <span className="font-semibold text-sm">목적:</span>
          <span className="text-sm text-muted-foreground ml-2">
            {project.purpose}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm">사용 기술:</span>
          <span className="text-sm text-muted-foreground ml-2">
            {project.tech}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm">역할:</span>
          <span className="text-sm text-muted-foreground ml-2">
            {project.role}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm">주요 기능:</span>
          <span className="text-sm text-muted-foreground ml-2">
            {project.features}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm">결과 / 배운 점:</span>
          <span className="text-sm text-muted-foreground ml-2">
            {project.result}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
