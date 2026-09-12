import type { FC } from "react";
import cl from "./Episodes.module.css";
import { Episode } from "../components/Episode";
import { IEpisode } from "@entities/Episode.ent";

interface Props {
  items: IEpisode[];
  activeEp: number;
  setActiveEp: (item: number) => void;
}

export const Episodes: FC<Props> = ({ items, activeEp, setActiveEp }) => {
  return (
    <div className={cl.container}>
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <Episode
            key={item.order}
            item={item}
            isActive={activeEp === item.order}
            setActiveEp={setActiveEp}
          />
        ))}
    </div>
  );
};
