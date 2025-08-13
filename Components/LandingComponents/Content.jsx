import Search from "@Components/Reuseables/Search";
import React from "react";

const Content = () => {
  return (
    <div className="flex items-end h-full w-full">
      <div className="space-y-[8px] w-full ">
        <h1 className="text-[30px] leading-[38px] text-[#111] font-[700]">
          Apertur
        </h1>
        <div className=" space-y-[2px] ">
          <p className="text-[18px] leading-[22px] text-[#292929] font-[400]">
            The internet’s source for visuals.
          </p>
          <p className="text-[18px] leading-[22px] text-[#ccc2c2] font-[400]">
            Powered by creators everywhere.
          </p>
        </div>
        <div className="w-full">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Content;
