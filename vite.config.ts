import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteEjsPlugin({
      title: 'FGA Front Vue Archetype'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './dist'
  }
})
