import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})