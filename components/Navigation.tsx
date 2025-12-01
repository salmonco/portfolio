"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center space-x-4 py-4 border-b">
      <Link href="/">
        <Button
          variant="link"
          className={cn(
            pathname === "/" && "underline underline-offset-4 font-semibold"
          )}
        >
          Home
        </Button>
      </Link>
      <Link href="/projects">
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
      <Link href="/about">
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
