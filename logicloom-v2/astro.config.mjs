import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://www.logicloomsystems.com',

  integrations: [
    tailwind(), // The only Tailwind you need
    alpinejs(), // This handles your mobile menu
    sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date()
    })
  ]
});