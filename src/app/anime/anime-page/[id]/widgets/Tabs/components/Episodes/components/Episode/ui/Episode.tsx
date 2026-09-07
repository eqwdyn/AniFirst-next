import type { FC } from "react";
import cl from "./Episode.module.css";
import { IEpisode } from "@/entities/Episode.ent";
import Image from "next/image";

interface Props {
  item: IEpisode;
}

export const Episode: FC<Props> = ({ item }) => {
  return (
    <article className={cl.container}>
      <div className={cl.time}>
        <span>{item.timeMinutes}m</span>
      </div>
      <Image
        src={item.previewSrc}
        alt={item.title}
        loading="lazy"
        width={280}
        height={140}
        className={cl.image}
      />
      <div className={cl.info}>
        <span className={cl.episodeOrder}>EPISODE {item.order}</span>
        <span className={cl.title}>{item.title}</span>
      </div>
    </article>
  );
};
