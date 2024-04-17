"use client"
import React from 'react';
import Button from "@/source/components/global/button";
import {useDispatch} from "react-redux";
import {decrementQuantity, incrementQuantity} from "@/source/slices/cartSlice";

interface  StateProduct extends Product{
    quantity:number
    totalPrice:number
}
type Props={
    item:StateProduct,
    className?:string|undefined
}
const QuantityForm = ({item,className}:Props) => {
    const dispatch = useDispatch()

    function increment(){
        dispatch(incrementQuantity(item))
    }
    function decrement(){
        dispatch(decrementQuantity(item))
    }
    return (
        <div className="flex items-center gap-2">
            <h4 className={`me-2 ${className}`}>Quantity</h4>
            <Button onClick={decrement} className="px-1 bg-slate-300 text-slate-600 text-xl" title={<i className="bi bi-dash"></i>}/>
            <span>{item.quantity}</span>
            <Button onClick={increment} className="px-1 bg-slate-300 text-slate-600 text-xl" title={<i className="bi bi-plus-lg"></i>}/>
        </div>
    );
};

export default QuantityForm;
