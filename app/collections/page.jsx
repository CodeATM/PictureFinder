import React from "react";
import { getCollections } from "@lib/DataFetching";
import CollectionCard from "@Components/Reuseables/CollectionReueabes/CollectionCard";
import FetchingError from "@Components/Reuseables/FetchingError";

const page = async () => {
  let collections = await getCollections();
  console.log(collections)

  if (!collections) return <FetchingError />;

  return (
    <div className="my-10 space-y-4 max-screen-wrapper ">
      <div className="max-screen-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
