import { useQuery } from "@tanstack/react-query";
import { fetchUnsplashCollections } from "../DataFetching";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useUnsplashCollections() {
  return useQuery({
    queryKey: ["unsplashCollections"],
    queryFn: fetchUnsplashCollections,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}

export function useUnsplashImages(page) {
  return useQuery({
    queryKey: ["unsplashImages", page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch images");
      return response.json();
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
}

export function useUnsplashSearchImages(searchValue) {
  return useInfiniteQuery({
    queryKey: ["unsplashSearchImages", searchValue],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?&query=${searchValue}&page=${pageParam}&per_page=20&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY_2}`
      );
      if (!response.ok) throw new Error("Failed to fetch search images");
      const data = await response.json();
      return data.results;
    },
    getNextPageParam: (lastPage, allPages) => {
      // If Unsplash returns less than 20 items, no more pages
      if (lastPage.length < 20) return undefined;
      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    enabled: !!searchValue,
  });
}
