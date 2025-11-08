import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      // plugin to copy _redirects into dist automatically
      name: 'copy-redirects',
      closeBundle() {
        const src = resolve(__dirname, '_redirects')
        const dest = resolve(__dirname, 'dist/_redirects')
        if (existsSync(src)) {
          copyFileSync(src, dest)
          console.log('✅ Copied _redirects to dist/')
        } else {
          console.warn('⚠️  No _redirects file found at project root')
        }
      },
    },
  ],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
