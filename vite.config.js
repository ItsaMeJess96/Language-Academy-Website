import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const Vite = require('vite');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
