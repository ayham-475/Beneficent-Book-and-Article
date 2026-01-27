import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // استدعاء التيلوند الجديد

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // إضافة تيلوند هنا
  ],
})