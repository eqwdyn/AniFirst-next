import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { AnimesService } from "@services/AnimeService";

export const TrendingAnimesRow = async () => {
  const items = await AnimesService.getTrending();

  if (!items) return <>Not Items</>;

  return (
    <AnimeCardsBlock
      title="Trending Now"
      titleId="trending-animes"
      description="Most watched in the last 24 hours"
      urlToAll="/anime/trending"
      items={items}
    />
  );
};
