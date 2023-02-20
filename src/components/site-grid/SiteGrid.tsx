import "./SiteGrid.scss";

import { Site } from "../../types/Site";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface SiteGridProps {
  site: Site;
}
const SiteGrid = ({ site }: SiteGridProps) => {
  if (!site) {
    return null;
  }

  const { name, images } = site;
  return (
    <div className="main_grid">
      <h2>{name}</h2>
      <img src={images.banner} alt="front page of Forzam Detail website" />
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect="slide"
        speed={800}
        slidesPerView={"auto"}
        spaceBetween={40}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={images.core} alt="" className="small_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.pictures} alt="" className="small_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.aboutUs} alt="" className="small_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.contact} alt="" className="small_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SiteGrid;
