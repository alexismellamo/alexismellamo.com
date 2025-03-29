import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
});
