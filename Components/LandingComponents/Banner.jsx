"use client";
import { useState, useEffect } from "react";
import { fetchBannerSlide } from "@lib/DataFetching";
import BannerClient from "./BannerSlide";
import { BannerSlideComponentSkeleton } from "@Components/Reuseables/Skeleton";

const Banner = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await fetchBannerSlide();
      setImages(fetchedImages);
      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading || images.length == 0) {
    return <BannerSlideComponentSkeleton />;
  }

  return <BannerClient images={images} />;
};

export default Banner;
