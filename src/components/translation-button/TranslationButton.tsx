import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import en_us from "../../i18n/translations/en.json";
import pt_br from "../../i18n/translations/pt_br.json";
import { HiLanguage } from "react-icons/hi2";

const TranslationButton = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(en_us);

  const toggleIdiom = () => {
    if (currentLang === en_us) {
      setCurrentLang(pt_br);
      i18n.changeLanguage("ptBR");
      return;
    }

    setCurrentLang(en_us);
    i18n.changeLanguage("en_us");
  }

  return (
    <button className={styles.translation_button} onClick={toggleIdiom}>
      <HiLanguage />
    </button>
  );
};

export default TranslationButton;
