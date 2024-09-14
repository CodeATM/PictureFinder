"use client";
import React, { useState, useEffect } from "react";
import { FiMoon, FiImage } from "react-icons/fi";
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
  const top = 98;

  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY >= top) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <div className="max-screen-wrapper py-4 px-3 h-16 transition  duration-500 top-0">
      <div className="nav-inner-wrapper flex justify-between items-center pr-2 gap-[30px] ">
        <Link href="/">
          <div className="logo flex items-center space-x-2">
            <FiImage className="text-xl" />
            <span className="font-semibold tracking-wide">PicFinder</span>
          </div>
        </Link>

        <div className="flex-1">
          <Search showBackground={showBackground} />
        </div>

        <div className="hidden md:block">
          <button className="bg-[#111] text-white py-3 px-4 rounded-xl ext-[18px] leading-[22px] font-[500] ">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
