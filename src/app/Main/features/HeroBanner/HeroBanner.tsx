import { IAnime } from "@/entities/Anime.ent";
import { HeroBannerVM } from "./HeroBanner.vm";
import { MockAnimes } from "@/stores/MockAnimes.store";

export const HeroBanner = () => {
  return <HeroBannerVM item={MockAnimes[0]} />;
};
