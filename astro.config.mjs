import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  site: "https://spectacular-biscochitos-b8707d.netlify.app",
  integrations: [react(), sitemap()],
  output: "static", // Mengunci mode statis total
  vite: {
    plugins: [
      tailwind(),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: false, // Dimatikan saat produksi agar meringankan kompilasi
        },
        workbox: {
          navigateFallback: null, 
          globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
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
          ],
        },
      }),
    ],
    envPrefix: "PUBLIC_",
  },
});
