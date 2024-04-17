"use client";
import Navbar from "@/source/components/header/navbar";
import { useEffect, useState } from "react";

const StickyNav = () => {
  const [activeNav, setActiveNav] = useState({
    nav: false,
    menu: false,
    hover: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setActiveNav((s) => ({ ...s, nav: true }));
      } else {
        setActiveNav((s) => ({ ...s, nav: false }));
      }

      if (window.scrollY > 400) {
        setActiveNav((s) => ({ ...s, menu: true }));
      } else {
        setActiveNav((s) => ({ ...s, menu: false, hover: false }));
      }
    });
  }, []);

  return (
    <>
      <Navbar setActiveNav={setActiveNav} activeNav={activeNav} />
    </>
  );
};

export default StickyNav;
