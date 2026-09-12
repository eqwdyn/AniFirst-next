"use client";

import type { FC } from "react";
import { AnimeBlock } from "@widgets/AnimeBlock";
import { IAnime } from "@entities/Anime.ent";
import { AnimeCard } from "@widgets/AnimeCard/ui/AnimeCard";

interface Props {
  items: IAnime[];
  titleId: string;
  title: string;
  description: string;
  urlToAll: string;
}

export const AnimeCardsBlock: FC<Props> = ({
  items,
  title,
  titleId,
  description,
  urlToAll,
}) => {
  return (
    <AnimeBlock
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} />}
    />
  );
};
