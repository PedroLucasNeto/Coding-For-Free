import { useState } from "react";
import "./TranslationButton.scss";

const TranslationButton = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  const handleTranslation = () => {
    setIsTranslated(!isTranslated);
    console.log(isTranslated);
  };
  return (
    <button
      className={
        isTranslated ? "translation_button enUS" : "translation_button ptBR"
      }
      onClick={handleTranslation}
    ></button>
  );
};

export default TranslationButton;
