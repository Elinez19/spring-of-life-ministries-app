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
      {/* <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Empowering Dreams, Transforming Destinies: Spring of Life
                  Ministry - A Beacon of Hope for Young Hearts
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Spring of Life is a non-profit making Christian ministry that
                  offers opportunities for collaborative effort to reach out to
                  Youths and young adults.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://school.purplebeetech.com/"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Empower Youth Now
                  </Link>
                  <Link
                    href="https://school.purplebeetech.com/"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Join Us Transform Youth
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="max-w-c-1315 mx-auto px-4 pb-40 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}

        {/* <!-- Section Title End --> */}
      </div>
      {/* <!-- Slider main container --> */}
      <div className="slides mt-0 h-full w-full pt-6 lg:pt-0">
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
