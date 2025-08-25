import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TCI/',              // pour GitHub Pages: https://okom3d.github.io/TCI/
  build: { outDir: '../docs', emptyOutDir: true }  // génère dans /docs à la racine
})
