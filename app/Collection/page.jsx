import React from "react";
import { getCollections } from "@lib/DataFetching";
import CollectionCard from "@Components/Reuseables/CollectionReueabes/CollectionCard";
import FetchingError from "@Components/Reuseables/FetchingError";

const page = async () => {
  let collections = await getCollections();

  if (!collections) return <FetchingError />;

  return (
    <div className="mt-28 space-y-4">
      <div>
        <p className="text-[32px] leading-[46px] font-[600] text-[#111]">
          Collection
        </p>
      </div>

      <div className="mt-10">
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
