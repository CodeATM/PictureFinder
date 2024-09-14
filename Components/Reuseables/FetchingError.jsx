import React from "react";
import { AiOutlineDisconnect } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import Search from "./Search";

const FetchingError = () => {
  return (
    <div className="my-8 flex justify-center items-center min-h-[450px] ">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="text-[120px] text-[#838383] ">
          <MdErrorOutline />
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-[30px] leading-[42px] font-[500] text-[#111] ">
            We are currently experiencing issues loading images right now.
          </h1>
          <p className="text-[20px] leading-[32px] font-[400] text-[#838383]">Please check your internet connection try again later</p>

          <Search />
        </div>
      </div>
    </div>
  );
};

export default FetchingError;
