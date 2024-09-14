import ImagesContainer from "@Components/Reuseables/ImageReuseables/ImagesContainer";
import LandingSection from "@Components/LandingComponents";
import React from "react";
import ImageSection from "@Components/LandingComponents/ImageSection";

const page = () => {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner">
        <LandingSection />
        <ImageSection />
      </div>
    </div>
  );
};

export default page;
