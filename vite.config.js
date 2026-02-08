import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set build root to project root (poultry-management)
  publicDir: 'public', // public/ is at project root, no need for ../
  base: '/',
  build: {
    outDir: 'dist', // Output dist/ directly in poultry-management
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'), // Entry from src/
        growth: resolve(__dirname, 'src/growth/index.html'),
        signin: resolve(__dirname, 'src/auth/signin.html'),
        signup: resolve(__dirname, 'src/auth/signup.html'),
      },
    },
  },
});