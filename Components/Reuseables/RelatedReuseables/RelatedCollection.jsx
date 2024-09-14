import React from "react";
import { getCollectionsRelated } from "@lib/DataFetching";
import Link from "next/link";
import CollectionCard from "../CollectionReueabes/CollectionCard";
import FetchingError from "../FetchingError";

const RelatedCollection = async ({ tag }) => {
  let collections = [];
  let error = null;

  try {
    // Await the fetched collections data
    collections = await getCollectionsRelated(tag);
  } catch (err) {
    error = "Error fetching related collections.";
    console.error(err);
  }

  // Handle errors and empty states
  if (error) return <FetchingError/>
  if (!collections || collections.length === 0) {
    return <p>No collections found.</p>;
  }

  return (
    <div className="mt-28 space-y-4">
      <div>
        <p className="text-[32px] leading-[46px] font-[600] text-[#111]">
          Related Collection
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

export default RelatedCollection;
