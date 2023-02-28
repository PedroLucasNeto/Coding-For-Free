import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);

  const handleTranslation = () => {
    setIsTranslated(!isTranslated);
    console.log(isTranslated);
  };

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
        <button
          className={isTranslated ? "enUS" : "ptBR"}
          onClick={handleTranslation}
        ></button>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
      </div>
      <Navbar isOpened={isActive} handleClick={setIsActive} />
    </>
  );
};

export default Header;
