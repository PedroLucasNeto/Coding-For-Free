import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import en from "../../i18n/translations/en.json";
import pt from "../../i18n/translations/pt_br.json";
import { HiLanguage } from "react-icons/hi2";

const TranslationButton = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(en);

  const toggleIdiom = () => {
    if (currentLang === en) {
      setCurrentLang(pt);
      i18n.changeLanguage("ptBR");
      return;
    }

    setCurrentLang(en);
    i18n.changeLanguage("en_us");
  };

  return (
    <button className={styles.translation_button} onClick={toggleIdiom}>
      <HiLanguage />
    </button>
  );
};

export default TranslationButton;
