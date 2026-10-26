"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";

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
    setTheme(isCurrentThemeDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggleClick}
      aria-label={isCurrentThemeDark ? "Switch to light theme" : "Switch to dark theme"}
      className="size-9 rounded-lg border-border/70 text-muted-foreground hover:text-foreground cursor-pointer"
    >
      {isCurrentThemeDark ? (
        <Sun className="size-4.5 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="size-4.5 transition-transform duration-200 hover:-rotate-12" />
      )}
    </Button>
  );
}

export default ModeToggle;