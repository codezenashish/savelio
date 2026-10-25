"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MorphIcon } from "morphicons/react";
import { Moon, Sun } from "lucide";
import { createUISFX } from "uisfx";
import { Button } from "@/components/ui";

const soundEffectsPlayer = createUISFX({
  pack: "zen",
});

const emptySubscribe = () => () => {};

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isComponentMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!isComponentMounted) {
    return (
      <div
        className="size-9 rounded-md border border-transparent"
        aria-hidden="true"
      />
    );
  }

  const isCurrentThemeDark = theme === "dark";

  const handleThemeToggleClick = () => {
    soundEffectsPlayer.play("press");
    setTheme(isCurrentThemeDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggleClick}
      aria-label={isCurrentThemeDark ? "Switch to light theme" : "Switch to dark theme"}
      className="size-9 rounded-lg border-border/70 text-muted-foreground hover:text-foreground"
    >
      <MorphIcon icon={isCurrentThemeDark ? Sun : Moon} size={17} />
    </Button>
  );
}

export default ModeToggle;