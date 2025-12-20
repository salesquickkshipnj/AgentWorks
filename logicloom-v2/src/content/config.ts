import { defineCollection, z } from 'astro:content';

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

const caseStudies = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      industry: z.string(),
      metric: z.string(),

      description: z.string().optional().default(""),
      client: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),

      publishDate: z.coerce.date().optional(),
      pubDate: z.coerce.date().optional(),

      services: z.array(z.string()).optional(),
      stack: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      ogImage: z.string().optional(),
    })
    .refine((d) => Boolean(d.publishDate || d.pubDate), {
      message: "Case study needs publishDate or pubDate",
      path: ["publishDate"],
    }),
});

export const collections = {
  "case-studies": caseStudies,
};

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudies,
};