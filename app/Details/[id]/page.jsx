import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import img from "@public/assets/pic-2.png";
import Details from "./Details";
import RelatedImages from "./RelatedImages";
import getOneImage from "@lib/getOneImage";
import searchImages from "@lib/search";
import Link from "next/link";


export async function generateMetadata({params: {id}}) {
  const details = await getOneImage(id);
  const Detail = await details;

  return {
    title: Detail.description,
    description : 'This is the image details'

  }
}

const page = async ({ params: { id } }) => {
  const details = await getOneImage(id);
 const Detail = await details;


  return (
    <div className="py-20 bg-gray-50">
      <div className="container  bg-white p-8 rounded-lg">
        <div className="heading flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <Image
              src={Detail.user.profile_image.medium}
              alt={img}
              className=" rounded-full"
              width="30"
              height="30"
            />
            <div className="leading-tight">
              <h3 className="font-bold  tracking-wide">{Detail.user.name}</h3>
              <p className="text-sm text-gray-500 font-semibold">
                {Detail.user.username}
              </p>
            </div>
          </div>

          <div className="flex space-x-1 items-center">
            <div className="text-gray-500 border-gray-500 border-[1.5px] rounded-sm p-1">
              <FiPlus className="text-lg " />
            </div>
            <div className="text-gray-500 border-gray-500 border-[1.5px] rounded-sm p-1">
              <FaHeart className="text-lg " />
            </div>
            <Link href={Detail.links.download}>
              <div className="bg-black text-gray-100 flex py-1 px-4 space-x-3 rounded-r-[4px] items-center font-semibold cursor-pointer">
                Download
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <Image src={Detail.urls.regular} alt="img" width="500" height="500" />
        </div>

        <Details Detail={Detail} />

        <div className="mt-4">
          <p className="text-lg font-semibold text-black">Top Images</p>
          <RelatedImages  Detail = {Detail}/>
        </div>
      </div>
    </div>
  );
};

export default page;
