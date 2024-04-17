"use client"
import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/source/store/store";

const CartItem = () => {
    const {product} = useSelector((state:RootState)=>state.cartState)
    if (product.length){
        return (
            <>
             <span className="flex h-5 w-5">
                  <span className="text-sm rounded-full h-5 w-5">
                      {product.length}
                  </span>
             </span>
            </>
        );
    }else {
        return (
            <>
            </>
        );
    }
};

export default CartItem;
