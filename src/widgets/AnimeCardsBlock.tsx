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
}

export const AnimeCardsBlock: FC<Props> = ({
  items,
  title,
  titleId,
  description,
  urlToAll,
  direction,
}) => {
  return direction === "rows" ? (
    <AnimeBlockRows<IAnime>
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} />}
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
