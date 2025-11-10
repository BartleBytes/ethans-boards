"use client";

import { useCallback } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#1f2b24] text-white shadow-lg transition hover:bg-[#26372f]"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
