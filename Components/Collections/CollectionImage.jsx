import React from "react";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import { fetchCollectionImages } from "@lib/DataFetching";

const CollectionImage = async ({ collection, count }) => {
  const fetchedImages = await fetchCollectionImages(collection);
  console.log(fetchedImages);


  return (
    <section className="mt-16">
      <div>
        <p className="text-[18px] leading-[26px] font-[500] text-[#111]">
          {count} Images
        </p>
      </div>
      <div>
        <MasonryGrid images={fetchedImages} />
      </div>
    </section>
  );
};

export default CollectionImage;
