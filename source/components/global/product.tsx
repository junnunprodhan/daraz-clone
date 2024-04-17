import { discountCalculator } from "@/source/utils/generator";
import Image from "next/image";
import Link from "next/link";

function Product({ item }: { item: Product }) {
  return (
    <Link href={{pathname:"/product", query:{view:item._id}}} className="col-span-1 cursor-pointer hover:shadow-md bg-white">
      <div className="flex w-full items-center justify-between">
        <Image
          className="w-full h-full"
          src={item.thumbnail}
          width={100}
          height={100}
          alt="product"
        />
      </div>
      <div className="p-2">
        <h3 className="text-[13px] text-slate-800">{item.title}</h3>
        <span className="text-primary block font-medium">
          ৳
          {item.discountPrice && item.discountPrice < item.price
            ? item.discountPrice
            : item.price}
        </span>
        <div className="flex items-center gap-2">
          {item.price > item.discountPrice ? (
            <span className="line-through text-xs text-slate-500">
              {" "}
              ৳{item.price}
            </span>
          ) : null}
          {item.price > item.discountPrice ? (
            <span className="text-sm">
              -
              {discountCalculator(item.price, item.discountPrice).toFixed(2) +
                "%"}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default Product;
