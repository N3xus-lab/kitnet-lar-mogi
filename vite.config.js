import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/kitnet-lar-mogi/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        assetFileNames: 'assets/style.css'
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    allowedHosts: ['.trycloudflare.com']
  }
});