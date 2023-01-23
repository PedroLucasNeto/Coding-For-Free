import "./Contributors.scss";
import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Contributors = () => {
  return (
    <section className="contributors">
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop
        className="swiper"
      >
        {contributors.map((contributor, index) => (
          <SwiperSlide key={index}>
            <InfoCard
              key={index + contributor.name}
              contributor={contributor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Contributors;

// {contributors.map((contributor, index) => (
//   <InfoCard
//     key={index + contributor.name}
//     contributor={contributor}
//   />
// ))}
