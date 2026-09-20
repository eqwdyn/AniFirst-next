"use client";

import { useState, useCallback } from "react";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { Show } from "@shared/ui/Show";
import { BackFall } from "./BackFall";
import { Skeleton } from "./Skeleton";
import { getTrendingAction } from "@app/actions/getTrendingCursor.action";

interface Props {
  initialItems: IAnime[] | undefined;
  lang: string;
}

export function TrendingClient({ initialItems, lang }: Props) {
  const [items, setItems] = useState<IAnime[]>(initialItems ?? []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const cursorHandle = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newItems = await getTrendingAction(page);

    if (!newItems || newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [loading, hasMore, page]);

  const ruDesc = "Наиболее популяные аниме в последнее время";
  const enDesc = "Most watched in the last 24 hours";

  return (
    <>
      <Show when={!!items.length}>
        <AnimeCardsBlock
          title={
            lang === "ru"
              ? "Популярное"
              : lang === "en"
                ? "Trending"
                : "Trending"
          }
          titleId="new-releases"
          description={lang === "ru" ? ruDesc : lang === "en" ? enDesc : enDesc}
          items={items}
          direction="rows"
          cursorHandle={cursorHandle}
        />
      </Show>
      <Show when={!items.length}>
        <BackFall />
      </Show>
      {loading && <Skeleton />}
    </>
  );
}
