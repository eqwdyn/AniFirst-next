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
  description?: string;
  urlToAll?: string;
  direction?: "straight" | "rows";
  cursorHandle?: () => void;
  cardWidth?: number;
  titleGap?: number;
}

export const AnimeCardsBlock: FC<Props> = ({
  items,
  title,
  titleId,
  description,
  urlToAll,
  direction,
  cardWidth,
  cursorHandle,
  titleGap,
}) => {
  return direction === "rows" ? (
    <AnimeBlockRows<IAnime>
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} width={cardWidth} />}
      cursorHandle={cursorHandle}
      titleGap={titleGap}
    />
  ) : (
    <AnimeBlock<IAnime>
      title={title}
      titleId={titleId}
      description={description}
      urlToAll={urlToAll}
      items={items}
      renderItems={(item) => <AnimeCard item={item} width={cardWidth} />}
      titleGap={titleGap}
    />
  );
};
