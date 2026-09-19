import type { FC } from "react";
import cl from "./Player.module.css";

interface Props {
  embedUrl: string;
  title?: string;
}

export const Player: FC<Props> = ({ embedUrl, title }) => {
  return (
    <div className={cl.wrapper}>
      <iframe
        src={embedUrl}
        title={title ?? "Anime Player"}
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        frameBorder={0}
        className={cl.iframe}
      />
    </div>
  );
};
