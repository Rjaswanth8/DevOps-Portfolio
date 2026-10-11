import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work on any host or sub-folder (GitHub Pages, Netlify, S3, Vercel...)
export default defineConfig({
  base: './',
  plugins: [react()],
});
