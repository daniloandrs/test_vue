import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [
    vue(),
    // ViteEjsPlugin({
    //   title: 'Front Vue Archetype'
    // }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: false
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        "short_name": "thefarmerson",
        "name": "This is official page of test vuejs",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": " 512x512 192x192 64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          }
        ],
        "theme_color": "#000000",
        "background_color": "#ffffff"
      }
    })

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './dist',
    minify: true,
  }
})
