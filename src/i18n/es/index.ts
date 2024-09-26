import enLang from '@/i18n/en/index';

import appLang from './app.lang';
import homeLang from './home.lang';
import aboutLang from './about.lang';
import projectsLang from './projects.lang';

const esLang: typeof enLang = {
  ...appLang,
  ...homeLang,
  ...aboutLang,
  ...projectsLang,
};

export default esLang;
