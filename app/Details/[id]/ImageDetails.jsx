"use client";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiHeart, FiChevronUp, FiChevronDown, FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import img from "@public/assets/pic-2.png";
import banner1 from "@public/assets/5.jpg";
import Details from "./Details";
import ImagesContainer from "@Components/ImagesContainer";
import RelatedImages from "./RelatedImages";

const ImageDetails = ({ toggleTab, toggleState }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 opacity-1 visible transition duration-300">
      <MdOutlineCancel
        className="absolute right-8 top-8 text-xl cursor-pointer"
        // onClick={() => toggleTab(0)}
      />
      <div className=" relative p-5 rounded-md bg-white md:w-[70%] h-[90%] overflow-auto">
        <div className="heading flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <Image
              src={img}
              alt={img}
              className="w-[35px] h-[35px] rounded-full"
            />
            <div className="leading-tight">
              <h3 className="font-semibold  tracking-wide">John Doe</h3>
              <p className="text-sm text-gray-500 font-semibold">jodoe</p>
            </div>
          </div>

          <div className="flex space-x-1 items-center">
            <div className="text-gray-500 border-gray-500 border-[1.5px] rounded-sm p-1">
              <FiPlus className="text-lg " />
            </div>
            <div className="text-gray-500 border-gray-500 border-[1.5px] rounded-sm p-1">
              <FaHeart className="text-lg " />
            </div>
            <div className="relative">
              <div
                className="flex space-x-[1px] cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              >
                <div className="bg-black text-gray-100 flex py-1 px-4 space-x-3 rounded-l-[4px] items-center font-semibold">
                  Download
                </div>
                <button className="bg-black text-gray-100 py-1 px-2 rounded-r-[4px] text-lg">
                  {dropdown ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>
              <ul
                className={
                  dropdown
                    ? "absolute p-2 bg-white shadow-lg  mt-[2px] space-y-2 rounded-b-[4px] z-40 w-full transition-all duration-700"
                    : "hidden"
                }
              >
                <li className="cursor-pointer text-[12px]  font-semibold text-black">
                  Small <span className="text-gray-500">(640 X 360)</span>
                </li>
                <li className="cursor-pointer text-[12px]  font-semibold text-black">
                  Medium <span className="text-gray-500">(1920 x 1080)</span>
                </li>
                <li className="cursor-pointer text-[12px]  font-semibold text-black">
                  Large <span className="text-gray-500">(2400 X 1350)</span>
                </li>

                <div className="w-full my-2 bg-gray-600 h-[1px]"></div>
                <li className="cursor-pointer text-[12px]  font-semibold text-black">
                  Original <span className="text-gray-500">(2400 X 1350)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-3 w-full">
          <Image src={banner1} alt="img" />
        </div>

        <Details />

        <div className="mt-4">
          <p className="text-lg font-semibold text-black">Related photos</p>
          <RelatedImages />
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
