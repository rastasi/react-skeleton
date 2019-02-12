import I21n from 'i21n';
import main from './strings/main.json';

import Cookies from 'universal-cookie';

const strings = Object.assign({},
  main
);

const defaultLocale = 'hu';

const i21n = new I21n(strings, {
  defaultLocale
});

const i18n = {
  current: () => {
    const cookies = new Cookies();
    return cookies.get('locale') || defaultLocale;
  },
  set: (locale) => {
    const cookies = new Cookies();
    cookies.set('locale', locale, { path: '/' });
  },
  t: (string, options = {}) => {
    let settings = { locale: i18n.current() };
    return i21n.t(string, options, settings) || string;
  },
  l: (date, options = {}) => {
    if (!date) return '';
    let parsed = new Date(date);
    return parsed.toLocaleDateString(i18n.current());
  }
};

export default i18n;
