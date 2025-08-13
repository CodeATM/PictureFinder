"use client";
import { useState, useEffect } from "react";
import { fetchUnsplashCollections } from "@lib/DataFetching";
import Link from "next/link";
import { useUnsplashCollections } from "@lib/hooks/collection-hooks";
import { CollectionComponentSkeleton } from "@Components/Reuseables/Skeleton";

const LandingCollection = () => {
  const { data, isLoading, error } = useUnsplashCollections();
  console.log(data)

  return (
    <div className="h-full w-full rounded-[10px] border-[1px] border-[#d1d1d1] p-[16px] space-y-[10px] ">
      <div className="flex justify-between items-center">
        <p className="text-[18px] leading-[28px] font-[500] text-[#111] cursor-default">
          Top Collections
        </p>

        <span className="text-[16px] leading-[24px] font-[400] text-[#292929] cursor-pointer underline ">
          <Link href="/collections">See all</Link>
        </span>
      </div>
      {isLoading || data.length == 0 ? (
        <CollectionComponentSkeleton />
      ) : (
        <ul>
          {data.map((collection) => (
            <Link href={`/collections/${collection.id}`} key={collection.id}>
              <li className="mb-4 flex gap-[8px] cursor-pointer hover:bg-[#f3f3f3] px-[8px] py-[6px] rounded-[8px] ">
                <div className="h-[50px] w-[50px] ">
                  {collection.cover_photo && (
                    <img
                      src={collection.cover_photo.urls.thumb}
                      alt={collection.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>

                <div className="">
                  <h2 className="text-[15px] leading-[24px] font-[500] text-[#111] ">
                    {collection.title}
                  </h2>
                  <p className="text-[14px] leading-[24px] font-[400] text-[#838383] ">
                    by {collection.user.name}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LandingCollection;
