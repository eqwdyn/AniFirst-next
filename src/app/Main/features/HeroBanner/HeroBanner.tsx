import { AnimesService } from "@/services/PublicServices/AnimeService";
import { HeroBannerVM } from "./HeroBanner.vm";

export const HeroBanner = async () => {
  const item = await AnimesService.getHeroAnime();

  return <HeroBannerVM item={item} />;
};
