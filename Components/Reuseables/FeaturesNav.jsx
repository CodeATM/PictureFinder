"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Correct imports for Font Awesome icons
import { featureDummy } from "../Dummy/Dummy";

const FeaturesNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef(null);
  const router = useRouter();

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setScrollPosition((prev) => Math.max(prev - 200, 0));
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setScrollPosition((prev) => prev + 200);
    }
  };

  const handleFeatureClick = (feature) => {
    setSearchValue(feature);
    handleSubmit(feature);
  };

  const handleSubmit = async (searchValue) => {
    router.push(`/search/${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className="max-screen-wrapper h-[64px] flex items-center py-2">
      <div className="nav-inner-wrapper flex items-center justify-between w-full">
        <button
          onClick={handleScrollLeft}
          className="flex items-center justify-center p-3 bg-white/20"
          disabled={scrollPosition <= 0}
        >
          <FaChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 flex-nowrap py-2 hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {featureDummy.map((text) => (
            <p
              key={text.id}
              onClick={() => handleFeatureClick(text.text)}
              className="text-[16px] leading-[24px] font-[400] text-[#838383] hover:text-[#111] cursor-pointer whitespace-nowrap"
            >
              {text.text}
            </p>
          ))}
        </div>

        <button
          onClick={handleScrollRight}
          className="flex items-center justify-center p-3 bg-white/20 "
        >
          <FaChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default FeaturesNav;
