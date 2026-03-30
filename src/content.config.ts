import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 原有的博客配置
const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
        }),
});

// 新增：OpenClaw 技术简报配置
const reports = defineCollection({
    // 指定存放 OpenClaw 生成的 md 文件的路径
    loader: glob({ base: './src/content/reports', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
    }),
});

// 记得在 collections 中导出这两个集合
export const collections = { blog, reports };