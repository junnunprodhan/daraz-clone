import React from "react";
import ShopSidebar from "@/source/bars/shopSidebar";

type Props = { children: React.ReactNode };
function DashboardLayout({ children }: Props) {
  return <div>
    <div className="h-10 bg-primary flex items-center justify-between">

    {/*  Top Bars  */}
      <div className="w-[200px] flex text-center justify-center">
        <span className="text-white  text-xl ">Shop</span>
      </div>
      <div className="flex mx-2 items-center gap-2">
        <span className="rounded-full h-8 w-8 bg-teal-600 flex justify-center items-center text-white hover:bg-teal-700 transition">
          <i className="bi bi-lightning"></i>
        </span>
        <span className="rounded-full h-8 w-8 bg-teal-600 flex justify-center items-center text-white hover:bg-teal-700 transition">
          <i className="bi bi-person"></i>
        </span>
        <span className="rounded-full h-8 w-8 bg-teal-600 flex justify-center items-center text-white hover:bg-teal-700 transition">
          <i className="bi bi-gear"></i>
        </span>
      </div>
    </div>
    <div className="flex">
      <div className="w-[200px] bg-primary">
        <div className="h-[calc(100vh-2.5rem)]">
          <ShopSidebar/>
        </div>
      </div>
      <div className="w-[calc(100%-200px)]">
        <div>
          {children}
        </div>
      </div>
    </div>
  </div>;
}

export default DashboardLayout;
