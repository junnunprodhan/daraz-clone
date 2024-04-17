"use client";
import Button from "@/source/components/global/button";
import TextInput from "@/source/components/global/textInput";
import { RootState } from "@/source/store/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Calculator = ({
  actionType,
  title,
}: {
  title: string;
  actionType: "CHECKOUT" | "ORDER";
}) => {
  const { push } = useRouter();
  const { product } = useSelector((state: RootState) => state.cartState);
  const price = product.reduce((sum, i) => {
    const calc =
      i.discountPrice && i.discountPrice < i.price ? i.discountPrice : i.price;
    return sum + i.quantity * calc;
  }, 0);

  let vat = parseInt((5 * (price / 100)).toFixed(0));
  let shippingCost = 50;

  // authentication
  const { data } = useSession();

  function confirmOrder() {}

  return (
    <div className="md:px-5 ">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg text-slate-600">
          Total: {product.length} items
        </h2>
        <span className="text-slate-600">Price: ৳ {price}</span>
        <span className="text-slate-600">Vat/tax 5%: ৳ {vat}</span>
        <span className="text-slate-600">
          Shipping charge: ৳ {shippingCost}
        </span>
        <div className="span h-[1px] bg-slate-300"></div>
        <div className="flex items-cente gap-2">
          <TextInput
            className="py-1 border border-slate-200 focus:border-slate-300"
            placeholder="Apply Coupon..."
          />
          <Button
            title="Apply"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-5"
          />
        </div>
        <span className="text-lg text-slate-600">
          Sub total: ৳ {price + vat + shippingCost}
        </span>
      </div>
      <div className="flex items-end">
        <Button
          onClick={() => {
            if (actionType === "CHECKOUT") {
              if (data?.user) {
                push("/checkout");
              } else {
                push("/login?callbackUrl=%2Fcheckout");
              }
            } else {
              confirmOrder();
            }
          }}
          className="bg-primary text-white rounded w-full hover:opacity-80 transition my-2 py-1"
          title={title}
        />
      </div>
    </div>
  );
};

export default Calculator;
