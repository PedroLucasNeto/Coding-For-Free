import "./SiteSection.scss";

import { sites } from "../../utils/sites";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SitesDeveloped from "../sites-developed/SitesDeveloped";
import { useTranslation } from "react-i18next";

const SiteSection = () => {
  const siteRef = useRef(null);
  const isInView = useInView(siteRef);

  const animationSite = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  const { t } = useTranslation();

  return (
    <motion.section
      ref={siteRef}
      variants={animationSite}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
      className="site_section"
    >
      <h2>{t("sites-section-title")}</h2>;
      {sites.map((site, index) => {
        const name = t("sites-section-name-" + site.name);
        const description = t("sites-section-description-" + site.name);
        const object = { name: name, image: site.image, description };

        return <SitesDeveloped key={index} site={object} />;
      })}
    </motion.section>
  );
};

export default SiteSection;
