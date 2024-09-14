import React from "react";
import Link from "next/link";

const CollectionCard = ({collection}) => {
  return (
    <div>
      <Link href={`/Collection/${collection.id}`} key={collection.id}>
        <div key={collection.id} className="relative group">
          <div className="w-full h-64 bg-gray-200 relative rounded-md overflow-hidden">
            <div className="grid grid-cols-3 grid-rows-2 gap-1 h-full">
              {collection.preview_photos.slice(0, 3).map((photo, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={photo.urls.small}
                    alt={`Collection ${collection.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <div className="space-y-1">
              <h4 className="text-[18px] leading-[24px] font-[500] text-[#111]">
                {collection.title}
              </h4>
              <p className="text-[16px] leading-[24px] font-[400] text-[#838383]">
                {collection.total_photos} images curated by{" "}
                <Link
                  href={`/user/${collection.user.username}`}
                  className="text-[#111] font-[500] hover:underline "
                >
                  {collection.user.name}
                </Link>
              </p>
            </div>
            <ul className="flex gap-[16px] flex-wrap mt-[6px]">
              {collection.tags.slice(0, 3).map((tag, index) => (
                <li
                  key={index}
                  className="bg-[#f3f3f3] text-[#111] py-[6px] px-[10px] rounded-[3px] text-[16px] leading-[22px] font-[400] cursor-pointer hover:bg-[#eee] capitalize "
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
