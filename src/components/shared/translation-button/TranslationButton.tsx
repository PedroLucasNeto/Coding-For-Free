import { useState } from "react";
import "./TranslationButton.scss";

interface TranslationButtonProps {
  isTranslated: boolean;
  handleTranslation: (isTranslated: boolean) => void;
}

const TranslationButton = ({
  isTranslated,
  handleTranslation,
}: TranslationButtonProps) => {
  return (
    <button
      className={
        isTranslated ? "translation_button enUS" : "translation_button ptBR"
      }
      onClick={() => handleTranslation(!isTranslated)}
    ></button>
  );
};

export default TranslationButton;
