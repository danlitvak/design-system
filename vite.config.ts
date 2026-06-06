import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// For GitHub Pages project sites the app is served at /<repo>/, so the
// production base must match the repo name. Override with VITE_BASE if you
// rename the repo or host elsewhere (use "/" for a user/org root page).
const buildBase = process.env.VITE_BASE ?? "/design-system/"

export default defineConfig(({ command }) => ({
  base: command === "build" ? buildBase : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
