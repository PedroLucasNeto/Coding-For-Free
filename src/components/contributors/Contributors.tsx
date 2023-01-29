import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./Contributors.scss";
import { motion, useInView } from "framer-motion";

const Contributors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

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
      ref={sectionRef}
      variants={animationSection}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
      className="contributors"
    >
      <h2>Founders</h2>
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
        {contributors.map((contributor, index) => (
          <SwiperSlide key={index + contributor.name} className="swiper-slide">
            <InfoCard contributor={contributor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Contributors;
