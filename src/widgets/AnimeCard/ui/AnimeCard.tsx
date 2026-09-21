import type { FC } from "react";
import cl from "./AnimeCard.module.css";
import { Show } from "@/shared/ui/Show";
import Image from "next/image";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";
import { IAnime } from "@entities/Anime.ent";
import { cutStringToLength } from "../../../shared/utils/cutStringToLength";

// export interface IAnimeCard {
//   shikimori_id: number;
//   imgSrc: string;
//   title: string;
// }

interface Props {
  item: IAnime;
  footer?: React.ReactNode;
  width?: number;
}

export const AnimeCard: FC<Props> = ({ item, footer, width }) => {
  return (
    <NotStyledLink
      href={`/anime/anime-page/${item.shikimori_id}`}
      className={cl.wrapper}
    >
      <article className={cl.container} style={{ width: width ?? undefined }}>
        <div className={cl.content}>
          <Image
            src={item.posterUrl}
            alt={item.title}
            fill
            sizes="400px"
            loading="lazy"
            className={cl.bgImage}
          />

          <div className={cl.media}>
            <h3 className={cl.title}>{cutStringToLength(item.title, 23)}</h3>
          </div>
        </div>
      </article>
      <Show when={!!footer}>
        <footer className={cl.footer}>{footer}</footer>
      </Show>
    </NotStyledLink>
  );
};
