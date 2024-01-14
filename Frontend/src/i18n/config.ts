import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './en/translation.json';
import czech from './cs/translation.json';

const resources = {
  en: {
    translation: english,
  },
  cs: {
    translation: czech,
  },
} as const;

i18next.use(initReactI18next).init({
  //Default language
  lng: window.localStorage.getItem('i18nextLng') || 'en',
  debug: true,
  resources,
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});
