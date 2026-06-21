import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Adiciona a opção 'compact: false' aqui dentro do plugin react
      babel: {
        compact: false, 
      },
    }),
  ],
  // ISSO AQUI RESOLVE A TELA BRANCA EM SUBPASTAS (GITHUB PAGES / LIVE SERVER):
  base: '/revoluxti-plataform/', 
  
  build: {
    // Aumenta o limite do aviso para não te incomodar agora (1500kb)
    chunkSizeWarningLimit: 1500,
    
    // Otimização para dividir os arquivos e carregar mais rápido (o "Code Splitting")
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separa bibliotecas do seu código
          }
        },
      },
    },
  },
})
