---
version: alpha
name: Vercel
description: A stark monochrome shadcn/ui theme — pure black primary, Geist typography, and developer-grade minimalism by tweakcn.
colors:
  background: "#fcfcfc"
  foreground: "#000000"
  card: "#ffffff"
  primary: "#000000"
  primary-foreground: "#ffffff"
  secondary: "#ebebeb"
  secondary-foreground: "#000000"
  muted: "#f5f5f5"
  muted-foreground: "#525252"
  accent: "#ebebeb"
  accent-foreground: "#000000"
  destructive: "#e54b4f"
  border: "#e4e4e4"
  input: "#ebebeb"
  ring: "#000000"
  sidebar: "#fcfcfc"
  sidebar-foreground: "#000000"
  sidebar-primary: "#000000"
  sidebar-accent: "#ebebeb"
  chart-1: "#ffae04"
  chart-2: "#2d62ef"
  chart-3: "#a4a4a4"
  chart-4: "#e4e4e4"
  chart-5: "#747474"
  dark-background: "#000000"
  dark-foreground: "#ffffff"
  dark-card: "#090909"
  dark-primary: "#ffffff"
  dark-secondary: "#222222"
  dark-muted: "#1d1d1d"
  dark-muted-foreground: "#a4a4a4"
  dark-accent: "#333333"
  dark-border: "#242424"
  dark-sidebar: "#121212"
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  "2xl": 48px
  section: 64px
  gutter: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.lg}"
    padding: 12px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: 12px
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: 24px
  input:
    backgroundColor: "{colors.input}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: 12px
  sidebar:
    backgroundColor: "{colors.sidebar}"
    textColor: "{colors.sidebar-foreground}"
---

# Vercel

A premade shadcn/ui theme by [tweakcn](https://tweakcn.com). Install tokens with `npx shadcn@latest add @shadcnblocks/theme/vercel`, then keep this DESIGN.md in the project root (or `.agents/`) so coding agents stay on-brand.

## Overview

Vercel is absolute contrast distilled into a design system: pure black on white, white on black, with no middle-ground ambiguity. The theme channels the aesthetic of the Vercel platform — developer-first, typographically precise, and aggressively minimal. Geist is the sole typeface; every pixel of chrome serves function over decoration.

The system is **stark, technical, and high-contrast**. It suits developer tools, deployment platforms, CLI-adjacent products, API documentation, and any product that wants to project engineering rigor. There is no warm tint, no friendly curve, no playful moment — only signal.

Emotional targets: precise, authoritative, fast — never soft, never playful, never decorative.

## Colors

The palette is **absolute monochrome**. Black and white carry all structural and interactive meaning; gray exists only for quiet secondary surfaces.

- **Primary (`#000000`):** Pure black — primary buttons, links, focus rings, and key brand moments. In dark mode, inverts to pure white (`#ffffff`).
- **Secondary (`#ebebeb`):** Light gray — secondary buttons, quiet fills, table alternates. In dark mode, flips to near-black (`#222222`).
- **Muted (`#f5f5f5`):** Subtle off-white for skeleton fills, code backgrounds, and secondary wells.
- **Foreground (`#000000`):** Black text — no softer gray for body copy. Maximum contrast always.
- **Background (`#fcfcfc`):** Near-white canvas — barely off pure white. Clean stage for content.
- **Card (`#ffffff`):** Pure white surfaces — elevated panels against the canvas.
- **Border (`#e4e4e4`):** Light gray separators — subtle, not invisible.
- **Ring (`#000000`):** Black focus ring — same as primary. Focus states are unmissable.
- **Destructive (`#e54b4f`):** Muted red for errors — the only chromatic UI accent in the system.

Dark mode is a true inversion: `#000000` canvas, `#ffffff` text and primary. Card surfaces use near-black (`#090909`). The contrast philosophy stays identical.

## Typography

**Geist** is the only sans-serif face — display, body, and labels. **Geist Mono** covers code and technical fragments. No serif is used.

- **Display / headlines:** Geist Bold, tight tracking (-0.03em). Optically dense and commanding.
- **Body:** Geist Regular at 16px with 1.6 line-height. Clear and readable.
- **Labels / UI chrome:** Geist Medium at 14px. Sentence case; avoid all-caps except monospace labels.
- **Mono:** Geist Mono for code blocks, terminal output, and technical identifiers.

Do not introduce Inter, SF Pro, system-ui stacks, or any warmer humanist sans. Geist is the brand — its geometric sharpness defines the Vercel voice.

## Layout

Use a **tight developer-product rhythm**: 8px base, compact sections, and clear structural borders.

- Prefer a max-width content column (~1200px) with `2rem` horizontal gutters.
- Cards use borders as their primary containment — not shadows, not background contrast.
- Marketing pages: single-message compositions with large headlines, minimal supporting copy, and one CTA.
- App shells: near-white sidebar, white content pane. Navigation is sparse; active states are bold weight or underline, not colored fills.
- Density: high. Vercel is built for information-dense developer UIs — keep spacing purposeful, not lavish.

## Elevation & Depth

Depth is **crisp and shadow-forward** — Vercel uses slightly heavier shadow opacity (`0.09`–`0.18`) than typical minimal themes, creating a sharp paper-on-surface look.

- Shadows are short and defined — no wide blurs or ambient glow.
- Prefer border separation for most containment; use shadow for interactive overlays (popovers, dropdowns).
- Avoid colored shadows, gradients, or glassmorphism. Depth is always grayscale.
- Dark mode: cards float on near-black backgrounds with lighter border edges, not shadow lifts.

## Shapes

Corner radius is **modest** — base `--radius` is `0.5rem` (8px).

- Buttons, inputs, and controls: ~8px (`rounded-lg`).
- Cards and large panels: ~12px (`rounded-xl`).
- Pills/avatars: full rounding only for status dots and truly circular elements.
- Do not balloon to large marketing-style radii or pill-shaped buttons — keep edges structured.

## Components

Built for the shadcn/ui token contract. Prefer semantic tokens (`bg-primary`, `text-muted-foreground`) over raw hex in component code.

- **Primary button:** Black fill, white label. Stark and decisive — one per view when possible.
- **Secondary button:** Light gray fill, black text — quiet alternative actions.
- **Outline / ghost:** Black text on transparent; thin `border` stroke. No fill.
- **Cards:** White surface, gray border, clean radius, standard padding (24px). Shadow only on hover or elevation states.
- **Inputs:** Light gray background, gray borders, black focus ring. High-contrast error states with destructive red.
- **Sidebar:** Clean, high-contrast monochrome navigation panel using semantic tokens (`bg-sidebar`, `text-sidebar-foreground`, `border-sidebar-border`).
  - Active item: `bg-sidebar-accent text-sidebar-accent-foreground font-medium`.
  - Hover state: `hover:bg-sidebar-accent/50 hover:text-sidebar-foreground`.
  - App header & brand badge: Geometric A/B mark using `bg-sidebar-primary text-sidebar-primary-foreground`.
  - Action button: Full-width pill or rounded button using semantic `Button` with `bg-primary text-primary-foreground`.
  - Category list: Icons from `lucide-react` with muted text and subtle active/hover highlights.
  - Zero hex colors: All styling must strictly consume global CSS variables and semantic utility classes.
- **Global Typography Classes (from globals.css):**
  - `.heading`: `text-2xl md:text-3xl lg:text-4xl font-bold text-foreground`
  - `.subheading`: `text-base sm:text-lg font-semibold tracking-tight text-foreground`
  - `.body-text`: `text-sm md:text-base lg:text-lg text-foreground/80 dark:text-foreground/85`
  - `.small-text`: `text-xs md:text-sm lg:text-base text-muted-foreground`
- **Charts:** Series uses gold (`#ffae04`), blue (`#2d62ef`), then grayscale. Keep grids barely visible.
- **Badges:** Grayscale fills — light gray with dark text for neutral, destructive red for alerts.

## Do's and Don'ts

**Do**

- Do maintain absolute black/white contrast in all interactive elements.
- Do use Geist exclusively — sans and mono variants only.
- Do keep shadows sharp and short, never ambient or colored.
- Do prefer border-based containment over background tonal shifts.
- Do treat dark mode as a perfect inversion — same geometry, same density.

**Don't**

- Don't introduce brand colors into structural chrome — no blue links, no green success accents.
- Don't soften the foreground to a gray (#333, #555) — body text is always black (or white in dark mode).
- Don't use rounded-full pill buttons or large bubbly radii.
- Don't add gradients, blur effects, or glassmorphism.
- Don't mix in Inter, SF Pro, or system fonts — Geist is non-negotiable.
- Don't add personality through illustration style, color splashes, or decorative elements in the chrome layer.
