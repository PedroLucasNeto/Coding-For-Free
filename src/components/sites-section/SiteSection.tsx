import "./SiteSection.scss";

import { sites } from "../../utils/sites";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SiteGrid from "../site-grid/SiteGrid";

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
      <h2>Sites We Developed</h2>
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect="slide"
        speed={800}
        slidesPerView={"auto"}
        spaceBetween={40}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
      >
        {sites.map((site, index) => (
          <SwiperSlide key={index + site.name} className="swiper-slide">
            <SiteGrid site={site} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default SiteSection;
