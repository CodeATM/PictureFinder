import React from "react";
import { IoMdShareAlt } from "react-icons/io";
import Link from "next/link";
const SingleImage = ({ details }) => {
  return (
    <div>
      <div className="heading flex justify-between items-center">
        <div className="flex space-x-3 items-center pr-2">
          <Link href={`/user/${details.user.username}`}>
            <img
              src={details.user.profile_image.medium}
              className=" rounded-full"
              width="30"
              height="30"
            />
          </Link>
          <div className="leading-tight ">
            <Link href={`/user/${details.user.username}`}>
              <h3 className="text-[18px] leading-[24px] font-[500] text-[#111]">
                {details.user.name}
              </h3>{" "}
            </Link>
            <Link href={`/user/${details.user.username}`}>
              <p className="text-[16px] leading-[24px] font-[400] text-[#838383]">
                {details.user.username}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Link href={details.links.download_location}>
            <div className="bg-black text-gray-100 flex py-3 px-4 space-x-3 rounded-[4px] items-center font-[500] cursor-pointer text-[16px] leading-[22px] ">
              Download
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <img src={details.urls.regular} alt="img" width="500" height="500" />
      </div>
    </div>
  );
};

export default SingleImage;





// NEXT_PUBLIC_UNSPLASH_ACCESS_KEY = EZyWiNr7ARuImBckN4NhDDk8A8uf8IcvZ7Pgfljsl8s
// NEXT_PUBLIC_UNSPLASH_ACCESS_KEY_2 = cR5S9aiayAaF-jXsPIOS3D0zIZyRkDOnphCjNgLnAkc


// UNSPLASH_ACCESS_KEY= cR5S9aiayAaF-jXsPIOS3D0zIZyRkDOnphCjNgLnAkc
// UNSPLASH_ACCESS_KEY_2= EZyWiNr7ARuImBckN4NhDDk8A8uf8IcvZ7Pgfljsl8s

