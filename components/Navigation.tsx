"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import { Logo } from "@/components/Logo";
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
    <nav className="border-b">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex gap-2">
            <Link href="/" onClick={() => handleNavClick("/")}>
              <Button
                variant="link"
                className={cn(
                  pathname === "/" &&
                    "underline underline-offset-4 font-semibold"
                )}
              >
                Home
              </Button>
            </Link>
            <Link href="/projects" onClick={() => handleNavClick("/projects")}>
              <Button
                variant="link"
                className={cn(
                  pathname.startsWith("/projects") &&
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
          </div>
        </div>
      </div>
    </nav>
  );
}
