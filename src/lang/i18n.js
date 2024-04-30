import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './ar.json';
import tc from './tc.json';
import dj from './dj.json';
import fr from './fr.json';

const resources = {
  tc,
  ar,
  dj,
  fr
};

i18n  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'ar',// default language to use.
  });

export default i18n;