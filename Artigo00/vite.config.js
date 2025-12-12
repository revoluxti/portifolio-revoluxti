import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Garante que roda no GitHub Pages (caminhos relativos)
  
  plugins: [
    react()
  ],

  // O bloco build deve estar DENTRO do defineConfig
  build: {
    outDir: 'dist',
    sourcemap: false, // 🚫 Mapa do tesouro deletado
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Tchau logs
        drop_debugger: true,
      },
    },
    rollupOptions: {
      plugins: [
        // O ofuscador entra aqui
        obfuscator({
          global: true,
          options: {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 4000,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            renameGlobals: false,
            rotateStringArray: true,
            selfDefending: true,
            stringArray: true,
            stringArrayEncoding: ['rc4'],
            splitStrings: true,
          },
        }),
      ],
    },
  },
})