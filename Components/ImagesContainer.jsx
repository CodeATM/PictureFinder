// "use client";
import React, {} from "react";
import Image from "next/image";
import Link from "next/link";

import getAllImages from "@lib/getAllImages";



const ImagesContainer = async () => {
  const images = await getAllImages();

  const Images = await images;

  // const [images, setImages] = useState(Images);
  // // const [first, setfirst] = useState(second)
  

  return (
    <section className="images my-8">
      <div className="img_container">
        <div className="gallery">
          {images.map((image) => {
            return (
              <Link href={`Details/${image.id}/`}>
                <div className="picture cursor-pointer" key={image.id}>
                  <Image
                    src={image.urls.small}
                    alt={image.alt_description}
                    DDD
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
  );
};

export default ImagesContainer;
