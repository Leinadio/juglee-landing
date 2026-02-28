"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 transition-colors">
        <Monitor className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      </button>
    );
  }

  function cycle() {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  }

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={cycle}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
    </button>
  );
}
