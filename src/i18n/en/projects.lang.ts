import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const slugs = projects
  .filter(({ slug }) => slug.startsWith('en'))
  .map((p) => p.slug.split('/')[1]);

const projectPaths = slugs.map((p) => [
  'projects_route_' + p.replace('-', '_'),
  '/en/projects/' + p,
]);

export default {
  projects_title: 'Projects',
  ...Object.fromEntries(projectPaths),
} as Record<'projects_title' | string, string>;
