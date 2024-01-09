"use client";
import React from "react";
import searchImages from "@lib/search";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

const Page = async ({ params: { searchValue } }) => {
  const breakpointColumnObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Function to fetch images from Unsplash API
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?&query=${searchValue}&page=${page}&per_page=10&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
        );
        const newPhotos = await response.json();
        setImages((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Initial fetch
    fetchImages();
  }, [page]);

  return (
    <section className="container mx-auto my-8">
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true} // Set to false when you've fetched all images
      >
        <Masonry
          breakpointCols={breakpointColumnObj}
          className="flex w-auto -ml-[30px] mx-6"
          columnClassName="pl-5"
        >
          {images.map((image) => (
            <div className="mb-6">
              <Link href={`details/${image.id}`} key={image.id}>
                <Image
                  src={image.urls.small}
                  alt={image.alt_description}
                  width="500"
                  height="500"
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
    </section>
  );
};

export default Page;
