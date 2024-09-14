import React from "react";
import Link from "next/link";

const CollectionInfo = ({ collection }) => {
  return (
    <div className="">
      <h2 className="text-[47px] leading-[52px] font-bold">
        {collection.title}
      </h2>
      <div className="flex space-x-3 items-center mt-3">
        <img
          src={collection.user.profile_image.medium}
          className=" rounded-full"
          width="40"
          height="40"
        />
        <div className="leading-tight ">
        <Link href={`/user/${collection.user.username}`}>
          <p className="text-[22px] leading-[30px] font-[500] text-[#838383]">
            {collection.user.name}
          </p>
          </Link>
        </div>
      </div>
      {collection.description && (
        <p className="text-[18px] leading-[26px] font-[400] text-[#111]">{collection.description}</p>
      )}
    </div>
  );
};

export default CollectionInfo;
