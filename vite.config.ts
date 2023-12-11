import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@deriv/components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: '@deriv/constants',
        replacement: fileURLToPath(new URL('./src/constants', import.meta.url)),
      },
      {
        find: '@deriv/hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
      {
        find: '@deriv/stores',
        replacement: fileURLToPath(new URL('./src/stores', import.meta.url)),
      },
      {
        find: '@deriv/types',
        replacement: fileURLToPath(new URL('./src/types', import.meta.url)),
      },
      {
        find: '@deriv/utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    ],
  },
});
