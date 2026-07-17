import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Se o seu repositório for 'usuario.github.io', deixe './'
  // Se for 'usuario.github.io/projeto', o ideal é usar o nome do projeto:
  base: process.env.NODE_ENV === 'production' ? '/nome-do-seu-repositorio/' : '/',
})