"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MorphIcon } from "morphicons/react";
import { Moon, Sun } from "lucide";
import { createUISFX } from "uisfx";
import { Button } from "@/components/ui";

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
        className="size-9 rounded-md border border-transparent"
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
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="size-9 rounded-lg border-border/70 text-muted-foreground hover:text-foreground"
    >
      <MorphIcon icon={isDark ? Sun : Moon} size={17} />
    </Button>
  );
}

export default ModeToggle;
