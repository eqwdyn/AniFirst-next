import type { FC } from "react";
import cl from "./ContinueWatchingCard.module.css";
import { IAnime } from "@/entities/Anime.ent";
import { AnimeCard } from "@/widgets/AnimeCard";
import { formatTime } from "@/app/Main/features/ContinueWatchingRow/utils/formatTime";

interface Props {
  item: IAnime;
  lastViewedEpisode: number;
  totalEpisodes: number;
  lastViewedTime: number;
  totalTime: number;
}

export const ContinueWatchingCard: FC<Props> = ({
  item,
  lastViewedEpisode,
  lastViewedTime,
  totalEpisodes,
  totalTime,
}) => {
  return (
    <AnimeCard
      item={item}
      footer={
        <div className={cl.container}>
          <div className={cl.progressBar}>
            <div
              className={cl.fiel}
              style={{ width: `${(lastViewedTime / totalTime) * 100}%` }}
            />
          </div>

          <div className={cl.metrics}>
            <span className={cl.episodesCount}>
              EP {lastViewedEpisode}/{totalEpisodes}
            </span>
            <span className={cl.timeCount}>
              {formatTime(lastViewedTime)}/{formatTime(totalTime)}
            </span>
          </div>
        </div>
      }
    />
  );
};
