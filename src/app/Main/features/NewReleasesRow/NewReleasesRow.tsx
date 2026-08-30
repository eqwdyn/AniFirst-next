"use client";

import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";
import { AnimeCard } from "@/widgets/AnimeCard";

export const NewReleasesRow = () => {
  return (
    <AnimeBlock
      title="New Releases"
      titleId="new-releases-animes"
      description="Fresh episodes updated today"
      urlToAll="/anime/new-releases"
      items={MockAnimes}
      renderItems={(item) => <AnimeCard item={item} />}
    />
  );
};
