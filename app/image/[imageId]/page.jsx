import RelatedCollection from "@Components/Reuseables/RelatedReuseables/RelatedCollection";
import RelatedImages from "@Components/Reuseables/RelatedReuseables/RelatedImages";
import Details from "@Components/SimgleImage/Details";
import SingleImage from "@Components/SimgleImage/SingleImage";
import { getOneImage } from "@lib/DataFetching";
import FetchingError from "@Components/Reuseables/FetchingError";

// Function to get the longest tag
const getLongestTag = (tags) => {
  return tags.reduce(
    (longest, tag) => (tag.title.length > longest.length ? tag.title : longest),
    ""
  );
};

const Page = async ({ params: { imageId } }) => {
  const details = await getOneImage(imageId);

  console.log(details)

  if (!details) {
    return (
      <div className="max-screen-wrapper">
        <div className="max-screen-inner">
          <FetchingError />
        </div>
      </div>
    );
  }

  const tags = details.tags || [];
  const longestTag = getLongestTag(tags);

  return (
    <div className="max-screen-wrapper py-20">
      <div className="max-screen-inner">
        <SingleImage details={details} />
        <Details details={details} />
        <RelatedImages imageId={imageId} />
        <RelatedCollection tag={longestTag} />
      </div>
    </div>
  );
};

export default Page;
