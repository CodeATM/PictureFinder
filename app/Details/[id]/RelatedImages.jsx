import React from "react";
import Image from "next/image";
import Link from "next/link";

import getAllImages from "@lib/getAllImages";

const RelatedImages = async ({ Detail }) => {
  const images = await getAllImages();

  const Images = await images;
  return (
    <section className="images my-8">
      <div className="img_container">
        <div className="gallery">
          {Images.map((image) => {
            return (
              <Link href={`/${image.id}/`}>
                <div className="picture cursor-pointer" key={image.id}>
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
      </div>
    </section>
  );
};

export default RelatedImages;
