"use client";

import { useState, useCallback } from "react";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { Show } from "@shared/ui/Show";
import { Skeleton } from "./Skeleton";
import { getNewReleasesAction } from "@app/actions/getNewReleasesCursor.action";
import { FallBack } from "./FallBack";

interface Props {
  initialItems: IAnime[] | undefined;
  lang: string;
}

export function NewReleasesClient({ initialItems, lang }: Props) {
  const [items, setItems] = useState<IAnime[]>(initialItems ?? []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const cursorHandle = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newItems = await getNewReleasesAction(page);

    if (!newItems || newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [loading, hasMore, page]);

  const ruDesc = "Новые эпизоды каждый день";
  const enDesc = "Fresh episodes updated today";

  return (
    <>
      <Show when={!!items.length}>
        <AnimeCardsBlock
          title={lang === "ru" ? "Новое" : "New Releases"}
          titleId="new-releases"
          description={lang === "ru" ? ruDesc : enDesc}
          items={items}
          direction="rows"
          cursorHandle={cursorHandle}
        />
      </Show>
      <Show when={!items.length}>
        <FallBack />
      </Show>
      <Show when={loading}>
        <Skeleton />
      </Show>
    </>
  );
}
