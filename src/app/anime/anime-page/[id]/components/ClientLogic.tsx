"use client";

import { useEffect, type FC } from "react";
import { ClientAnimesService } from "@services/ClientAnimesService";
import { IAnimeFull } from "@entities/AnimeFull";

interface Props {
  item: IAnimeFull;
}

export const ClientLogic: FC<Props> = ({ item }) => {
  useEffect(() => {
    let lastTime = 0;

    const handleMessage = (e: MessageEvent) => {
      if (
        e.origin !== "https://kodikapi.com" &&
        e.origin !== "https://kodik.cc"
      ) {
        return;
      }

      const data = e.data;

      if (data?.type === "kodik:time") {
        lastTime = data.time;

        // Сохраняем каждые 5 секунд
        if (data.time % 5 === 0) {
          ClientAnimesService.setContinueToWatch({
            ...item,
            watchTime: data.time,
            watchEpisode: data.episode,
            watchSeason: data.season,
            totalEpisodes: item.episodes, // ← из IAnime
            totalTime: data.duration, // ← из Kodik API
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [item]);

  return <></>;
};
