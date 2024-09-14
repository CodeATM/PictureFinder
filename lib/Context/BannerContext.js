"use client";
import React, { createContext, useState, useEffect } from "react";
import getBanner from "@lib/DataFetching";

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [bannerReady, setBannerReady] = useState(false);
  const [bannerError, setBannerError] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanner();
        setBannerImage(data.urls.full || data.urls.raw);
        setBannerReady(true);
      } catch (err) {
        setBannerError(err.message);
        setBannerReady(true);
      }
    };

    fetchBanner();
  }, []);

  return (
    <BannerContext.Provider value={{ bannerReady, bannerError, bannerImage }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => React.useContext(BannerContext);
