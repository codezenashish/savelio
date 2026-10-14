import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "brand" | "success" | "neutral";
  size?: "default" | "sm";
}

export function Badge({
  className,
  variant = "default",
  size = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "border-transparent bg-primary text-primary-foreground shadow-2xs",
    secondary:
      "border-border/60 bg-secondary text-secondary-foreground",
    outline:
      "border-border text-foreground bg-transparent",
    brand:
      "border-primary/20 bg-primary/10 text-primary",
    success:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    neutral:
      "border-border/60 bg-muted/80 text-muted-foreground",
  }[variant];

  const sizeStyles = {
    default: "px-2 py-0.5 text-xs font-medium",
    sm: "px-1.5 py-0.2 text-[10px] font-medium tracking-wide uppercase",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border font-sans select-none",
        variantStyles,
        sizeStyles,
        className,
      )}
      {...props}
    />
  );
}
