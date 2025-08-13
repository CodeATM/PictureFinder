"use client"
import React, { useEffect, useState } from 'react';
import { fetchUserLikes } from '@lib/DataFetching';
import MasonryGrid from "@Components/Reuseables/ImageReuseables/MasonryGrid";
import {Skeleton} from '@Components/Reuseables/Skeleton';

export const UserLikes = ({ username }) => {
  const [userLikes, setUserLikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const likes = await fetchUserLikes(username);
      setUserLikes(likes);
      setLoading(false);
    };

    fetchData();
  }, [username]);

  return (
    <div className="my-10">
      {loading ? (
        <Skeleton />
      ) : (
        <MasonryGrid images={userLikes} />
      )}
    </div>
  );
};

