// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationEN } from './pt_br';
import { TranslationPT } from './en';


const resources = {
  en: {
    translation: TranslationEN,
  },
  pt: {
    translation: TranslationPT,
  },
};

i18n
  .use(initReactI18next) // Passa o i18next para o react-i18next
  .init({
    resources,
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback caso a chave não exista no idioma atual
    interpolation: {
      escapeValue: false, // O React já cuida da proteção contra XSS
    },
  });

export default i18n;
