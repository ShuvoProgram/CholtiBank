"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { servicesData } from "@/constants/swiperData";


const SwiperImages = () => {

  return (
    <div className="mt-10 lg:mt-0 max-w-72 md:max-w-sm mx- ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper"
      >
        {servicesData?.map((services) => (
          <SwiperSlide key={services?.id}>
            <div
              className="size-80 md:size-96  rounded-xl bg-cover bg-clip-border bg-center shadow-none"
              style={{ backgroundImage: `url(${services?.imageUrl?.src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImages;
