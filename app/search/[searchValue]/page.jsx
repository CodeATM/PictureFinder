"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import FetchingError from "@Components/Reuseables/FetchingError";
import Skeleton from "@Components/Reuseables/Skeleton";

const Page = ({ params: { searchValue } }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const breakpointColumnObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // Function to fetch images from Unsplash API
  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?&query=${searchValue}&page=${page}&per_page=10&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
      );
      const newPhotos = await response.json();
      setImages((prevPhotos) => [...prevPhotos, ...newPhotos.results]);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error.message || error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, searchValue]);

  if (error)
    return (
      <div className="max-screen-wrapper">
        <div className="max-screen-inner">
          <FetchingError />
        </div>
      </div>
    );
  if (loading)
    return (
      <div className="max-screen-wrapper">
        <div className="max-screen-inner">
          <Skeleton />
        </div>
      </div>
    );

  return (
    <section className="max-screen-wrapper my-[80px] ">
      <div className="max-screen-inner">

        <div className=" mt-[40px]">
          <InfiniteScroll
            dataLength={images.length}
            next={() => setPage(page + 1)}
            hasMore={true}
          >
            <MasonryGrid images={images} />
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

export default Page;
