import { defineCollection, z } from 'astro:content';

const certificates = defineCollection({
  schema: ({ image }) =>
    z.object({
      file: z.string(),
      url: z.string().url(),
      src: image(),
      name: z.string(),
    }),
  type: 'data',
});

const exp = defineCollection({
  schema: ({ image }) =>
    z.object({
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
  schema: ({ image }) =>
    z.object({
      lang: z.enum(['en', 'es']),
      title: z.string(),
      img: image(),
      links: z.record(z.enum(['github', 'web']), z.string().optional()),
    }),
});

export const collections = {
  certificates,
  exp,
  projects,
};
