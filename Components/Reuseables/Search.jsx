"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import searchImage from "@lib/search";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchValue("");
    router.push(`/search/${searchValue}/`);
  };

  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#eee] flex items-center gap-2 h-[45px] relative px-[10px] rounded-xl border-gray-300"
      >
        <FiSearch className="text-[18px] text-[#111]" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for images and illustrations"
          className="w-full outline-none bg-transparent placeholder:text-[16px] placeholder:text-[#111] placeholder:leading-[22px] placeholder:font-[400] "
        />
      </form>
    </div>
  );
};

export default Search;
