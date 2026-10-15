import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          digitalMarketing: path.resolve(__dirname, 'digital-marketing-beginners.html'),
          thankYou: path.resolve(__dirname, 'thank-you.html'),
          englishCommunication: path.resolve(__dirname, 'english-communication-programme.html'),
          commercialLand: path.resolve(__dirname, 'commercial-land-cuddalore.html'),
          englishClass: path.resolve(__dirname, 'english-class.html'),
          englishClassIndex: path.resolve(__dirname, 'English_class/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
