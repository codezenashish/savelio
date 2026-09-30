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
    return <div className="size-10" aria-hidden="true" />;
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
      aria-label="Toggle dark/light theme"
      className=""
    >
      <MorphIcon icon={isDark ? Sun : Moon} />
    </button>
  );
}

export default ModeToggle;
