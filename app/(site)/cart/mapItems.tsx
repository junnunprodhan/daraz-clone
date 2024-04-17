"use client";
import QuantityForm from "@/source/components/common/quantityForm";
import Button from "@/source/components/global/button";
import { removeFromCart } from "@/source/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const MapItems = ({ item }: { item: CartProduct }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="lg:flex border-t block my-2 gap-2 items-center justify-between">
        <div className="flex my-2 w-full gap-2 items-center">
          <Link href={`/product?view=${item._id}`}>
            <Image
              className="lg:w-auto rounded w-24  lg:h-auto"
              src={item.thumbnail}
              alt={"item"}
              width={40}
              height={40}
            />
          </Link>
          <div className="flex w-full flex-col">
            <Link href={`/product?view=${item._id}`}>
              <h2 className="sm:text-base text-sm">
                {item.title.slice(0, 40)}
              </h2>
            </Link>
            <div className="flex items-center gap-5">
              <div className="text-sm w-2/4">
                <span>Price: </span>
                <span className="text-primary">
                  ৳{" "}
                  {item.discountPrice && item.discountPrice < item.price
                    ? item.discountPrice
                    : item.price}
                </span>
              </div>
              <QuantityForm className={"text-sm"} item={item} />
            </div>
          </div>
        </div>
        <div className="flex my-2  items-center">
          <Button
            onClick={() => dispatch(removeFromCart(item))}
            className="bg-primary lg:w-auto w-full hover:opacity-80 text-sm py-1 text-white rounded px-2"
            title={"Remove"}
          />
        </div>
      </div>
    </>
  );
};

export default MapItems;
