import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Establece la raíz del proyecto
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
