import { FC } from "react";
import { Player } from "../components/Player";
import cl from "./VideoPlayer.module.css";

interface Props {
  embedUrl: string;
}

export const VideoPlayer: FC<Props> = ({ embedUrl }) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>Video Player</h2>
      <Player embedUrl={embedUrl} title="Атака титанов — Эпизод 1" />
    </div>
  );
};
