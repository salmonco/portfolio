"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const handleNavClick = (destination: string) => {
    trackEvent("navigation_button_click", {
      from: pathname,
      to: destination,
    });
  };

  return (
    <nav className="flex justify-center space-x-4 py-4 border-b">
      <Link href="/" onClick={() => handleNavClick("/")}>
        <Button
          variant="link"
          className={cn(
            pathname === "/" && "underline underline-offset-4 font-semibold"
          )}
        >
          Home
        </Button>
      </Link>
      <Link href="/projects" onClick={() => handleNavClick("/projects")}>
        <Button
          variant="link"
          className={cn(
            pathname === "/projects" &&
              "underline underline-offset-4 font-semibold"
          )}
        >
          Projects
        </Button>
      </Link>
      <Link href="/about" onClick={() => handleNavClick("/about")}>
        <Button
          variant="link"
          className={cn(
            pathname === "/about" &&
              "underline underline-offset-4 font-semibold"
          )}
        >
          About
        </Button>
      </Link>
    </nav>
  );
}
