# The Padel Society — Design System

The brand foundations and component library for **The Padel Society**, built with
**Next.js (App Router)**, **Tailwind CSS v4** and **shadcn/ui**.

The home page (`/`) is a living design-system reference: logo, colour, type and
the UI components, viewable in both the light *Ivory* world and the dark *Ink* world.

## Brand

| Token        | Hex       | Use                        |
| ------------ | --------- | -------------------------- |
| Ivory        | `#F4F1EA` | Primary light surface      |
| Ink          | `#11100F` | Text · dark surfaces       |
| Terracotta   | `#C55A48` | Accent · primary action    |

- **Display / headings:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — a characterful old-style serif that mirrors the wordmark.
- **Interface / body:** [Inter](https://fonts.google.com/specimen/Inter).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## How the system is organised

```
src/
  app/
    globals.css        # design tokens: brand scales, semantic tokens, light + dark
    layout.tsx         # fonts (Fraunces, Inter) + no-flash theme init
    page.tsx           # the design-system showcase
  components/
    brand/
      wordmark.tsx      # "THE PADEL SOCIETY" lockup
      monogram.tsx      # interlocking PS mark (circle / capsule, 3 tones)
    ui/                 # shadcn/ui primitives, re-skinned to the brand
    theme-toggle.tsx    # class-based Ivory/Ink switch
  lib/utils.ts          # cn() helper
```

### Tokens

All colour lives in `src/app/globals.css` as CSS variables. Raw brand scales
(`--ivory*`, `--ink*`, `--terracotta-50…900`) feed **semantic tokens**
(`--background`, `--primary`, `--muted`, `--border`, …) which are re-declared
under `.dark`. Tailwind utilities (`bg-background`, `text-primary`,
`bg-terracotta`, `border-border`, `font-serif`) resolve from the `@theme inline`
block, so re-theming the entire kit happens in one file.

### Adding more shadcn/ui components

`components.json` is configured. When network access to the shadcn registry is
available you can run e.g. `npx shadcn@latest add dialog`. Otherwise add
component source under `src/components/ui/` following the existing files — they
already read from the brand tokens.

## Stack

Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui (Radix primitives) · lucide-react
