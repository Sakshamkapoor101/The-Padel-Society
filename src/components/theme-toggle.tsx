"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Minimal class-based theme toggle (no next-themes dependency).
 * Flips the `.dark` class on <html> and remembers the choice.
 * Icon state is driven entirely by CSS (`dark:` variants), so no
 * React state is needed — the initial class is set pre-paint in the layout.
 */
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("tps-theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable — ignore */
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label="Toggle colour world"
      className="rounded-full"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </Button>
  );
}
