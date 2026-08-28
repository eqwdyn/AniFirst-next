"use client";

import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";
import { AnimeCard } from "@/widgets/AnimeCard";

export const TrendingAnimesRow = () => {
  return (
    <AnimeBlock
      title="Trending Now"
      titleId="trending-animes"
      description="Most watched in the last 24 hours"
      items={MockAnimes}
      renderItems={(item) => <AnimeCard item={item} />}
    />
  );
};
