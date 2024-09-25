import { defineCollection, z } from 'astro:content';

const exps = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'es']),
  }),
});

export const collections = {
  exps,
};
