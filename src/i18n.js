// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Configuración de i18next
i18n
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
