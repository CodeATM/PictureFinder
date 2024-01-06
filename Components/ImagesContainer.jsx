// Import other necessary dependencies
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ImagesContainer = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    // Function to fetch images from Unsplash API
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?per_page=15&?page=${page}&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
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
        <div className="gallery">
          {images.map((image) => (
            <div className= 'pic'>
            <Link href={`details/${image.id}`} key={image.id}>
              <Image
                src={image.urls.regular}
                alt={image.alt_description}
                className="object-cover"
                width = "500"
                height = "500"
              />
            </Link>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      <div className="flex justify-center">
        <button
          className="text-gray-700 hover:text-gray-500 px-3 py-2 text-lg font-semibold mt-5"
          // onClick={fetchMorePhotos}
        >
          Show more
        </button>
      </div>

      {/* <ImageDetails className='hidden' /> */}
    </section>
  );
};

export default ImagesContainer;
