"use client";

import { useEffect, useState } from "react";
import { UserListLocalService } from "@/services/LocalServices/UserList.local-service";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { IAnime } from "@entities/Anime.ent";
import { getLang } from "@shared/utils/getLang";
import { UserInteractionsAuthedService } from "@services/AuthedServices/UserInteractions.authed-service";
import { useAuth } from "@shared/providers/AuthProvider";

export const ContinueWatchingRow = () => {
  const { isAuthorized, isLoading } = useAuth();
  const [animes, setAnimes] = useState<IAnime[] | null>(null);
  const lang = getLang();

  useEffect(() => {
    if (isLoading) return;

    const fetchAnimes = async () => {
      if (isAuthorized) {
        try {
          const animes = await UserInteractionsAuthedService.getLastViewed();
          setAnimes(animes);
        } catch {
          setAnimes(UserListLocalService.getContinueToWatch()?.reverse() ?? []);
        }
      } else {
        setAnimes(UserListLocalService.getContinueToWatch()?.reverse() ?? []);
      }
    };

    fetchAnimes();
  }, [isAuthorized, isLoading]);

  if (!animes) {
    return <></>;
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
