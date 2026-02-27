import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbyoIZqORfVGSEzKYchDUyHUKmK6_hz2Oc27lKGl_jUsMZ8WgQE-q3_btq9hk8QHjCq4/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
