import type { FC } from "react";
import cl from "./Metrics.module.css";
import Image from "next/image";
import { getLang } from "@shared/utils/getLang";

interface Props {
  rating?: number;
  episodes?: number;
  status?: "Airing" | "Done";
  studio?: string;
}

function pluralize(count: number, lang: string): string {
  if (lang === "ru") {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) return "Эпизод";
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
      return "Эпизода";
    return "Эпизодов";
  }

  return count === 1 ? "Episode" : "Episodes";
}

export const Metrics: FC<Props> = ({ status, studio, episodes, rating }) => {
  const lang = getLang();
  return (
    <div className={cl.metrics}>
      {rating ? (
        <div className={`${cl.metricRating} ${cl.metric}`}>
          <Image
            src="/svg/star.svg"
            loading="lazy"
            alt=""
            width={16}
            height={16}
          />
          <span>{rating}</span>
        </div>
      ) : null}

      {episodes ? (
        <div className={`${cl.metricEpisodes} ${cl.metric}`}>
          {episodes} {pluralize(episodes, lang)}
        </div>
      ) : null}

      {status ? (
        <div className={cl.metric}>
          <span className={cl.statusText}>
            {lang === "ru" ? "Статус: " : "Status: "}
          </span>
          <span
            style={{
              color:
                status === "Airing"
                  ? "var(--color-tetriarty)"
                  : "var(--color-primary)",
            }}
          >
            {lang === "ru"
              ? status === "Airing"
                ? "Онгоинг"
                : "Закончено"
              : status}
          </span>
        </div>
      ) : null}

      {studio ? (
        <div className={`${cl.metricStudio} ${cl.metric}`}>
          <span>{lang === "ru" ? "Студия: " : "Studio: "}</span>
          <span className={cl.metricStudioName}>{studio}</span>
        </div>
      ) : null}
    </div>
  );
};
