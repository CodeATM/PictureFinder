import React, { useEffect, useState } from 'react';
import { fetchUserCollection } from '@lib/DataFetching'; // Make sure this function exists
import CollectionCard from "@Components/Reuseables/CollectionReueabes/CollectionCard";
import Skeleton from '@Components/Reuseables/Skeleton';

const UserCollection = ({ username }) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userCollections = await fetchUserCollection(username);
      setCollections(userCollections);
      setLoading(false);
    };

    fetchData();
  }, [username]);

  return (
    <div className="my-10">
      {loading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard collection={collection} key={collection.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCollection;
