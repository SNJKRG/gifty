import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['16ab-78-181-66-183.ngrok-free.app'],

    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  }
})
