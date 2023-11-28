// Import other necessary dependencies
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import getAllImages from "@lib/getAllImages";

const ImagesContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0); // Start from the first page

  const fetchMorePhotos = async () => {
    try {
      const nextPage = page + 1; // Increment the page
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${nextPage}&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`
      );
      const newPhotos = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setPage(nextPage); // Use the incremented page value
    } catch (error) {
      console.error("Error fetching more photos:", error);
    }
  };

  useEffect(() => {
    fetchMorePhotos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY ===
        document.documentElement.offsetHeight
      ) {
        fetchMorePhotos();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [photos, page]); // Include 'page' in the dependencies to fix the missing dependency warning.

  return (
    <section className="images my-8">
      <div className="container">
        <div className="grid_img">
          {photos.map((image) => (
            <Link href={`Details/${image.id}/`} key={image.id}>
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

        <div className="flex justify-center">
          <button
            className="text-gray-700 hover:text-gray-500 px-3 py-2 text-lg font-semibold mt-5"
            onClick={fetchMorePhotos}
          >
            Show more
          </button>
        </div>
      </div>

      {/* <ImageDetails className='hidden' /> */}
    </section>
  );
};

export default ImagesContainer;
