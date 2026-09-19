import { FC } from "react";
import { Player } from "../components/Player";
import cl from "./VideoPlayer.module.css";
import { getLang } from "@shared/utils/getLang";

interface Props {
  embedUrl: string;
  title?: string;
}

export const VideoPlayer: FC<Props> = ({ embedUrl, title }) => {
  const lang = getLang();

  return (
    <div className={cl.container}>
      <h2 className={cl.title}>
        {lang === "ru" ? "Приятного просмотра" : "Video Player"}
      </h2>
      <Player embedUrl={embedUrl} title={title} />
    </div>
  );
};
