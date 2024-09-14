"use client";
import React, { useState } from "react";
import UserPhotos from "./UserPhotos";
import UserLikes from "./UserLikes";
import UserCollection from "./UserCollection";
import { IoIosHeart } from "react-icons/io";
import { FaFolder, FaImage } from "react-icons/fa";

const tabs = [
  { title: "Photos", key: "photos", icon: <FaImage /> },
  { title: "Likes", key: "likes", icon: <IoIosHeart /> },
  { title: "Collections", key: "collections", icon: <FaFolder /> },
];

const componentMap = {
  photos: UserPhotos,
  likes: UserLikes,
  collections: UserCollection,
};

export const UserData = ({ userId }) => {
  const [current, setCurrent] = useState("photos");

  const CurrentComponent = componentMap[current];

  return (
    <div className="">
      <div className="pl-[50px] my-[40px] flex w-full gap-x-[18px] border-b-[2px] border-b-[#eee] sm:my-[60px]  md:gap-x-[30px]">
        {tabs.map((tab) => {
          const active = tab.key === current;
          return (
            <button
              className={`${
                active ? "border-b-[#111] text-[#111] border-b-[2px]" : "text-[#838383]"
              } mb-[-3px] flex items-center gap-[8px]  pb-[6px] text-[16px] leading-[24px] md:pb-[8px] md:text-[20px] md:leading-[36px] font-[500] hover:text-[#111] `}
              key={tab.key}
              onClick={() => setCurrent(tab.key)}
            >
              <span className="">{tab.icon}</span>
              <p>{tab.title}</p>
            </button>
          );
        })}
      </div>
      <div className="max-screen-wrapper">
        <div className="max-screen-inner">
          <CurrentComponent username={userId} />
        </div>
      </div>
    </div>
  );
};
