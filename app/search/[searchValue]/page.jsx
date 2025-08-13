"use client";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import FetchingError from "@Components/Reuseables/FetchingError";
import { Skeleton } from "@Components/Reuseables/Skeleton";
import { useUnsplashSearchImages } from "@lib/hooks/collection-hooks";

const Page = ({ params: { searchValue } }) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useUnsplashSearchImages(searchValue);

  // Flatten all pages into a single array
  const images = data ? data.pages.flat() : [];

  if (isError)
    return (
      <div className="max-screen-wrapper">
        <div className="max-screen-inner">
          <FetchingError />
        </div>
      </div>
    );
  if (isLoading)
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
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<Skeleton />}
          >
            <MasonryGrid images={images} />
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

export default Page;
