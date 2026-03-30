
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wangkangmed.github.io',
  base: '/astro_website', // 必须和你的仓库名完全一致
  integrations: [mdx(), sitemap()],
});
