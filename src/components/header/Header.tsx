import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="header_container">
        <h1>CFF</h1>
        <ul className="header_nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
      </div>
      <Navbar isOpened={isActive} />
    </>
  );
};

export default Header;
