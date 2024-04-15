import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
      '/proxy': {
        target: 'http://localhost:5173/', // Port where your serverless function runs locally
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, '') // Strip '/proxy' prefix from the request
      }
    }
  }
});
