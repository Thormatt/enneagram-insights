import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    globals: true,
    testTimeout: 30000, // Some tests may take longer
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
