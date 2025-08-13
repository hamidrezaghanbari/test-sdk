import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'site',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
