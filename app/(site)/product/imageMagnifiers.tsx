"use client"
import React from 'react';
import Image from "next/image";

const ImageMagnifiers = ({image}:{image:string}) => {
    return (
        <>
            <Image className="w-full" src={image} width={300} height={200} alt="product"/>
        </>
    );
};

export default ImageMagnifiers;
