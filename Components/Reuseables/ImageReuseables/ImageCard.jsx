"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoIosHeart } from "react-icons/io";

const ImageCard = ({
  id,
  src,
  alt,
  ownerName,
  ownerProfileImage,
  userName,
  likes,
}) => {
  return (
    <Link href={`/image/${id}`}>
      <div className="relative group cursor-pointer m-2">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="rounded-[6px]"
        />

        {/* Overlay shown on hover */}
        <div className="absolute inset-0 flex flex-col px-[20px] justify-end items-start bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[6px]">
          <div className="flex justify-between w-full">
            <div className="flex gap-[8px]">
              <Link href={`/user/${userName}`}>
                <Image
                  src={ownerProfileImage}
                  alt={`${ownerName}'s profile`}
                  width={50}
                  height={50}
                  className="rounded-full mb-2"
                />
              </Link>
              <div className="">
                <Link href={`/user/${userName}`}>
                  <p className="text-[15px] leading-[24px] font-[500] text-[#fff]">
                    @{userName}
                  </p>
                </Link>
                <Link href={`/user/${userName}`}>
                  <p className="text-[14px] leading-[24px] font-[400] text-[#838383]">
                    {ownerName}
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex gap-[6px] items-center">
              <span className="text-[18px] text-[#f1f1f1]">
                <IoIosHeart />
              </span>
              <p className="text-[18px] leading-[24px] font-[500] text-[#f1f1f1]">
                {likes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
