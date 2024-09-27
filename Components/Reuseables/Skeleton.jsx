import React from "react";

export const Skeleton = () => {
  return (
    <div className="my-8">
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
      </div>
    </div>
  );
};

export const CollectionComponentSkeleton = () => {
  return (
    <div className="duration-500 animate-pulse">
      <div className="mb-4 flex gap-[8px] cursor-pointer px-[8px] py-[6px] rounded-[8px]">
        <div className="h-[50px] w-[50px] bg-[#e3e3e3] rounded-lg"></div>
        <div className="space-y-[5px] w-[250px]">
          <div className="h-[25px] w-full bg-[#e3e3e3] rounded-lg "></div>
          <div className="h-[20px] w-full bg-[#e3e3e3] rounded-lg "></div>
        </div>
      </div>
      <div className="mb-4 flex gap-[8px] cursor-pointer px-[8px] py-[6px] rounded-[8px]">
        <div className="h-[50px] w-[50px] bg-[#e3e3e3] rounded-lg"></div>
        <div className="space-y-[5px] w-[250px] ">
          <div className="h-[25px] w-full bg-[#e3e3e3] rounded-lg "></div>
          <div className="h-[20px] w-full bg-[#e3e3e3] rounded-lg "></div>
        </div>
      </div>
      <div className="mb-4 flex gap-[8px] cursor-pointer px-[8px] py-[6px] rounded-[8px]">
        <div className="h-[50px] w-[50px] bg-[#e3e3e3] rounded-lg"></div>
        <div className="space-y-[5px] w-[250px]">
          <div className="h-[25px] w-full bg-[#e3e3e3] rounded-lg "></div>
          <div className="h-[20px] w-full bg-[#e3e3e3] rounded-lg "></div>
        </div>
      </div>
      <div className="mb-4 flex gap-[8px] cursor-pointer px-[8px] py-[6px] rounded-[8px]">
        <div className="h-[50px] w-[50px] bg-[#e3e3e3] rounded-lg"></div>
        <div className="space-y-[5px] w-[250px]">
          <div className="h-[25px] w-full bg-[#e3e3e3] rounded-lg "></div>
          <div className="h-[20px] w-full bg-[#e3e3e3] rounded-lg "></div>
        </div>
      </div>
    </div>
  );
};

export const BannerSlideComponentSkeleton = () => {
  return (
    <div className="h-full w-full animate-pulse rounded-lg bg-[#e3e3e3]"></div>
  );
};
