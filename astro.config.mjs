// astro.config.mjs
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wangkangmed.github.io', 
  base: '/ai-tech-blog', 

  integrations: [mdx(), sitemap()],
});
