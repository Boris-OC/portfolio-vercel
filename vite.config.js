import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-vercel/', // ← remplace par le nom de ton repo GitHub
  plugins: [react()],
});
