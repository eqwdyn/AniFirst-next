"use client";

import { ContinueWatchingCard } from "@/app/Main/features/ContinueWatchingRow/components/ContinueWatchingCard/ui/ContinueWatchingCard";
import { AnimeBlock } from "@/widgets/AnimeBlock";
import { useEffect, useState } from "react";
import { IContinueToWatchAnime } from "@entities/IContinueToWatchAnime.ent";
import { Skeleton } from "./components/Skeleton";
import { ClientAnimesService } from "@services/ClientAnimesService";

export const ContinueWatchingRow = () => {
  const [animes, setAnimes] = useState<IContinueToWatchAnime[] | null>(null);
  const lang = "ru";

  useEffect(() => {
    setAnimes(ClientAnimesService.getContinueToWatch() ?? []);
  }, []);

  if (!animes) {
    return <Skeleton />;
  }

  if (animes.length === 0) {
    return null;
  }

  return (
    <AnimeBlock
      title={lang === "ru" ? "Продолжить просмотр" : "Continue Watching"}
      titleId="continue-watching-animes"
      description={
        lang === "ru"
          ? "Продолжить просмотр описание"
          : "Pick up right where you left off"
      }
      urlToAll="/anime/continue"
      items={animes}
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
