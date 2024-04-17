import React from 'react';
import {categories, subCategories} from "@/source/constant/dummy";
import Category from "@/source/components/hero/category";

type Props={
    activeNav:{
        nav:Boolean,
        menu:Boolean
        hover:Boolean
    },
    setActiveNav: React.Dispatch<React.SetStateAction<{nav: boolean, menu: boolean, hover: boolean}>>
}
const MobileMenu = ({activeNav,setActiveNav}:Props) => {

    return (
        <div className="absolute top-[93px] z-50 w-full left-0">

                <div className="grid grid-cols-11 ">
                    <div
                        id="menu"
                        onMouseLeave={()=>{
                            setActiveNav((s)=>({...s,hover:false}))
                        }}
                        className={`${activeNav.hover?"md:block":"md:hidden"} bg-white xl:col-span-2 col-span-11 hidden md:py-0 py-5 border md:border-none relative md:col-span-3 w-full`}
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
                </div>
        </div>
    );
};

export default MobileMenu;
