import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// This application is deliberately isolated from the current static website.
// Deploy its `dist` directory only when the React version has been approved.
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
