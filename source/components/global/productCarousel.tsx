'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper";
import Image from "next/image";
import NavigationSlide from "@/source/components/global/navigationSlide";

const ProductCarousel = ({images}:{images:string[]}) => {

    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation,A11y]}
                className="absolute"
                style={{overflow:"visible"}}
            >
                {images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image
                                id="cover"
                                className="flex hover:opacity-80 h-full object-cover"
                                src={item}
                                width={1280}
                                height={720}
                                alt="carousel"
                                priority={true}
                            />
                        </SwiperSlide>
                    );
                })}
                <NavigationSlide/>
                </Swiper>
             </>
    );
};

export default ProductCarousel;
