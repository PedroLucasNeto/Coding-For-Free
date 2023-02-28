import "./SiteSection.scss";

import { sites } from "../../utils/sites";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SitesDeveloped from "../sites-developed/SitesDeveloped";

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

  return (
    <motion.section
      ref={siteRef}
      variants={animationSite}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
      className="site_section"
    >
      <h2>Sites we've done!</h2>
      {sites.map((site, index) => (
        <SitesDeveloped key={index} site={site} />
      ))}
    </motion.section>
  );
};

export default SiteSection;
