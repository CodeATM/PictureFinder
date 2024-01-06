// Import other necessary dependencies
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ImagesContainer = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Function to fetch images from Unsplash API
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?per_page=40&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
        );
        console.log(response);
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
      <div className="grid_img">
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true} // Set to false when you've fetched all images
        >
          <div className="gallery">
            {images.map((image) => (
              <Link href={`/details/${image.id}`} key={image.id}>
                <div className="pic">
                  <Image
                    src={image.urls.regular}
                    alt={image.alt_description}
                    className="grid_image"
                    width="500"
                    height="500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>

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
