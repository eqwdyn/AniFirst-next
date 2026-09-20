"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./components/Skeleton";
import { ClientAnimesService } from "@services/ClientAnimesService";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { IAnime } from "@entities/Anime.ent";
import { getLang } from "@shared/utils/getLang";

export const ContinueWatchingRow = () => {
  const [animes, setAnimes] = useState<IAnime[] | null>(null);
  const lang = getLang();

  useEffect(() => {
    setAnimes(ClientAnimesService.getContinueToWatch()?.reverse() ?? []);
  }, []);

  if (!animes) {
    return <Skeleton />;
  }

  if (animes.length === 0) {
    return null;
  }

  return (
    <AnimeCardsBlock
      title={lang === "ru" ? "Продолжить просмотр" : "Continue Watching"}
      titleId="continue-watching-animes"
      description={
        lang === "ru"
          ? "Начать с того же момента"
          : "Pick up right where you left off"
      }
      urlToAll="/anime/continue"
      items={animes}
    />
  );
};
