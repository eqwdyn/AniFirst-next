import type { FC } from "react";
import cl from "./Metrics.module.css";
import Image from "next/image";

interface Props {
  rating: number;
  episodes: number;
  status: "Airing" | "Done";
  studio: string;
}

export const Metrics: FC<Props> = ({ status, studio, episodes, rating }) => {
  return (
    <div className={cl.metrics}>
      <div className={`${cl.metricRating} ${cl.metric}`}>
        <Image
          src="/svg/star.svg"
          loading="lazy"
          alt=""
          width={16}
          height={16}
        />
        <span>{rating} Stars</span>
      </div>

      <div className={`${cl.metricEpisodes} ${cl.metric}`}>
        {episodes} Episodes
      </div>

      <div
        className={cl.metric}
        style={{
          color: status === "Airing" ? "var(--color-primary)" : undefined,
        }}
      >
        {status}
      </div>

      <div className={`${cl.metricStudio} ${cl.metric}`}>
        <span>Studio: </span>
        <span className={cl.metricStudioName}>{studio}</span>
      </div>
    </div>
  );
};
