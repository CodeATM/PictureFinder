import CollectionImage from "@Components/Collections/CollectionImage";
import CollectionInfo from "@Components/Collections/CollectionInfo";
import FetchingError from "@Components/Reuseables/FetchingError";
import { getCollectionById, fetchCollectionImages } from "@lib/DataFetching";

// This is a server component
const Page = async ({ params: { collectionid } }) => {
  console.log("Server rendering collection page for ID:", collectionid);

  // 1️⃣ Fetch collection details
  const collection = await getCollectionById(collectionid);
  console.log(collection)
  if (!collection) {
    return (
      <div className="max-screen-wrapper mt-20 ">
        <div className="max-screen-inner">
          <FetchingError />
        </div>
      </div>
    );
  }

  // 2️⃣ Fetch images server-side (no cache)
  const fetchedImages = await fetchCollectionImages(collectionid);

  // 3️⃣ Render only after everything is ready
  return (
    <div className="max-screen-wrapper lg:mt-20 mt-10">
      <div className="max-screen-inner">
        <CollectionInfo collection={collection} />
        <CollectionImage
          count={collection.total_photos}
          images={fetchedImages}
        />
      </div>
    </div>
  );
};

export default Page;
