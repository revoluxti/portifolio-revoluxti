import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // <--- ADICIONE ISSO! Isso força os links a serem relativos.
})