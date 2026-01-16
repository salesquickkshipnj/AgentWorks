import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('LogicLoom Team'),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z
    .object({
      // Standard Metadata
      title: z.string(),
      industry: z.string(),
      metric: z.string(), // e.g. "40% Reduction"

      description: z.string().optional().default(""),
      client: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),

      // Date Logic
      publishDate: z.coerce.date().optional(),
      pubDate: z.coerce.date().optional(),

      // Technical Details
      services: z.array(z.string()).optional(),
      stack: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      ogImage: z.string().optional(),

      // Phase 2: Diagnostic Logic (New Implementation)
      diagnostic: z.object({
        // The "Pain Hook" - e.g., "Manual entry is causing 20% drop-off"
        symptom: z.string(),
        
        // The "Qualifier" - e.g., "Common in teams processing >50 leads/mo"
        context: z.string(),
        
        // The "Bridge" - specific anchor text for the Audit button
        ctaLabel: z.string().default("Run Feasibility Audit"),
      }).optional(),
    })
    .refine((d) => Boolean(d.publishDate || d.pubDate), {
      message: "Case study needs publishDate or pubDate",
      path: ["publishDate"],
    }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudies,
};