import styles from "./styles.module.scss";
import { TbArrowBigDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import coding_image from "/assets/images/coding.jpg";
import Social from "../../components/Social/Social";
import Contributors from "./partials/Collaborators/Collaborators";
import Process from "./partials/Process/Process";
import SiteSection from "./partials/SiteSection/SiteSection";
import { useTranslation } from "react-i18next";
import TopButton from "./partials/TopButton/TopButton";

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
  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <div className={styles.home_container}>
      <section className={styles.home_header}>
        <h1>{t("page.home.herobanner.title")}</h1>
        <strong>{t("page.home.herobanner.slogan")}</strong>
        <TbArrowBigDown className={styles.see_more} />
      </section>
      <section className={styles.home_project}>
        <img src={coding_image} alt={t("page.home.projects.image.description") || ""} />
        <motion.ul
          ref={aboutRef}
          className={styles.about_project}
          variants={container}
          animate={isInView ? "visible" : "invisible"}
          initial="hidden"
        >
          <motion.li variants={item}>
            <strong>{t("page.home.projects.title")}</strong>
            <p>{t("page.home.projects.description")}</p>
          </motion.li>
          <motion.li variants={item}>
            <strong>{t("page.home.tasks.title")}</strong>
            <p>{t("page.home.tasks.description")}</p>
          </motion.li>
          <motion.li variants={item}>
            <strong>{t("page.home.more_information.title")}</strong>
            <p>
              {t("page.home.more_information.description")}
              <a href="#websites">{t('page.home.more_information.link')}</a>
            </p>
          </motion.li>
        </motion.ul>
      </section>
      <Process />
      <SiteSection />
      <Contributors />
      <TopButton />
      <Social />
    </div>
  );
};

export default Home;
