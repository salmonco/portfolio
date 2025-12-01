"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import Link from "next/link";
import { ReactNode } from "react";

interface TrackableLinkProps {
  href: string;
  eventName: string;
  eventProperties?: Record<string, unknown>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackableLink({
  href,
  eventName,
  eventProperties,
  children,
  className,
  target,
  rel,
}: TrackableLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, eventProperties);
  };

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
