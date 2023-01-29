import "./Navbar.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isOpened: boolean;
}

const Navbar = ({ isOpened }: NavbarProps) => {
  return (
    <ul className={`navbar ${isOpened ? "opened" : ""}`}>
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
  );
};

export default Navbar;
