import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'https://code-race-qfh4.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  define: {
    'process.env.VITE_OPENAI_API_KEY': JSON.stringify(
      process.env.VITE_OPENAI_API_KEY || ''
    ),
    'process.env.VITE_API_BASE_URL': JSON.stringify(
      process.env.VITE_API_BASE_URL || 'https://code-race-qfh4.onrender.com'
    )
  }
})
