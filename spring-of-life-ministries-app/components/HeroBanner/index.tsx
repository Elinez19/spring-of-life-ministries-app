"use client";
// import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { HerobannerData } from "./HerobannerData";
import SingleHeroBanner from "./SingleHerobanner";
import Link from "next/link";

const Herobanner = () => {
  return (
    <>
      <div className="max-w-c-1315 mx-auto px-4 pb-[-30] md:px-8 xl:px-0"></div>
      {/* <!-- Slider main container --> */}
      <div className="slides mb-[-30] h-full w-full pt-6 lg:pt-0">
        {/* <!-- Additional required wrapper --> */}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {HerobannerData.map((banner) => (
            <SwiperSlide key={banner?.id}>
              <SingleHeroBanner banner={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Herobanner;
