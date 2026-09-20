"use client";

import type { FC } from "react";
import { AnimeBlock } from "@widgets/AnimeBlock";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCard } from "@widgets/AnimeCard/ui/AnimeCard";
import { AnimeBlockRows } from "./AnimeBlockRows";

interface Props {
  items: IAnime[];
  titleId: string;
  title: string;
  description: string;
  urlToAll?: string;
  direction?: "straight" | "rows";
  cursorHandle?: () => void;
}

export const AnimeCardsBlock: FC<Props> = ({
  items,
  title,
  titleId,
  description,
  urlToAll,
  direction,
  cursorHandle,
}) => {
  return direction === "rows" ? (
    <AnimeBlockRows<IAnime>
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} />}
      cursorHandle={cursorHandle}
    />
  ) : (
    <AnimeBlock<IAnime>
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} />}
    />
  );
};
