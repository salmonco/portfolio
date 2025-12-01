import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SideProject } from "@/types/side-project";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackTags } from "./TechStackTags";

interface Props {
  project: SideProject;
}

export function SideProjectCard({ project }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{project.title}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              {project.period.start} ~ {project.period.end || "진행중"}
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              project.status === "진행중"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {project.status}
          </span>
        </div>
        <ProjectLinks links={project.links} />
        <TechStackTags techStack={project.techStack} />
      </CardHeader>
      <CardContent>
        <p className="mb-1">
          <strong className="font-semibold">목적:</strong> {project.purpose}
        </p>
        <p className="mb-1">
          <strong className="font-semibold">사용 기술:</strong> {project.tech}
        </p>
        <p className="mb-1">
          <strong className="font-semibold">역할:</strong> {project.role}
        </p>
        <p className="mb-1">
          <strong className="font-semibold">주요 기능:</strong>{" "}
          {project.features}
        </p>
        <p className="mb-1">
          <strong className="font-semibold">결과 / 배운 점:</strong>{" "}
          {project.result}
        </p>
      </CardContent>
      <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
    </Card>
  );
}
