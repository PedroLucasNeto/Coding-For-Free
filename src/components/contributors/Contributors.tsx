import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./Contributors.scss";

const Contributors = () => {
  return (
    <section className="contributors">
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect="slide"
        speed={800}
        slidesPerView={3}
        spaceBetween={180}
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
    </section>
  );
};

export default Contributors;
