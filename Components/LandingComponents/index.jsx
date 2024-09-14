import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import LandingCollection from "./LandingCollection";

const LandingSection = () => {
  return (
    <div className=" my-[40px] lg:my-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] min-h-[356px] ">
        <div className=" col-span-1 md:col-span-1 lg:col-span-2">
          <Content />
        </div>
        <div className="col-span-1 hidden lg:block">
          <Banner />
        </div>
        <div className="h-full col-span-1">
          <LandingCollection />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
