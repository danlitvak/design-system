# Using this design system in Next.js (App Router)

All components are framework-agnostic and already include the `"use client"`
directive where needed, so they drop straight into a Next.js App Router project.

## 1. Copy the pieces

Copy into your Next app:

- `src/components/ui/` → `components/ui/`
- `src/components/blocks/`, `motion/`, `theme/`, `preview/` → `components/…`
- `src/lib/utils.ts` → `lib/utils.ts`
- `src/hooks/` → `hooks/`
- the token blocks from `src/index.css` → your `app/globals.css`

Set the `@/*` path alias in `tsconfig.json`:

```json
{ "compilerOptions": { "paths": { "@/*": ["./*"] } } }
```

Install Tailwind v4 (`@tailwindcss/postcss`) plus the runtime deps listed in
`README.md` (radix-ui, lucide-react, framer-motion, etc.).

## 2. Wire up theming

In `app/layout.tsx`:

```tsx
import { ThemeProvider } from "@/components/theme/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

`suppressHydrationWarning` on `<html>` is required by `next-themes`.
Drop `<ModeToggle />` anywhere (e.g. your navbar) for a light/dark/system switch.

## 3. Server vs client

- Pure layout blocks (Hero, SiteFooter, Prose, CTA) are server-safe.
- Anything interactive (ModeToggle, motion primitives, forms, menus, carousels)
  is a client component — already marked, so just import and use.

## 4. Fonts

The theme uses Inter (body) and JetBrains Mono (headings). Either keep the
Google Fonts `@import` at the top of `globals.css`, or use `next/font`:

```tsx
import { Inter, JetBrains_Mono } from "next/font/google"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
// add `${inter.variable} ${mono.variable}` to <body className=...>
```
