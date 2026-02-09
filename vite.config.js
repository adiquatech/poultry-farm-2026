import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', 
  publicDir: 'public', 
  base: '/',
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        growth: resolve(__dirname, '/src/growth/index.html'),
        signin: resolve(__dirname, '/src/auth/signin.html'),
        signup: resolve(__dirname, '/src/auth/signup.html'),
      },
    },
  },
  server: {
    open: 'index.html',
  }

});