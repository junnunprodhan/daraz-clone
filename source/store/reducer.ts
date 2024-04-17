import {combineReducers} from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import userSlice from "../slices/userSlice";
import cartSlice from "@/source/slices/cartSlice";

// All Reducers
export const reducers = combineReducers({
    authState: userSlice,
    productState: productSlice,
    cartState: cartSlice
});
