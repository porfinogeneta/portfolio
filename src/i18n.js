import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/locales/en'
import pl from './assets/locales/pl'


i18next
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
      debug: true,
      fallbackLng: 'en', // choose this one if your language is not supported
      detection: {
          order: ['htmlTag', 'cookie', 'path', 'subdomain'], // choose the importance of each element to distinguish most important
          caches: ['cookie'] // save chosen language as cookie
      },
      lng: localStorage.getItem("lng") || 'en',
      resources: {
          en: {
              translation: en
          },
          pl: {
              translation: pl
          }
      }
  });

export default i18next;
