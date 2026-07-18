import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://larsullrich.de',
  trailingSlash: 'always',
  integrations: [sitemap()],
  compressHTML: true,
  prefetch: true,
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
