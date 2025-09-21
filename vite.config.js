import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/Inspire-Transformation/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      port: 3000,
      open: true,
      host: true
    }
  }
})
