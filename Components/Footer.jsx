import React from "react";
import { FiImage, FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="">
          <div className="">
            <span className="">
              <FiImage />
            </span>
            <h1 className="">Picfinder</h1>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati ut et nobis ex, accusamus impedit aliquam beatae! Est
              vitae culpa modi.
            </p>
          </div>

          <div className="">
            <h1 className="">Connect with us</h1>
            <div className="">
              <div className="">
                <FiGithub />
              </div>

              <div className="">
                <FiGlobe />
              </div>
              <div className="">
                <FiTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
