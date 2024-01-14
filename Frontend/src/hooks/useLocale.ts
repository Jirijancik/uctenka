import { useState, useEffect } from 'react';
import i18n from 'i18next';

export const useLocale = () => {
  const [locale, setLocale] = useState(window.localStorage.getItem('i18nextLng') || i18n.language);

  useEffect(() => {
    // Function to update state when i18next language changes
    const onLanguageChanged = (lng: string) => {
      setLocale(lng);
      window.localStorage.setItem('i18nextLng', lng);
    };

    // Listen to language change event in i18next
    i18n.on('languageChanged', onLanguageChanged);

    // Cleanup
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

  const changeLocale = (newLocale: string) => {
    if (locale !== newLocale) {
      i18n.changeLanguage(newLocale);
    }
  };

  return { locale, changeLocale };
};
