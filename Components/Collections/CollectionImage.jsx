import React from "react";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";

const CollectionImage = ({ images, count }) => {
  // If images is empty, show error message
  if (!images || images.length === 0) {
    return (
      <section className="mt-16">
        <p className="text-red-500 text-lg font-medium">
          This collection cannot be viewed due to Unsplash restrictions
        </p>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div>
        <p className="text-[18px] leading-[26px] font-[500] text-[#111]">
          {count} Images
        </p>
      </div>
      <div>
        <MasonryGrid images={images} />
      </div>
    </section>
  );
};

export default CollectionImage;
