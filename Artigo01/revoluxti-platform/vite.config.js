import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Aumenta o limite do aviso para 1000kb (solução rápida para TCC)
    chunkSizeWarningLimit: 1000, 
    
    // OU: A solução técnica elegante (dividir em arquivos menores)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Se o código vier de 'node_modules' (bibliotecas), joga num arquivo separado chamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})