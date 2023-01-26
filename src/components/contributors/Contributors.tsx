import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";
import { useWidth } from "../../hooks/useWidth";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./Contributors.scss";
import { motion } from "framer-motion";

const Contributors = () => {
  const currentWidth = useWidth();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="contributors"
    >
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect="slide"
        speed={800}
        freeMode={true}
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
