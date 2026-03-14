import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const slugs = projects
  .filter(({ filePath }) => filePath?.includes('/es/'))
  .map((p) => p.filePath?.split('/es/')[1].replace('.md', '')) as string[];

const projectPaths = slugs.map((p) => [
  'projects_route_' + p.replace('-', '_'),
  '/en/projects/' + p,
]);

export default {
  projects_title: 'Projects',
  ...Object.fromEntries(projectPaths),
} as Record<'projects_title' | string, string>;
