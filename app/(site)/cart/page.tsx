"use client";
import Calculator from "@/app/(site)/cart/calculator";
import MapItems from "@/app/(site)/cart/mapItems";
import Button from "@/source/components/global/button";
import { RootState } from "@/source/store/store";
import { useSelector } from "react-redux";

function CartPage() {
  const { product } = useSelector((state: RootState) => state.cartState);

  return (
    <div className="container my-5 min-h-[50vh]">
      {!product.length ? (
        <div className="bg-white min-h-[50vh]  items-center flex justify-center">
          <h2 className="text-2xl text-gray-600">Cart is empty</h2>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-6 gap-2 ">
            <div className="flex md:col-span-4 bg-white flex-col p-2">
              <div className="flex items-center justify-between">
                <span>All product</span>
                <Button
                  // onClick={() => dispatch(removeFromCart(item))}
                  className="bg-orange-200 px-4 lg:w-auto hover:opacity-80 text-sm py-1 text-primary rounded "
                  title={
                    <div className="flex font-bold items-center gap-[6px]">
                      <i className="bi bi-trash"></i>
                      <span>All</span>
                    </div>
                  }
                />
              </div>
              {product.map((item, index) => (
                <MapItems item={item} key={index} />
              ))}
            </div>
            <div className="bg-white p-2 md:col-span-2">
              <Calculator title="Checkout" actionType="CHECKOUT" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
