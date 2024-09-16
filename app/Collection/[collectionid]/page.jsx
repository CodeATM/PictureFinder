import CollectionImage from "@Components/Collections/CollectionImage";
import CollectionInfo from "@Components/Collections/CollectionInfo";
import FetchingError from "@Components/Reuseables/FetchingError";
import Skeleton from "@Components/Reuseables/Skeleton";
import { getCollectionById } from "@lib/DataFetching";

const Page = async ({ params: { collectionid } }) => {
  const collection = await getCollectionById(collectionid);
  console.log(collection)

  // if (loading) {
  //   return (
  //     <div className="max-screen-wrapper mt-20 ">
  //       <div className="max-screen-inner">
  //         <Skeleton />
  //       </div>
  //     </div>
  //   );
  // }

  if (!collection) {
    return (
      <div className="max-screen-wrapper mt-20 ">
        <div className="max-screen-inner">
          <FetchingError />
        </div>
      </div>
    );
  }

  return (
    <div className="max-screen-wrapper lg:mt-20 mt-10  ">
      <div className="max-screen-inner">
        <CollectionInfo collection={collection} />
        <CollectionImage
          collection={collectionid}
          count={collection.total_photos}
        />
      </div>
    </div>
  );
};

export default Page;
