import type { FC } from "react";
import cl from "./AnimesList.module.css";
import { AnimeCard } from "@widgets/AnimeCard";
import { IAnime } from "@entities/Anime.ent";

interface Props {
  items: IAnime[];
}

export const AnimesList: FC<Props> = ({ items }) => {
  return (
    <div className={cl.listWrapper}>
      <ul className={cl.list}>
        {items.map((item, i) => (
          <li key={i} className={cl.li}>
            <AnimeCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
