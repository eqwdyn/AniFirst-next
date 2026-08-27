import { IAnime } from "@/entities/Anime.ent";
import { HeroBannerVM } from "./HeroBanner.vm";

export const HeroBanner = () => {
  const mockItem: IAnime = {
    id: 1,
    title: "Hell Mode",
    descrition:
      "A boy chooses the hardest difficulty in a new world — and fights to survive. Every step is high-stakes; every choice determines his survival.",
    year: 2026,
    tags: ["Featured release", "Action", "Fantasy", "Isekai"],
    imgSrc:
      "https://ru-images-s.kinorium.com/movie/1080/12577391.jpg?1783587197",
  };
  return <HeroBannerVM item={mockItem} />;
};
