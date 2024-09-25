import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(['en', 'es']),
      img: image(),
      links: z.record(z.enum(['github', 'web']), z.string().optional()),
    }),
});

export const collections = {
  projects,
};
