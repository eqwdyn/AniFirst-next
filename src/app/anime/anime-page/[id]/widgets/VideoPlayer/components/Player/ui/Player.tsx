import type { FC } from "react";
import cl from "./Player.module.css";

interface Props {}

export const Player: FC<Props> = ({}) => {
  return <div className={cl.container}>Player Preview</div>;
};
