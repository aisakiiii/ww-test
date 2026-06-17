import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  site: "https://spectacular-biscochitos-b8707d.netlify.app", // Mengarah langsung ke domain Netlify Anda
  integrations: [react(), sitemap()],
  output: "static", // DIUBAH MENJADI STATIC AGAR BISA DIBACA NETLIFY GRATISAN
  vite: {
    plugins: [
      tailwind(),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        workbox: {
          navigateFallback: undefined, // Dimatikan agar tidak membentur halaman 404 statis
          globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
          runtimeCaching: [
            {
              // Cache gambar dari Unsplash, Placehold.co, Google Fonts, dll
              urlPattern:
                /^https:\/\/(images\.unsplash\.com|placehold\.co|fonts\.googleapis\.com|fonts\.gstatic\.com)\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "external-images-fonts",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Hari
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              // Cache Musik (MP3)
              urlPattern: ({ url }) => url.pathname.endsWith(".mp3"),
              handler: "CacheFirst",
              options: {
                cacheName: "audio-cache",
                expiration: {
                  maxEntries: 5,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },
          ],
        },
        manifest: {
          name: "The Wedding of Denny & Ingrid",
          short_name: "Denny & Ingrid",
          description: "Wedding Invitation of Denny & Ingrid",
          theme_color: "#020617",
          background_color: "#020617",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          icons: [
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    envPrefix: "PUBLIC_",
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.message.includes("isRemoteAllowed") ||
            warning.message.includes("matchHostname")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
