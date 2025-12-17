import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind'; // Assuming you are using the integration

export default defineConfig({
  site: 'https://www.logicloomsystems.com', // CRITICAL: This enables sitemap generation
  integrations: [
    tailwind(),
    sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date()
    })
  ]
});