import axios from "axios";

export default async function getBanner() {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        orientation: "landscape", // Ensures landscape orientation
        query: "city", // Fetches images related to cities
        client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY, // Your Unsplash API key
      },
    });

    // Assuming the image URL is in the 'urls' object within the first item of the response array
    const bannerImage = response.data;

    if (!bannerImage) {
      throw new Error("Image URL not found in response");
    }
    return bannerImage;
  } catch (error) {
    console.error("Failed to fetch image from Unsplash:", error.message);
    return null; // Instead of throwing an error, return null or a default image URL
  }
}
