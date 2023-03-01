import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import TranslationButton from "../shared/translation-button/TranslationButton";
import { useState } from "react";

interface NavbarProps {
  isOpened: boolean;
  handleClick: (isOpened: boolean) => void;
}
const Navbar = ({ isOpened, handleClick }: NavbarProps) => {
  const [isTranslated, setIsTranslated] = useState(false);
  return (
    <ul className={`navbar ${isOpened ? "opened" : ""}`}>
      <li>
        <NavLink to="/" onClick={() => handleClick(!isOpened)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => handleClick(!isOpened)}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => handleClick(!isOpened)}>
          About Us
        </NavLink>
      </li>
      <li>
        <TranslationButton
          isTranslated={isTranslated}
          handleTranslation={setIsTranslated}
        />
      </li>
    </ul>
  );
};

export default Navbar;
