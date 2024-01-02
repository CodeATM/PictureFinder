"use client";
import React from "react";
import searchImages from "@lib/search";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Page = async ({ params: { searchValue } }) => {
  // console.log(searchValue);

  // const images = await searchImages(searchValue);

  // const Images = await images.results;

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Function to fetch images from Unsplash API
    const fetchImages = async (searchValue) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE&query=${searchValue}&per_page=50`
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
    <div>
      <section className="images py-16 container">
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true} // Set to false when you've fetched all images
          loader={<h4>Loading...</h4>}
        >
          <div className="py-8">
            <h1 className="text-gray-700 font-semibold tracking-wide text-2xl">
              Showing results for{" "}
              <span className="text-black font-bold text-3xl">
                '{searchValue}'
              </span>
            </h1>
          </div>
          <div className="grid_img">
            {Images.map((image) => (
              <Link href={`details/${image.id}/`} key={image.id}>
                <Image
                  src={image.urls.regular}
                  alt={image.alt_description}
                  className="grid_image"
                  width="500"
                  height="500"
                />
              </Link>
            ))}
          </div>
          {/* <div className="flex justify-center">
            <button className="text-gray-700 hover:text-gray-500 px-3 py-2 text-lg font-semibold mt-5">
              Show more
            </button>
          </div> */}
        </InfiniteScroll>
      </section>
    </div>
  );
};

export default Page;
