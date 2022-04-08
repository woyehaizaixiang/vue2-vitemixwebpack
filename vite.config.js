import { createVuePlugin } from 'vite-plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.js'
    }
  },
  optimizeDeps: {
    entries: 'src/main.js'
  },
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    createHtmlPlugin({
      pages: [
        {
          entry: 'src/main.js',
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              injectScript: `<script src="/src/main.js"></script>`
            },
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})