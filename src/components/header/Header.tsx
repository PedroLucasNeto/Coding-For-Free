import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import TranslationButton from "../shared/translation-button/TranslationButton";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="header_container">
        <NavLink to="/" end>
          <img src="/assets/images/CFF-ICON-WHITE.png" alt="" />
        </NavLink>
        <ul className="header_nav">
          <li>
            <NavLink to="/" end>
              {t("header-item1")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("header-item2")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("header-item3")}</NavLink>
          </li>
          <li>
            <TranslationButton
              isTranslated={isTranslated}
              handleTranslation={setIsTranslated}
            />
          </li>
        </ul>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
      </div>
      <Navbar isOpened={isActive} handleClick={setIsActive} />
    </>
  );
};

export default Header;
