import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Vite is starting...');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: 'src/main.jsx',
      },
    },
  },
});
