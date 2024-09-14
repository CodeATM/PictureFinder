import { fetchBannerSlide } from "@lib/DataFetching";
import BannerClient from "./BannerSlide";

const Banner = async () => {
  const images = await fetchBannerSlide();

  return <BannerClient images={images} />;
};

export default Banner;
