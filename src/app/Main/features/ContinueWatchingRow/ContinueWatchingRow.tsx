"use client";

import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";
import { AnimeCard } from "@/widgets/AnimeCard";

export const ContinueWatchingRow = () => {
  return (
    <AnimeBlock
      title="Continue Watching"
      titleId="continue-watching-animes"
      description="Pick up right where you left off"
      items={MockAnimes}
      renderItems={(item) => <AnimeCard item={item} />}
    />
  );
};
