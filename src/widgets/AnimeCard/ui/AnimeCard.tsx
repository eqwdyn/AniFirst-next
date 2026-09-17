import type { FC } from "react";
import cl from "./AnimeCard.module.css";
import { Show } from "@/shared/ui/Show";
import Image from "next/image";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";
import { IAnime } from "@entities/Anime.ent";

// export interface IAnimeCard {
//   shikimori_id: number;
//   imgSrc: string;
//   title: string;
// }

interface Props {
  item: IAnime;
  footer?: React.ReactNode;
}

export const AnimeCard: FC<Props> = ({ item, footer }) => {
  return (
    <NotStyledLink
      href={`/anime/anime-page/${item.shikimori_id}`}
      className={cl.wrapper}
    >
      <article className={cl.container}>
        <div className={cl.content}>
          <Image
            src={item.posterUrl}
            alt={item.title}
            fill
            sizes="400px"
            loading="eager"
            className={cl.bgImage}
          />

          <div className={cl.media}>
            <h3 className={cl.title}>{item.title}</h3>
            {/* <p className={cl.episodes}>
              {item.lastEpisode} / {item.totalEpisodes} Episodes
            </p> */}
          </div>
        </div>
      </article>
      <Show when={!!footer}>
        <footer className={cl.footer}>{footer}</footer>
      </Show>
    </NotStyledLink>
  );
};
