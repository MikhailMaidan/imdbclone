import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const resolveAlias = (p) => resolve(__dirname, p);
const alias = { 
  "@": resolveAlias('./src'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  build:{
    target: "esnext",

  },
  resolve: {
    alias,
  }
})
