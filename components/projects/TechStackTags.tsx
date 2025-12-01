interface Props {
  techStack: string[];
}

export function TechStackTags({ techStack }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {techStack.map((tech, idx) => (
        <span
          key={idx}
          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
