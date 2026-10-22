"use client";

import { useEffect, useState } from "react";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { Show } from "@shared/ui/Show";
import { getLang } from "@shared/utils/getLang";
import { Skeleton } from "./Skeleton";
import { UserListLocalService } from "@/services/LocalServices/UserList.local-service";
import { FallBack } from "./FallBack";
import { UserInteractionsAuthedService } from "@services/AuthedServices/UserInteractions.authed-service";
import { useAuth } from "@shared/providers/AuthProvider";

export function FavoritePageContent() {
  const [items, setItems] = useState<IAnime[] | null>(null);
  const lang = getLang();
  const { isAuthorized, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    const fetchAnimes = async () => {
      if (isAuthorized) {
        try {
          const animes = await UserInteractionsAuthedService.getFavorite();
          setItems(animes);
        } catch {
          setItems(UserListLocalService.getMyList() ?? []);
        }
      } else {
        setItems(UserListLocalService.getMyList() ?? []);
      }
    };

    fetchAnimes();
  }, [isAuthorized, isLoading]);

  const ruDesc =
    items?.length === 1
      ? "Аниме, которое вы добавли в список избранного"
      : "Аниме, которые вы добавли в список избранного";
  const enDesc =
    items?.length === 1
      ? "Anime, which you added to favorites"
      : "Animes, which you added to favorites";

  return items ? (
    <>
      <Show when={!!items.length}>
        <AnimeCardsBlock
          title="Избранное"
          titleId="my-list"
          description={lang === "ru" ? ruDesc : lang === "en" ? enDesc : enDesc}
          items={items}
          direction="rows"
        />
      </Show>
      <Show when={!items.length}>
        <FallBack />
      </Show>
    </>
  ) : (
    <Skeleton />
  );
}
