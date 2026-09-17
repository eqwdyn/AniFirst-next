import { AnimesService } from "@services/AnimeService";
import { HeroBannerVM } from "./HeroBanner.vm";

export const HeroBanner = async () => {
  const item = await AnimesService.getHeroAnime();
  console.log(item);

  return <HeroBannerVM item={item} />;
};
