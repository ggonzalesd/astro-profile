// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: 'https://ggonzalesd.vercel.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  adapter: vercel(),
});
