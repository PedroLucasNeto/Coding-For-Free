import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import TranslationButton from "../shared/translation-button/TranslationButton";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="header_container">
        <NavLink to="/" end>
          <img src="/assets/images/CFF-ICON-WHITE.png" alt="" />
        </NavLink>

        <ul className="header_nav">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
        <TranslationButton />
      </div>
      <Navbar isOpened={isActive} handleClick={setIsActive} />
    </>
  );
};

export default Header;
