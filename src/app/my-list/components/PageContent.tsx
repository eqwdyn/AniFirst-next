"use client";

import { useEffect, useState } from "react";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { Show } from "@shared/ui/Show";
import { getLang } from "@shared/utils/getLang";
import { Skeleton } from "./Skeleton";
import { ClientAnimesService } from "@services/ClientAnimesService";
import { FallBack } from "./FallBack";

export function FavoritePageContent() {
  const [items, setItems] = useState<IAnime[] | null>(null);
  const lang = getLang();

  useEffect(() => {
    setItems(ClientAnimesService.getMyList() ?? []);
  }, []);

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
