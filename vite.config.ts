import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const root = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
      '@assets': root + '/assets',
      '@pages': root + '/pages',
      '@components': root + '/components',
      '@layouts': root + '/layouts',
      '@hooks': root + '/hooks',
      '@utils': root + '/utils',
      '@store': root + '/store',
      '@types': root + '/types',
      '@features': root + '/features',
    },
  },
});
