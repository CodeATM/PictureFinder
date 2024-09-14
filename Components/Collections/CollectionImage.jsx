"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";

const collectionImage = ({ collection, count }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/collections/${collection}/photos?page=${page}&per_page=10&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
        );
        const newPhotos = await response.json();
        setImages((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [page, collection]);

  return (
    <section className="mt-16">
        <div className="">
            <p className="text-[18px] leading-[26px] font-[500] text-[#111]">{count} Images </p>
        </div>
      <div className="">
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more images to show</p>}
        >
          <MasonryGrid images={images} />
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default collectionImage;
