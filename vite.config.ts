import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are linked relatively for GitHub Pages subdirectory support
  define: {
    // Polyfill process.env.API_KEY for the build
    // NOTE: You must set the API_KEY secret in GitHub Actions for this to work
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});