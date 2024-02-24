import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiHashtag } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";

import Navbar from "../Navbar/Navbar";
import ToggleButton from "../ToggleButton/ToggleButton";
import TranslationButton from "../TranslationButton/TranslationButton";

const Header = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header_container}>
        <NavLink to="/" end>
          CFF
        </NavLink>
        <div className={styles.nav_items}>
          <nav>
            <NavLink to="/" end>
              <HiHome />
              <span>{t("header.navigation.home")}</span>
            </NavLink>
            <NavLink to="/contact">
              <HiHashtag />
              <span>{t("header.navigation.contact")}</span>
            </NavLink>
            <NavLink to="/about">
              <BsFillPeopleFill />
              <span>{t("header.navigation.about")}</span>
            </NavLink>
          </nav>
          <TranslationButton />
        </div>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
      </div>
      <Navbar isOpened={isActive} handleClick={setIsActive} />
    </>
  );
};

export default Header;

