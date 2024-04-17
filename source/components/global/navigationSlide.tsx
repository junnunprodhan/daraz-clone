import React from 'react';
import {useSwiper} from "swiper/react";
import Button from "@/source/components/global/button";
import {ArrowLeft, ArrowRight} from "@/source/constant/icons";

const NavigationSlide = () => {
    const swiper = useSwiper()
    return (
        <>
            <Button
                onClick={()=>swiper.slidePrev()}
                    className="bg-white absolute top-0 -left-7 z-30 h-full px-1"
                    title={<ArrowLeft className="text-gray-500"/>}/>
            <Button
                onClick={()=>swiper.slideNext()}
                    className="bg-white absolute -right-7 top-0 z-30 h-full px-1"
                    title={<ArrowRight className="text-gray-500"/>}/>
        </>
    );
};

export default NavigationSlide;
