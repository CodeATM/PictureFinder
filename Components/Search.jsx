"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import searchImage from "@lib/search";

const Search = ({ showBackground }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchValue("");
    router.push(`search/${searchValue}/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for images"
        className={`w-full relative py-1 pl-12 pr-4 outline-none bg-transparent border-[1px] rounded-xl border-gray-300 ${
          showBackground ? "text-gray-700" : "text-gray-400"
        } `}
      />
      <FiSearch className="absolute top-2 left-4 pl-1 py-1 text-gray-500 text-2xl" />
    </form>
  );
};

export default Search;
