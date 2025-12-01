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
    <div className="flex gap-3 mt-2">
      {links.web && (
        <a
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          🌐 Web
        </a>
      )}
      {links.ios && (
        <a
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          📱 iOS
        </a>
      )}
      {links.android && (
        <a
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          🤖 Android
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          💻 GitHub
        </a>
      )}
    </div>
  );
}
