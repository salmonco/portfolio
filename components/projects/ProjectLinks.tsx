import { TrackableLink } from "@/components/TrackableLink";
import { ExternalLink } from "lucide-react";

interface Props {
  links: {
    web: string;
    ios: string;
    android: string;
    github: string;
  };
  projectTitle?: string;
}

export function ProjectLinks({ links, projectTitle }: Props) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {links.web && (
        <TrackableLink
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
          eventName="project_link_click"
          eventProperties={{ type: "web", project_title: projectTitle }}
        >
          🌐 Web
          <ExternalLink className="h-3 w-3" />
        </TrackableLink>
      )}
      {links.ios && (
        <TrackableLink
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
          eventName="project_link_click"
          eventProperties={{ type: "ios", project_title: projectTitle }}
        >
          📱 iOS
          <ExternalLink className="h-3 w-3" />
        </TrackableLink>
      )}
      {links.android && (
        <TrackableLink
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
          eventName="project_link_click"
          eventProperties={{ type: "android", project_title: projectTitle }}
        >
          🤖 Android
          <ExternalLink className="h-3 w-3" />
        </TrackableLink>
      )}
      {links.github && (
        <TrackableLink
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
          eventName="project_link_click"
          eventProperties={{ type: "github", project_title: projectTitle }}
        >
          💻 GitHub
          <ExternalLink className="h-3 w-3" />
        </TrackableLink>
      )}
    </div>
  );
}
