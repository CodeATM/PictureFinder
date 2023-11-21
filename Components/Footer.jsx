import React from "react";
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer relative bottom-0">
      <div className="bg-black ">
        <div className="container grid grid-cols-4 gap-4">
          <div className="space-y-3 mr-5 md:w-1/3 w-full text-center md:text-left px-4">
            <h1 className="text-xl font-semibold tracking-wide text-white">
              PicFinder
            </h1>

            <p className="text-sm text-gray-400 tracking-wide leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis modi, ratione aliquid eos unde incidunt?
            </p>

            <div className="flex space-x-2 text-gray-600 text-center md:justify-start justify-center">
              <FiFacebook />
              <FiInstagram />
              <FiLinkedin />
              <FiTwitter />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-1/3 px-4">
            <div className="company">
              <h1 className="text-white font-semibold text-lg">Community</h1>
              <ul className="text-white">
                <li className = 'text-sm text-gray-400'>Blog</li>
                <li className = 'text-sm text-gray-400'>Forum</li>

                <li className = 'text-sm text-gray-400'>Creators</li>

                <li className = 'text-sm text-gray-400'>Cameras</li>
              </ul>
            </div>
            <div className="company">
              <h1 className="text-white font-semibold text-lg">Community</h1>
              <ul className="text-white">
              <li className = 'text-sm text-gray-400'>Blog</li>
                <li className = 'text-sm text-gray-400'>Forum</li>

                <li className = 'text-sm text-gray-400'>Creators</li>

                <li className = 'text-sm text-gray-400'>Cameras</li>
              </ul>
            </div>
            <div className="company">
              <h1 className="text-white font-semibold text-lg">About</h1>
              <ul className="text-white">
                <li className = 'text-sm text-gray-400'>About us</li>
                <li className = 'text-sm text-gray-400'>FAQ</li>
                <li className = 'text-sm text-gray-400'>Terms of service</li>
                <li className = 'text-sm text-gray-400'>Privacy policy</li>
                <li className = 'text-sm text-gray-400'>APIs</li>
                <li className = 'text-sm text-gray-400'>cookie policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
