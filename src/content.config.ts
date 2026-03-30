// content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 如果是 v5 需要这个

const reports = defineCollection({
  // 如果是 v5，loader 会指定去哪找文件
  loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  // 这里的 key 'reports' 必须和文件夹名以及脚本路径严格对应
  'reports': reports, 
};
