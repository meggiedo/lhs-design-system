# Longhorn Studies Design System

The colors, text styles, spacing and components from the **LHS Design System** Figma file, built as code and shown in Storybook.

**View it:** https://meggiedo.github.io/lhs-design-system/

## What's inside

- `src/tokens/` – design tokens (colors, spacing, radius, shadows, type) with the same names as the Figma variables and styles
- `src/components/` – React components plus their Storybook stories
- `src/docs/` – the Foundations pages (Colors, Typography, Spacing & radius, Elevation, Icons)

Every push to `main` rebuilds the site and republishes it through GitHub Pages (see `.github/workflows/storybook.yml`).

## Run it on your computer (optional)

```bash
npm install
npm run storybook
```

Source of truth: [LHS Design System in Figma](https://www.figma.com/design/AOmpyTZupE8rJOp1Tdm9vo/LHS-Design-System)
