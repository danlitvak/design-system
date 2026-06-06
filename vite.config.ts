import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// `base: "./"` on build makes asset URLs relative, so the site works whether
// it's served at username.github.io/<repo>/ or any other subpath.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "./" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
