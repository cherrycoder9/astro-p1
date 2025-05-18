// src/content.config.ts
import { defineCollection, z } from "astro:content";
// glob 로더 가져오기
import { glob } from "astro/loaders";
// 각 컬렉션에 대한 `loader` 및 `schema` 정의
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
// 단일 `collections` 객체를 내보내 컬렉션을 등록하세요
export const collections = { blog };