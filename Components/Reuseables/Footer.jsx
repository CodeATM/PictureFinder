import React from "react";
import { FiImage, FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="bg-black flex justify-end">
      <div className="max-screen-wrapper">
        <div className="max-screen-inner flex flex-col md:flex-row md:justify-between px-5 py-10">
          <div className="md:w-[30%] space-y-2 md:space-y-0 md:text-start">
            <div className="flex gap-3">
              <FiImage className="text-2xl text-white md:flex md:justify-center" />
              <h1 className="text-white text-[20px] leading-[32px] font-semibold">
                Picfinder
              </h1>
            </div>
            <p className="text-[15px] leading-[22px] text-[#838383] font-[400] ">
              Picfinder is a website the brings differnt images to your
              fingertip for download. The website run on unsoplash Api which is
              one of the biggest image api provider available today.
            </p>
            <div className="flex items-center justify-center gap-4"></div>
          </div>

          <div className="md:w-[60%] mt-2 md:mt-0">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
              <div className="space-y-[4px]">
                <h1 className="text-[18px] leading-[26px] font-[500] text-white ">
                  About Us
                </h1>
                <ul className="space-y-[2px]">
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">About us</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">FAQS</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="https://unsplash.com/documentation">API</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-[4px]">
                <h1 className="text-[18px] leading-[26px] font-[500] text-white ">
                  Community
                </h1>
                <ul className="space-y-[2px]">
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">Blog</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">Forum</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">Creators</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="/">Cameras</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-[4px]">
                <h1 className="text-[18px] leading-[26px] font-[500] text-white ">
                  Contact us
                </h1>
                <ul className="space-y-[2px]">
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="https://github.com/CodeATM">GitHub</a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="https://twitter.com/MatthewOlu86153?t=hIHXwA4pmwxxb9Jb6WInsg&s=09">
                      Twiter
                    </a>
                  </li>
                  <li className="text-[15px] leading-[22px] text-[#838383] hover:text-[#f3f3f3] font-[400]">
                    <a href="https://www.linkedin.com/in/awe-oluwatimileyin-936426248">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
