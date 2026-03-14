import enProjectsLang from '@/i18n/en/projects.lang';

import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const slugs = projects
  .filter(({ filePath }) => filePath?.includes('/es/'))
  .map((p) => p.filePath?.split('/es/')[1].replace('.md', '')) as string[];

const projectPaths = slugs.map((p) => [
  'projects_route_' + p.replace('-', '_'),
  '/proyectos/' + p,
]);

const esProjectsLang: typeof enProjectsLang = {
  projects_title: 'Proyectos',
  ...Object.fromEntries(projectPaths),
};

export default esProjectsLang;
