import { Player } from "../components/Player";
import cl from "./VideoPlayer.module.css";

export const VideoPlayer = ({}) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>Video Player</h2>
      <Player />
    </div>
  );
};
