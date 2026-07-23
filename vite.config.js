import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

const staticFiles = [
  '404.html',
  'admin.html',
  'admin.webmanifest',
  'admin-sw.js',
  'admin-icon-192.png',
  'admin-icon-512.png',
  'favicon.svg',
  'google9c0a841d5cc624b1.html',
  'robots.txt',
  'seo.js',
  'site.webmanifest',
  'sitemap.xml',
]

function copyStaticPages() {
  return {
    name: 'copy-static-pages',
    generateBundle() {
      for (const file of staticFiles) {
        this.emitFile({
          type: 'asset',
          fileName: basename(file),
          source: readFileSync(resolve(process.cwd(), file)),
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyStaticPages()],
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
