import "./Navbar.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isOpened: boolean;
  handleClick: (isOpened: boolean) => void;
}

const Navbar = ({ isOpened, handleClick }: NavbarProps) => {
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
    </ul>
  );
};

export default Navbar;
