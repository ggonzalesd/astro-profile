import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const certificates = defineCollection({
  loader: glob({ base: './src/content/certificates', pattern: '**/*.json' }),
  schema: ({ image }) =>
    z.object({
      file: z.string(),
      url: z.url(),
      src: image(),
      name: z.string(),
    }),
});

const exp = defineCollection({
  loader: glob({ base: './src/content/exp', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      lang: z.enum(['en', 'es']),
      src: image(),
      name: z.string(),
      start: z.string(),
      end: z.string(),
      total: z.string(),
      tags: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().optional(),
      title: z.string(),
      img: image(),
      description: z.string(),
      links: z.record(z.enum(['github', 'web', 'npm']), z.string().optional()),
    }),
});

export const collections = {
  certificates,
  exp,
  projects,
};
