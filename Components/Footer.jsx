import React from "react";
import { FiImage, FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-10 px-10">
        <div className="flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="md:text-start text-center space-y-2 md:w-[50%]">
            <span className="text-2xl text-white font-bold flex justify-center md:justify-start">
              <FiImage />
            </span>
            <h1 className="font-bold text-2xl tracking-wide">Picfinder</h1>
            <p className=" font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati ut et nobis ex, accusamus impedit aliquam beatae! Est
              vitae culpa modi.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-semibold">Connect with us</h1>
            <div className="flex space-x-1 justify-center">
              <div className="hover:bg-slate-400 p-2 rounded-full">
                <FiGithub />
              </div>

              <div className="hover:bg-slate-400 p-2 rounded-full">
                <FiGlobe />
              </div>
              <div className="hover:bg-slate-400 p-2 rounded-full">
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
