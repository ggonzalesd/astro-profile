import { getI18N } from '.';

export function translatePath(
  pathname: string,
  lang: string,
  currentLocale?: string,
) {
  const _path = pathname.split('/').filter((s) => !!s);
  const path = '/' + _path.join('/');

  const i18n = getI18N({ currentLocale });
  const key = Object.entries(i18n)
    .filter(([_, v]) => v === path)
    .map(([k, _]) => k)[0];

  if (key !== undefined) {
    const i18nNew = getI18N({ currentLocale: lang });
    return i18nNew[key as keyof typeof i18nNew];
  }
  return '/';
}
