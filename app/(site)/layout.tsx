import React from "react";
import Footer from "@/source/components/footer/footer";
import "swiper/css";
import "swiper/css/pagination";
import StickyNav from "@/app/(site)/stickyNav";

type Props = { children: React.ReactNode };
function SiteLayout({ children }: Props) {
  return (
    <div className='relative'>
        <StickyNav/>
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;
