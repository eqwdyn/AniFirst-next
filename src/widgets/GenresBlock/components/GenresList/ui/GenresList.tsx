import type { FC } from "react";
import cl from "./GenresList.module.css";
import { GenreCard } from "@widgets/GenreCard";
import { SERVER_STATIC_PATH } from "@shared/config";

interface Props {
  items: Record<string, string>;
}

export const GenresList: FC<Props> = ({ items }) => {
  return (
    <ul className={cl.list}>
      {Object.entries(items).map(([key, val]) => (
        <li key={key}>
          <GenreCard
            title={val}
            imageUrl={`${process.env.SERVER_URL}/${SERVER_STATIC_PATH}/genres/${key}.jpg`}
          />
        </li>
      ))}
    </ul>
  );
};
