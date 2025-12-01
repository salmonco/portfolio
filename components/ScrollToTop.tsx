"use client";

import { trackEvent } from "@/amplitude/trackEvent";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Button
      onClick={() => {
        trackEvent("scroll_to_top_click");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
