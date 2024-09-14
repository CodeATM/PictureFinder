"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import FetchingError from "@Components/Reuseables/FetchingError";
import Skeleton from "@Components/Reuseables/Skeleton";

const ImageSection = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
        );
        const newPhotos = await response.json();
        setImages((prevPhotos) => [...prevPhotos, ...newPhotos]);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [page]);

  if (error) return <FetchingError />;
  if (loading) return <Skeleton />;

  return (
    <section className="my-8">
      <div className="">
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
        >
          <MasonryGrid images={images} />
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default ImageSection;
