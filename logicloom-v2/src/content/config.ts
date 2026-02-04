import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('LogicLoom Team'),
    tags: z.array(z.string()),
    image: z.string().optional(),
    visualType: z.enum(['phone', 'dashboard', 'logic']).optional(),
    visualData: z.any().optional(),
    related: z.string().optional(),
    ctaText: z.string().optional(),
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
      heroImage: z.string().optional(), // Kept for OpenGraph/Social previews

      // NEW: The Spec Sheet Data
      stats: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),

      // NEW: The Code Snippet
      codeSnippet: z.object({
        filename: z.string(),
        lang: z.string(),
        code: z.string(),
      }).optional(),

      // NEW: The Visual Engine
      visualType: z.enum(['phone', 'dashboard', 'logic']).optional(),
      visualData: z.any().optional(),

      // Phase 2: Diagnostic Logic
      diagnostic: z.object({
        symptom: z.string(),
        context: z.string(),
        ctaLabel: z.string().default("Run Feasibility Audit"),
      }).optional(),
      related: z.string().optional(),
      ctaText: z.string().optional(),
    })
    .refine((d) => Boolean(d.publishDate || d.pubDate), {
      message: "Case study needs publishDate or pubDate",
      path: ["publishDate"],
    }),
});

export const collections = {
  'blog': blogCollection,
  'solutions': caseStudies,
};