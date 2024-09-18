"use client"; // Ensure this runs on the client side
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { autoplay, Pagination } from "swiper";

// Install modules
SwiperCore.use([autoplay, Pagination]);

const BannerClient = ({ images }) => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 seconds
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.length > 0 ? (
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-full relative">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </section>
  );
};

export default BannerClient;
