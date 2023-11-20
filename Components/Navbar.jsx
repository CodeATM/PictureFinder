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
    <div
      className={`w-full h-16 py-4 px-3 z-50 fixed transition  duration-500 top-0 ${
        showBackground ? "bg-white text-black" : "text-gray-500"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="logo flex items-center space-x-2">
            <FiImage className="text-xl" />{" "}
            <span className="font-semibold tracking-wide">PicFinder</span>
          </div>
        </Link>

        <div className="relative w-64">
          <Search showBackground={showBackground} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
