"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const BannerClient = ({ images }) => {
  const slidesRef = useRef([]);

  useEffect(() => {
    if (!images.length) return;

    gsap.set(slidesRef.current, { opacity: 0 });
    gsap.set(slidesRef.current[0], { opacity: 1 });

    let tl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power2.inOut" } });

    images.forEach((_, i) => {
      const nextIndex = (i + 1) % images.length;
      tl.to(slidesRef.current[i], { opacity: 0, delay: 2 })
        .to(slidesRef.current[nextIndex], { opacity: 1 }, "<");
    });

    return () => {
      tl.kill();
    };
  }, [images]);

  return (
    <section className="relative w-full h-[390px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute inset-0"
        >
          <Image
            src={image.urls.small}
            alt={image.alt_description || "Banner image"}
            fill
            className="object-cover rounded-[16px]"
            priority={index === 0}
          />
        </div>
      ))}
    </section>
  );
};

export default BannerClient;
