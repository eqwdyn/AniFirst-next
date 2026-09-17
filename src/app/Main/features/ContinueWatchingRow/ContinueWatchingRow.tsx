"use client";

import { ContinueWatchingCard } from "@/app/Main/features/ContinueWatchingRow/components/ContinueWatchingCard/ui/ContinueWatchingCard";
import { AnimeBlock } from "@/widgets/AnimeBlock";
import { CONTINUE_TO_WATCH_KEY } from "@shared/config";
import { useEffect, useState } from "react";
import { IContinueToWatchAnime } from "@entities/IContinueToWatchAnime.ent";
import { isIContinueToWatchAnime } from "@shared/utils/isIContinueToWatchAnime";

export const ContinueWatchingRow = () => {
  const [animes, setAnimes] = useState<IContinueToWatchAnime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONTINUE_TO_WATCH_KEY);
      if (!raw) {
        setAnimes([]);
        setLoading(false);
        return;
      }

      const parsed = JSON.parse(raw);

      if (!Array.isArray(parsed)) {
        setAnimes([]);
        setLoading(false);
        return;
      }

      const validAnimes = parsed.filter(isIContinueToWatchAnime);
      setAnimes(validAnimes);
    } catch (e) {
      console.warn("Failed to parse continue-watching data", e);
      setAnimes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const lang = "ru";

  if (loading || animes.length === 0) {
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
