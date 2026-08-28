import type { FC } from "react";
import cl from "./AnimeCard.module.css";
import { IAnime } from "@/entities/Anime.ent";
import { Show } from "@/shared/ui/Show";
import Image from "next/image";
import Link from "next/link";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props {
  item: IAnime;
  footer?: React.ReactNode;
}

export const AnimeCard: FC<Props> = ({ item, footer }) => {
  return (
    <NotStyledLink href={`/anime/${item.id}`} className={cl.container}>
      {/* <article> */}
      <div className={cl.content}>
        <Image
          src={item.imgSrc}
          alt={item.title}
          fill
          sizes="300px"
          loading="eager"
          className={cl.bgImage}
        />

        <div className={cl.media}>
          <h3 className={cl.title}>{item.title}</h3>
          <p className={cl.episodes}>
            {item.lastEpisode} / {item.totalEpisodes} Episodes
          </p>
        </div>
      </div>

      <Show when={!!footer}>
        <footer className={cl.footer}>{footer}</footer>
      </Show>
      {/* </article> */}
    </NotStyledLink>
  );
};
