import type { FC } from "react";
import cl from "./AnimeRow.module.css";
import { IAnime } from "@/entities/Anime.ent";
import { AnimeCard } from "@/widgets/AnimeCard";

interface Props {
  items: IAnime[];
  listRef?: React.RefObject<HTMLUListElement | null>;
}

export const AnimeRow: FC<Props> = ({ items, listRef }) => {
  return (
    <ul className={cl.list} ref={listRef}>
      {items.map((item) => (
        <li key={item.id}>
          <AnimeCard item={item} />
        </li>
      ))}
    </ul>
  );
};
