'use client';
import React, { useState } from "react";

const UnsplashContext = React.createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  // Get the latest images
  const GetImages = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos?per_page=40&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE"
      );
      const result = await response.json();
      setImages(result);
      console.log(images);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  // Search for images
  const SearchImages = async (searchValue) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE&query=${searchValue}&per_page=50`
      );
      const result = await response.json();
      setImages(result);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  return (
    <UnsplashContext.Provider
      value={{
        images,
        setImages,
        SearchImages,
        GetImages,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export { UnsplashContext, ImageProvider };

