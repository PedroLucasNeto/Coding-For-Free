import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import coding_image from "/assets/images/coding.jpg";
import Social from "../../components/social/Social";
import Contributors from "../../components/contributors/Contributors";
import Process from "../../components/process/Process";
import SiteSection from "../../components/sites-section/SiteSection";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Home = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);
  const { t } = useTranslation();

  return (
    <div className="home_container">
      <section className="home_header">
        <h1>{t("banner-title")}</h1>
        <strong>{t("banner-slogan")}</strong>
        <TbArrowBigDown className="see_more" />
      </section>
      <section className="home_project">
        <img src={coding_image} alt="Desenvolvedor" />
        <div className="about_project">
          <motion.div
            ref={aboutRef}
            className="about_section"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "invisible"}
          >
            <motion.div variants={item}>
              <h2>{t("home-section-title1")}</h2>
              <p>
                <mark>{t("home-section-mark")}</mark>
                {t("home-section-description1")}
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h2>{t("home-section-title2")}</h2>
              <p>{t("home-section-description2")}</p>
            </motion.div>
            <motion.div variants={item}>
              <h2>{t("home-section-title3")}</h2>
              <p>
                {t("home-section-description3")}
                <button>
                  <Link to={"/about"}>
                    {t("home-section-button-click-here")}
                  </Link>
                </button>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Process />
      <SiteSection />
      <Contributors />
      <Social />
    </div>
  );
};

export default Home;
