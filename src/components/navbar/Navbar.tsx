import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TranslationButton from "../translation-button/TranslationButton";

interface NavbarProps {
  isOpened: boolean;
  handleClick: (isOpened: boolean) => void;
}

const Navbar = ({ isOpened, handleClick }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <ul className={`navbar ${isOpened ? "opened" : ""}`}>
      <li>
        <link rel="stylesheet" href="" />
        <NavLink to="/" onClick={() => handleClick(!isOpened)}>
          {t("header-mobile-item1")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => handleClick(!isOpened)}>
          {t("header-mobile-item2")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => handleClick(!isOpened)}>
          {t("header-mobile-item3")}
        </NavLink>
      </li>
      <li>
        <TranslationButton/>
      </li>
    </ul>
  );
};

export default Navbar;
