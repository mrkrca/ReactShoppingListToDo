import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: true
  },
  preview: {
    port: 4173,
    allowedHosts: ['reactshoppinglisttodo-production.up.railway.app']
  },
  build: {
    outDir: 'dist'
  }
})