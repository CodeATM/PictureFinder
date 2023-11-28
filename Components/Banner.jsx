import Image from "next/image";
import banner from "@public/assets/f.jpg";
import { FiSearch } from "react-icons/fi";
import getBanner from "@lib/getBanner";
import Search from "./Search";

const Banner = async () => {
  const banner = getBanner();

  const Banner = await banner;

  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${Banner.urls.regular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "60vh",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gray-200 font-semibold uppercase tracking-widest">
              Welcome
            </span>
            <h2 className="mt-6 mb-6 text-3xl lg:text-4xl font-bold text-gray-100">
              Explore the larget image downloading website
            </h2>
            <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
              We have over 1M+ images shared by talented individual over the
              globe to give you the best resources you need.
            </p>

            <div className="relative">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
