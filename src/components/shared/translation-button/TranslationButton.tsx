import { useState } from "react";
import "./TranslationButton.scss";
import en_us from "../../../i18n/translations/en.json";
import pt_br from "../../../i18n/translations/pt_br.json";
import { useTranslation } from "react-i18next";

interface TranslationButtonProps {
  isTranslated: boolean;
  handleTranslation: (isTranslated: boolean) => void;
}

const TranslationButton = ({
  isTranslated,
  handleTranslation,
}: TranslationButtonProps) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(en_us);
  return (
    <button
      className={`translation_button
        ${isTranslated ? "enUS" : "ptBR"}`}
      onClick={() => {
        {
          if (currentLang === en_us) {
            setCurrentLang(pt_br);
            i18n.changeLanguage("ptBR");
          } else {
            setCurrentLang(en_us);
            i18n.changeLanguage("en_us");
          }
        }
        handleTranslation(!isTranslated);
      }}
    ></button>
  );
};

export default TranslationButton;
