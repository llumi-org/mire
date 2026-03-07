import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    abstract: z.string(),
    received: z.date(),
    accepted: z.date().optional(),
    published: z.date().optional(),
    language: z.enum(['en', 'zh']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  research,
};
