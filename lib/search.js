export default async function searchImages(searchValue) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=${searchValue}&per_page=50`
  );

  if (!res.ok) throw new Error("Fail to fetch user");

  return res.json();
  console.log(res.json());
}
