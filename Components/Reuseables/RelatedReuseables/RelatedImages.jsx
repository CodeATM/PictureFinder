import React from "react";
import { fetchRelatedUnsplashImages } from "@lib/DataFetching";
import MasonryGrid from "../ImageReuseables/MasonryGrid";

const RelatedImages = async ({ imageId }) => {
  const relatedImages = await fetchRelatedUnsplashImages(imageId);

  return (
    <div className="mt-28 space-y-4 ">
      <div className="">
        <p className="text-[32px] leading-[46px] font-[600] text-[#111] ">
          Related Images
        </p>
      </div>

      <MasonryGrid images={relatedImages} />
    </div>
  );
};

export default RelatedImages;
