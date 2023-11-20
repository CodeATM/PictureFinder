import React from "react";
import searchImages from "@lib/search";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { searchValue } }) => {
  console.log(searchValue);

  const images = await searchImages(searchValue);

  const Images = await images.results;
  console.log(Images.results);
  return (
    <div>
      <section className="images py-16 container">
        <div className="py-8">
          <h1 className="text-gray-700 font-semibold tracking-wide text-2xl">
            Showing results for{" "}
            <span className="text-black font-bold text-3xl">
              '{searchValue}'
            </span>
          </h1>
        </div>
        <div className="img_container">
          <div className="gallery">
            {Images.map((image) => {
              return (
                <Link href={`Details/${image.id}/`}>
                  <div className="picture" key={image.id}>
                    <Image
                      src={image.urls.small}
                      alt={image.alt_description}
                      className=" "
                      width="500"
                      height="500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center">
            <button className="text-gray-700 hover:text-gray-500 px-3 py-2 text-lg font-semibold mt-5">
              Show more
            </button>
          </div>
        </div>

        {/* <ImageDetails className= 'hidden'/> */}
      </section>
    </div>
  );
};

export default Page;
