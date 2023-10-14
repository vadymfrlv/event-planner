import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      pages: '/src/pages',
      services: '/src/services',
      utils: '/src/utils',
      styles: '/src/styles',
      constants: '/src/constants',
      hooks: '/src/hooks',
      types: '/src/types',
    },
  },
});
