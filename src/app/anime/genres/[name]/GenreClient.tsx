"use client";

import { useCallback, useState, type FC } from "react";
import { IAnime } from "@entities/Anime.ent";
import { getAnimesByGenre } from "@app/actions/getAnimesByGenre.action";
import { Show } from "@shared/ui/Show";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { getLang } from "@shared/utils/getLang";
import { FallBack } from "../components/FallBack";
import { Skeleton } from "./components/Skeleton";

interface Props {
  initItems: IAnime[];
  genre: string;
}

export const GenreClient: FC<Props> = ({ initItems, genre }) => {
  const [items, setItems] = useState<IAnime[]>(initItems ?? []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const cursorHandle = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newItems = await getAnimesByGenre(genre, page);

    if (!newItems || newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [loading, hasMore, page]);

  const ruDesc = `Аниме по жанру: ${genre}`;
  const enDesc = `Animes by genre: ${genre}`;
  const lang = getLang();

  return (
    <>
      <Show when={!!items.length}>
        <AnimeCardsBlock
          title={lang === "ru" ? "Найденные аниме" : "Founded animes"}
          titleId="animes-by-genre"
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
};
