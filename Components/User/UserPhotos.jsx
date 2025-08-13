"use client"
import React, { useEffect, useState } from 'react';
import { fetchUserImages } from '@lib/DataFetching';
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import { Skeleton } from '@Components/Reuseables/Skeleton';

export const UserPhotos = ({ username }) => {
  const [userPhotos, setUserPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const photos = await fetchUserImages(username);
      setUserPhotos(photos);
      setLoading(false);
    };

    fetchData();
  }, [username]);

  return (
    <div className="my-10">
      {loading ? (
        <Skeleton />
      ) : (
        <MasonryGrid images={userPhotos} />
      )}
    </div>
  );
};


