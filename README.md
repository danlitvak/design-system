# Monochrome UI — Design System

A minimal, monochrome front-end design system for reuse across projects.
Built on **shadcn/ui** (Radix primitives) + **Tailwind v4** + **Vite** + **React 19 / TypeScript**.

- 56 components in `src/components/ui/`
- Grayscale palette, single near-black / near-white accent, light + dark themes
- All design tokens live as CSS variables in `src/index.css` — edit once, retheme everywhere
- `src/App.tsx` is a live showcase of every component group

## Run the showcase

```bash
npm install
npm run dev      # open the printed localhost URL
npm run build    # type-check + production build
```

Toggle light/dark with the button in the top-right of the showcase.

## Use it in a new project

This folder is meant to be copied as a starting point. Two ways to reuse:

1. **Clone the whole folder** as the base for a new app, delete `src/App.tsx`,
   and start building your screens. Everything is already wired up.
2. **Copy pieces into an existing app**: copy `src/components/ui/`,
   `src/lib/utils.ts`, `src/hooks/`, and the token blocks from `src/index.css`.
   Make sure the dependencies below are installed and the `@/*` path alias
   points at `src/` (see `vite.config.ts` + `tsconfig.app.json`).

## Theming

Open `src/index.css`. The `:root` block is the light theme, `.dark` is dark.
Change `--primary` / `--background` / `--radius` etc. and every component updates.
Colors are in the `oklch()` color space; charts use a grayscale ramp.

## Adding more shadcn components later

Because the `@/*` alias and `components.json` are configured, you can pull
additional or updated components straight from the CLI:

```bash
npx shadcn@latest add <component>
```

## Stack / key dependencies

radix-ui · lucide-react · class-variance-authority · clsx · tailwind-merge ·
tw-animate-css · recharts · vaul · sonner · cmdk · embla-carousel-react ·
input-otp · react-day-picker · react-hook-form · react-resizable-panels ·
@base-ui/react · next-themes

## Deploy a live preview (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and publishes it to GitHub Pages on every push to `main`.

1. Create a GitHub repo and push this folder:
   ```bash
   git remote add origin https://github.com/<you>/design-system.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The Actions tab runs the workflow; when it finishes, your live URL appears at
   the top of the Pages settings (e.g. `https://<you>.github.io/design-system/`).

The Vite config uses a relative `base`, so the site works at that subpath with no
extra configuration. Link the URL from your profile README to show it off.
