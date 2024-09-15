"use client";
import CollectionImage from "@Components/Collections/CollectionImage";
import CollectionInfo from "@Components/Collections/CollectionInfo";
import React, { useEffect, useState } from "react";
import Skeleton from "@Components/Reuseables/Skeleton";

const Page = ({ params: { collectionid } }) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/collections/${encodeURIComponent(
            collectionid
          )}`,
          {
            headers: {
              Authorization: `Client-ID p_t452A7QUpCofdR2rpkuG61WTEVOwHLMYv8MsuVG_c`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching collection: ${response.statusText}`);
        }

        const data = await response.json();
        setCollection(data);
        console.log(collection);
      } catch (error) {
        console.error("Error fetching collection:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [collectionid]);

  if (loading) {
    return (
      <div className="max-screen-wrapper mt-20 ">
        <div className="max-screen-inner">
          <Skeleton />
        </div>
      </div>
    );
  }

  if (!collection) {
    return <div>Collection not found</div>;
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
