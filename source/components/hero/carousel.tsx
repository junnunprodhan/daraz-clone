"use client";
import Image from "next/image";
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {carousels} from "@/source/constant/dummy";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // onActiveIndexChange={(e) => {
        // console.log(data);
        // }}
        modules={[Autoplay, Pagination]}
        className="relative sm:h-[200px] md:h-[340px]"
      >
        {carousels.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                id="cover"
                className="flex h-full object-cover"
                src={item.image}
                width={1280}
                height={720}
                alt="carousel"
                priority={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
