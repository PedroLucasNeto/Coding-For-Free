import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ptBR from "./translations/pt_br.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ptBR,
    },
    fallbackLng: "en",
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if ('uppercase' === format) {
            return `${value || ''}`.toUpperCase();
        }

        return value;
      },
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'mark', 'a'],
      useSuspense: true,
    }
  }
);

export default i18n;
