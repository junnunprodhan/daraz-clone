import {categories, subCategories} from "@/source/constant/dummy";
import Carousel from "@/source/components/hero/carousel";
import Category from "@/source/components/hero/category";

function Hero() {
  return (
    <div className="bg-slate-200 transition-all ">
      <div className="container relative">
        <div className="grid grid-cols-11 ">
          <div
            className="xl:col-span-2 col-span-11 md:block hidden md:py-0 py-5 border md:border-none relative md:col-span-3 w-full bg-white"
          >
            <ul>
              {categories.map((item, i) => {
                const sub = subCategories.filter(
                  (x) => x.category === item._id
                );
                return <Category item={item} subcategory={sub} key={i} />;
              })}
            </ul>
          </div>
          <div className="xl:col-span-9 md:col-span-8 col-span-11">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
