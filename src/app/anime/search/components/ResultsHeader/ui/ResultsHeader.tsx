import type { FC } from "react";
import cl from "./ResultsHeader.module.css";

interface Props {
  itemsLength: number;
}

export const ResultsHeader: FC<Props> = ({ itemsLength }) => {
  return (
    <h2 className={cl.title}>
      Найдено: <span className={cl.primaryColor}>{itemsLength}</span>{" "}
      результатов
    </h2>
  );
};
