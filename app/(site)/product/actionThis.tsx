"use client"
import React from 'react';
import Button from "@/source/components/global/button";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "@/source/slices/cartSlice";
import {RootState} from "@/source/store/store";
import QuantityForm from "@/source/components/common/quantityForm";

const ActionThis = ({item}:{item:Product}) => {
    const dispatch = useDispatch()
    const {product} = useSelector((state:RootState)=>state.cartState)
    const findThis = product.find(x=>x._id===item._id)

    function add(){
        dispatch(addToCart(item))
    }
    function buy(){

    }
    return (
        <>
            {
                findThis?
                    <div className="my-2">
                        <QuantityForm item={findThis}/>
                    </div>
                :null
            }
            <div  className="flex items-center gap-2">
                <Button onClick={buy} className="bg-[#26abd4] hover:opacity-90  py-2 flex-1 text-white" title="Buy Now" />
                <Button onClick={add} className="bg-primary hover:opacity-90  py-2 flex-1 text-white" title="Add to cart" />
            </div>
        </>
    );
};

export default ActionThis;
