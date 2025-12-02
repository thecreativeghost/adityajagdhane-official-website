import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        const src = resolve(process.cwd(), '_redirects')
        const destDir = resolve(process.cwd(), 'dist')
        const dest = resolve(destDir, '_redirects')

        try {
          if (!fs.existsSync(src)) {
            console.warn('⚠️  copy-redirects: _redirects not found at repo root — skipping copy.')
            return
          }

          // ensure dist folder exists
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true })
            console.log('ℹ️  copy-redirects: created dist/ directory')
          }

          // copy file (wrapped in try/catch so it won't crash the build)
          fs.copyFileSync(src, dest)
          console.log('✅ copy-redirects: copied _redirects to dist/')
        } catch (err) {
          // do NOT rethrow — build should continue even if copy fails
          console.warn('⚠️  copy-redirects: failed to copy _redirects (non-fatal):', err && (err as Error).message ? (err as Error).message : err)
        }
      },
    },
  ],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
