import { sites } from "../../../../utils/data";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SitesDeveloped from "./partials/SitesDeveloped/SitesDeveloped";
import { useTranslation } from "react-i18next";
// import { Carousel } from "../../../../components/Carousel/Carousel";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const SiteSection = () => {
  const siteRef = useRef(null);

  const animationSite = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.2,
      },
    },
  };

  const { t } = useTranslation();

  return (
    <motion.section
      id="websites"
      ref={siteRef}
      variants={animationSite}
      initial="hidden"
      animate={"visible"}
      className="section_container"
    >
      <div className={styles.site_section}>
        <h2>{t("sites-section-title")}</h2>;
        <Swiper
          style={{ maxWidth: "100%" }}
          speed={1200}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          centerInsufficientSlides={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {sites.map((site, index) => {
            const siteData = {
              ...site,
              name: t("sites-section-name-" + site.name),
              description: t("sites-section-description-" + site.name),
            };

            return (
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <SitesDeveloped key={index} site={siteData} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default SiteSection;
