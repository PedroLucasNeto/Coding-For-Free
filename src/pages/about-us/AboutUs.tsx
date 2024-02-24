import "./styles.scss";
import Social from "../../components/social/Social";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <section className="aboutUs_section">
      {/* <div className="aboutUs_us_banner">
        <h1>AboutUs Us</h1>
      </div> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="aboutUs_container"
      >
        <motion.div variants={item} className="aboutUs_card">
          <h1>{t("about-us-page-card1-title")}</h1>
          <p>{t("about-us-page-card1-description")}</p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>{t("about-us-page-card2-title")}</h1>
          <p>{t("about-us-page-card2-description")}</p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>{t("about-us-page-card3-title")}</h1>
          <p>
            {t("about-us-page-card3-description")}
            <mark>{t("about-us-page-card3-mark")}</mark>
          </p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>{t("about-us-page-card4-title")}</h1>
          <p>{t("about-us-page-card4-description")}</p>
        </motion.div>
      </motion.div>
      <Social />
    </section>
  );
}
export default AboutUs;

