import React from "react";
import { fetchUser } from "@lib/DataFetching";
import {
  FaInstagram,
  FaTwitter,
  FaLink,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

export const UserDetails = async ({ username }) => {
  const userDetails = await fetchUser(username);
  const {
    name,
    bio,
    profile_image,
    social,
    followers_count,
    following_count,
    location,
    portfolio_url,
    instagram_username,
    twitter_username,
  } = userDetails;
  return (
    <div className="max-screen-wrapper  ">
      <div className="max-screen-inner">
        <div className="lg:flex justify-center flex-col ">
          <div className="flex items-center  space-y-4 md:space-x-4 flex-col md:flex-row">
            <img
              src={profile_image?.large}
              alt={name}
              className="w-48 h-48 rounded-full"
            />
            <div>
              <h1 className="text-[#111] font-[500] text-[20px] leading-[32px] ">
                {name}
              </h1>
              {bio && (
                <p className="text-[#838383] font-[400] text-[17px] leading-[26px] lg:max-w-[500px] ">
                  {bio}
                </p>
              )}
            </div>
          </div>
          {location && (
            <div className=" flex gap-2 mt-4">
              <span className="text-[#838383] text-[17px]">
                <FaLocationArrow />
              </span>
              <p className="text-[#838383] text-[17px] leading-[23px] font-[400] ">
                {location}
              </p>
            </div>
          )}
          {portfolio_url && (
            <div className="mt-2">
              <a
                href={portfolio_url}
                className="text-blue-600 flex items-center"
              >
                <FaLink className="mr-2" /> {portfolio_url}
              </a>
            </div>
          )}
          {instagram_username && (
            <div className="mt-2">
              <a
                href={`https://instagram.com/${instagram_username}`}
                className="text-[#838383] text-[17px] leading-[23px] font-[400] flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </div>
          )}
          {twitter_username && (
            <div className="mt-4">
              <a
                href={`https://twitter.com/${twitter_username}`}
                className="text-[#838383] text-[17px] leading-[23px] font-[400] flex items-center"
              >
                <FaTwitter className="mr-2" /> {twitter_username}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
