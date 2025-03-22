import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/

export default defineConfig({
  base: '/booth-sale-calculator/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Booth Sale Calculator',
        short_name: 'BoothCalc',
        description: 'A simple calculator for splitting booth sales',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/booth-sale-calculator/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/booth-sale-calculator/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    tailwindcss(),
  ],
});
