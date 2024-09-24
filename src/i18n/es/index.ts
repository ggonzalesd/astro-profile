import enLang from '@/i18n/en/index';

import appLang from './app.lang';
import homeLang from './home.lang';
import projectsLang from './projects.lang';

const esLang: typeof enLang = {
  ...appLang,
  ...homeLang,
  ...projectsLang,
};

export default esLang;
