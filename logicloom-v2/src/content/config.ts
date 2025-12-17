import { defineCollection, z } from 'astro:content';

// 1. Define the Blog Collection
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('LogicLoom Team'),
    tags: z.array(z.string()), // This expects a list, which we fixed in Step 1
    image: z.string().optional(),
  }),
});

// 2. Define the Case Study Collection
const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    metric: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});

// 3. Export both
export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudies,
};