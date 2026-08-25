// 内容集合配置：更新日志（Markdown 文件存储于 src/content/updates/）
// Astro 7 使用 content layer loader API
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const updates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    count: z.number().optional(),
  }),
});

export const collections = { updates };
