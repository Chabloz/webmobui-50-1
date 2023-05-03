import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy : {
      '/ws/chat/': {
        target: 'https://chabloz.eu/ws/chat/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ws\/chat/, '')
      }
    }
  }
});