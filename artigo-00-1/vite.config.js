import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <--- Isso força o Vite a gerar os caminhos com "./" automaticamente!
})