"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MorphIcon } from "morphicons/react";
import { Moon, Sun } from "lucide";
import { createUISFX } from "uisfx";

const ui = createUISFX({
  pack: "zen",
});

const emptySubscribe = () => () => {};

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className="size-9 rounded-lg border border-transparent"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    ui.play("press");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground shadow-2xs transition hover:bg-muted hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      <MorphIcon icon={isDark ? Sun : Moon} size={18} />
    </button>
  );
}

export default ModeToggle;
