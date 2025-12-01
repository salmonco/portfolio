import { ExternalLink } from "lucide-react";

interface Props {
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
}

export function ProjectLinks({ links }: Props) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {links.web && (
        <a
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
        >
          🌐 Web
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {links.ios && (
        <a
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
        >
          📱 iOS
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {links.android && (
        <a
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
        >
          🤖 Android
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
        >
          💻 GitHub
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
