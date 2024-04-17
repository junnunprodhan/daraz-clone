import Image from "next/image";
import Hero from "@/source/components/hero/hero";
import Button from "@/source/components/global/button";
import Product from "@/source/components/global/product";
import { allCat, featureCategory, products } from "@/source/constant/dummy";
import FeatureCategory from "@/source/components/common/featureCategory";


export default function Home() {

  return (
    <>
      <Hero />
      <div className="container ">
        {/*Event Banner*/}
        <div className={`flex overflow-hidden rounded-b-3xl items-center md:mx-20`}>
          <Image
              className="w-full h-fw-full"
              src={"/images/event.jpg"}
              alt="event"
              width={1280}
              height={720}
              priority={true}
          />
        </div>
        {/* Feature Categories  */}
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 my-5">
          {featureCategory.map((feature, index) => (
            <div
              key={index}
              className="flex hover:shadow-md cursor-pointer bg-white gap-2 p-1 items-center rounded-full"
            >
              <Image src={feature.image} width={30} height={30} alt="icon" />
              <h4>{feature.name}</h4>
            </div>
          ))}
        </div>
        {/* FlashSale */}
        <div>
          <h2 className="text-xl">FlashSale</h2>
          <div className="bg-white">
            {/* Header */}
            <div className="sm:flex p-2  border-b border-slate-300 items-center">
              <span className="bg-transparent w-40  text-primary font-medium">
                On Sale Now
              </span>
              <div className="flex  justify-between w-full md:gap-10 gap-2 lg:px-5 sm:px-2 items-center">
                <div className="flex gap-2 items-center">
                  <h4>Ending in</h4>
                  <div className="flex items-center gap-2 text-center">
                    <div className="span bg-primary px-3 py-2 rounded-sm text-white">
                      10
                    </div>
                    <div className="span bg-primary px-3 py-2 rounded-sm text-white">
                      11
                    </div>
                    <div className="span bg-primary px-3 py-2 rounded-sm text-white">
                      20
                    </div>
                  </div>
                </div>
                <Button
                  className="text-primary uppercase border-primary mx-2 border px-2 py-1"
                  title="See more"
                />
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
            {products.slice(0, 6).map((product, i) => (
              <Product item={product} key={i} />
            ))}
          </div>
        </div>
        {/* Categories  */}
        <div className="my-5">
          <h2 className="text-xl">Categories</h2>
          <div className="bg-white grid  lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3">
            {allCat.map((item, i) => (
              <FeatureCategory key={i} item={item} />
            ))}
          </div>
        </div>
        {/*  Recommended Products */}
        <div className="my-5">
          <h2 className="text-xl">Just For You</h2>
          <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
            {products.slice(0, 24).map((item, i) => (
              <Product key={i} item={item} />
            ))}
          </div>
        </div>
        {/*  Recommended Products */}
        <div className="my-5 text-center">
          <Button
            className="border border-primary p-2 uppercase text-primary text-sm md:w-2/6 w-2/3"
            title={"Load more"}
          />
        </div>
      </div>
    </>
  );
}
