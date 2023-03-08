import "./Contributors.scss";
import { useTranslation } from "react-i18next";
import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Contributors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const { t } = useTranslation();

  const animationSection = {
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
      id="contributors"
      ref={sectionRef}
      variants={animationSection}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
      className="contributors"
    >
      <h2>{t("contributors-section-title")} </h2>
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect="slide"
        speed={800}
        slidesPerView={"auto"}
        spaceBetween={40}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper_container"
      >
        {contributors.map((contributor, index) => {
          const contributorTitle = t(
            `contributors-section-card${index + 1}-founder`
          );
          const object = {
            name: contributor.name,
            role: contributorTitle,
            picture: contributor.picture,
            contactLinks: contributor.contactLinks,
          };

          return (
            <SwiperSlide key={index + contributor.name}>
              <InfoCard contributor={object} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Contributors;
