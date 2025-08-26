import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './',    // ✅ relative, fonctionne avec GitHub Pages + domaine perso
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
});
