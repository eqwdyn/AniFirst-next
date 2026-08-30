"use client";

import { ContinueWatchingCard } from "@/app/Main/features/ContinueWatchingRow/components/ContinueWatchingCard/ui/ContinueWatchingCard";
import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";

export const ContinueWatchingRow = () => {
  return (
    <AnimeBlock
      title="Continue Watching"
      titleId="continue-watching-animes"
      description="Pick up right where you left off"
      urlToAll="/anime/continue"
      items={MockAnimes}
      renderItems={(item) => (
        <ContinueWatchingCard
          item={item}
          totalEpisodes={12}
          lastViewedEpisode={4}
          totalTime={24 * 60}
          lastViewedTime={12 * 60}
        />
      )}
    />
  );
};
