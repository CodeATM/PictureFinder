import axios from "axios";

export async function fetchUnsplashCollections() {
  try {
    const response = await fetch(
      "https://api.unsplash.com/collections?per_page=4",
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
        // Cache the result for 24 hours (86400 seconds)
        next: { revalidate: 86400 },
      }
    );

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Error fetching collections: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

export async function fetchBannerSlide() {
  const queries = [
    "new york",
    "fashion",
    "Street Photography",
    "Fashion & Beauty",
    "Street Photography",
    "Architecture & Interiors",
    "Textures & Patterns",
    "Nature",
    "Wallpapers",
    "Film",
  ];
  const randomQuery = queries[Math.floor(Math.random() * queries.length)];

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${randomQuery}&per_page=10&orientation=portrait`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching images: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export async function getOneImage(id) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch image");
    }

    const imageData = await res.json();
    return imageData;
  } catch (error) {
    console.error("Error:", error.message || error);
    return null;
  }
}

export async function fetchRelatedUnsplashImages(imageId) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/${imageId}/related?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch related images");
    }

    const data = await res.json();
    return data.results; // Ensure this is an array of images
  } catch (error) {
    console.error("Error fetching related images:", error.message || error);
    return [];
  }
}

export const getCollectionsRelated = async (tag) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/collections?query=${encodeURIComponent(
        tag
      )}&per_page=3`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}_2`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching collections by tag: ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching collections by tag:", error);
    return [];
  }
};

export const getCollectionById = async (collectionId) => {
  try {
    console.log(collectionId);
    const response = await fetch(
      `https://api.unsplash.com/collections/${encodeURIComponent(
        collectionId
      )}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY_2}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching collection: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collection by ID:", error);
    return null; // Return null in case of an error
  }
};
export const getCollections = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/collections`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching collection: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collection by ID:", error);
    return null;
  }
};

export async function fetchUserImages(username) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/users/${username}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user images");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user images:", error.message || error);
    return [];
  }
}

export async function fetchUserLikes(username) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/users/${username}/likes?client_id=${process.env.UNSPLASH_ACCESS_KEY_2}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user likes");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching user likes:", error.message || error);
    return [];
  }
}

export async function fetchUserCollection(username) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/users/${username}/collections?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user collections");
    }

    const data = await res.json();
    return data; // Ensure this is an array of collections
  } catch (error) {
    console.error("Error fetching user collections:", error.message || error);
    return [];
  }
}

export async function fetchUser(username) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY_2}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user details");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error.message || error);
    return null; // Return null in case of an error
  }
}

export const fetchCollectionImages = async (collection) => {
  try {
    console.log("Fetching images for collection:", collection);

    const url = `https://api.unsplash.com/collections/${collection}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY_2}`;
    console.log("Unsplash API URL:", url);

    const response = await fetch(url, {
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching images: ${response.status} ${response.statusText}`
      );
    }

    const images = await response.json();
    console.log("Fetched image count:", images.length);
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
