import React from "react";
import { FiImage, FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="bg-black flex justify-end">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between px-5 py-10">
        <div className="md:w-[30%] space-y-1 md:space-y-0 md:text-start">
          <FiImage className="text-2xl text-white md:flex md:justify-center" />
          <h1 className="text-white text-lg font-semibold">Picfinder</h1>
          <p className="text-white text-sm">
            Picfinder is a website the brings differnt images to your fingertip for download. The website run on unsoplash Api which is one of the biggest image api provider available today.
          </p>
          <div className="flex items-center justify-center gap-4">
            
          </div>
        </div>

        <div className="md:w-[60%] mt-2 md:mt-0">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            <div className="">
              <h1 className="text-lg font-semibold text-white">About Us</h1>
              <ul className="space-y-[2P]">
                <li className="text-white text-sm">
                  <a href="/">About us</a>
                </li>
                <li className="text-white text-sm">
                  <a href="/">FAQS</a>
                </li>
                <li className="text-white text-sm">
                  <a href="https://unsplash.com/documentation">API</a>
                </li>
                <li className="text-white text-sm">
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-semibold text-white">Community</h1>
              <ul className="space-y-[2P]">
                <li className="text-white text-sm">
                  <a href="/">Blog</a>
                </li>
                <li className="text-white text-sm">
                  <a href="/">Forum</a>
                </li>
                <li className="text-white text-sm">
                  <a href="/">Crators</a>
                </li>
                <li className="text-white text-sm">
                  <a href="/">Cameras</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-semibold text-white">Contact us</h1>
              <ul className="space-y-[2P]">
                <li className="text-white text-sm">
                  <a href="">GitHub</a>
                </li>
                <li className="text-white text-sm">
                  <a href="">Twiter</a>
                </li>
                <li className="text-white text-sm">
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
