import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@deriv/hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
      {
        find: '@deriv/constants',
        replacement: fileURLToPath(new URL('./src/constants', import.meta.url)),
      },
    ],
  },
});
