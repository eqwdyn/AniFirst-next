"use client";

import type { FC } from "react";
import cl from "./TabHeader.module.css";

interface Props {
  items: string[];
  curItem: string;
  onClick: (item: string) => void;
}

export const TabHeader: FC<Props> = ({ items, curItem, onClick }) => {
  return (
    <div className={cl.container}>
      {items.map((item) => (
        <span
          className={curItem === item ? `${cl.tab} ${cl.curTab}` : cl.tab}
          key={item}
          onClick={() => onClick(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
