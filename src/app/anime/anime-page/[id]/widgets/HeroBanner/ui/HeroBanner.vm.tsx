import { IAnime } from "@/entities/Anime.ent";
import type { FC } from "react";
import cl from "./HeroBanner.module.css";
import { TagsBlock } from "@/widgets/TagsBlock";
import { Metrics } from "@/app/anime/anime-page/[id]/widgets/HeroBanner/components/Metrics";

interface Props {
  item: IAnime;
}

export const HeroBannerVM: FC<Props> = ({ item }) => {
  const rating = 4.5;
  const episodes = 24;
  const status = "Airing";
  const studio = "MAPPA";
  return (
    <div className={cl.headerBlock}>
      <TagsBlock items={item.tags} />

      <div className={cl.titleBlock}>
        <h2 className={cl.title}>{item.title}</h2>
        <Metrics
          rating={rating}
          episodes={episodes}
          status={status}
          studio={studio}
        />
      </div>

      <p className={cl.description}>{item.descrition}</p>
    </div>
  );
};
