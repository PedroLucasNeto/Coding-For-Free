import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../shared/toggle-button/ToggleButton";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header_container">
      <h1>CFF</h1>
      <ul className="header_nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to={"/aboutUs"}>About Us</Link>
        </li>
      </ul>
      <ToggleButton isActive={isActive} onToggle={setIsActive} />
    </div>
  );
};

export default Header;
