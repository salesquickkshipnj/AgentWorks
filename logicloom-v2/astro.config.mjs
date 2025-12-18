import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs'; // 1. Import Alpine

export default defineConfig({
  // Your canonical URL (Crucial for SEO)
  site: 'https://www.logicloomsystems.com',

  integrations: [
    // 2. The Standard Tailwind Integration (Stable)
    tailwind(),
    
    // 3. The Sitemap Integration (SEO)
    sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date()
    }),

    // 4. The Alpine Integration (Fixes your Menu/Form)
    alpinejs()
  ],

  // 5. DELETED the 'vite' block to prevent conflicts
});