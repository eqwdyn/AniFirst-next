import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { AnimesService } from "@services/AnimeService";

export const TrendingAnimesRow = async () => {
  const items = await AnimesService.getTrending();
  const lang = "ru";

  if (!items) return <>Not Items</>;

  return (
    <AnimeCardsBlock
      title={lang === "ru" ? "Популярное" : "Trending Now"}
      titleId="trending-animes"
      description={
        lang === "ru"
          ? "Наиболее популяные аниме в последнее время"
          : "Most watched in the last 24 hours"
      }
      urlToAll="/anime/trending"
      items={items}
    />
  );
};
