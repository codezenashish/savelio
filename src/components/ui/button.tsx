import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "subtle";
  size?: "default" | "sm" | "xs" | "lg" | "icon" | "icon-sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const variantStyles = {
      default:
        "bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90 active:bg-primary/95",
      secondary:
        "border border-border bg-secondary text-secondary-foreground shadow-2xs hover:bg-accent hover:text-accent-foreground active:bg-secondary/80",
      outline:
        "border border-border/80 bg-card/60 text-foreground shadow-2xs hover:bg-muted hover:border-border active:bg-muted/80",
      ghost:
        "text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/80",
      subtle:
        "border border-border/60 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/90",
    }[variant];

    const sizeStyles = {
      default: "h-9 px-3.5 py-2 text-sm",
      sm: "h-8 px-2.5 py-1 text-xs font-medium",
      xs: "h-6 px-2 py-0.5 text-[11px] font-medium",
      lg: "h-10 px-5 py-2.5 text-base",
      icon: "size-9 p-0",
      "icon-sm": "size-7 p-0",
    }[size];

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none cursor-pointer",
          "transition-colors duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          variantStyles,
          sizeStyles,
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
