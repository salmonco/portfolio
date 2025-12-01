import { Badge } from "@/components/ui/badge";

interface Props {
  techStack: string[];
}

export function TechStackTags({ techStack }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {techStack.map((tech, idx) => (
        <Badge key={idx} variant="secondary" className="text-xs font-normal">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
