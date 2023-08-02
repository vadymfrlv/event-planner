import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      services: '/src/services',
      utils: '/src/utils',
      styles: '/src/styles',
      constants: '/src/constants',
    },
  },
});
