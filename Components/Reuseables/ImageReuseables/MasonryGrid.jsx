"use client"; // Client-side component
import React from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

const MasonryGrid = ({ images }) => {
  console.log(images)
  const breakpointColumnObj = {
    default: 4,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnObj}
      className="flex w-auto gap-2 "
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image) => (
        <ImageCard
          key={image.id}
          id={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          ownerName={image.user.name}
          userName={image.user.username}
          likes={image.likes}
          ownerProfileImage={image.user.profile_image.medium}
        />
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
