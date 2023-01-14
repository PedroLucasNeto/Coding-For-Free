import { useState } from "react";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header_container">
      <h1>CFF</h1>
      <ul className="header_nav">
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <ToggleButton isActive={isActive} onToggle={setIsActive} />
    </div>
  );
};

export default Header;
