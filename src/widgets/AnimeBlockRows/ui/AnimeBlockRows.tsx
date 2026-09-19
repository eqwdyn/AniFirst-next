"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cl from "./AnimeBlockRows.module.css";
import { ArrowButton } from "@/widgets/AnimeBlock/components/ArrowButton";
import { Slider } from "@/widgets/Slider";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props<T> {
  titleId: string;
  title: string;
  description: string;
  urlToAll?: string;
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

export const AnimeBlockRows = <T,>({
  titleId,
  title,
  description,
  items,
  urlToAll,
  renderItems,
}: Props<T>) => {
  return (
    <section aria-labelledby={titleId} className={cl.container}>
      <header className={cl.headerBlock}>
        <div className={cl.titleContent}>
          <h2 id={titleId} className={cl.title}>
            {title}
          </h2>
          <p className={cl.description}>{description}</p>
        </div>
      </header>

      <div className={cl.listWrapper}>
        <ul className={cl.list}>
          {items.map((item, i) => (
            <li key={i} className={cl.li}>
              {renderItems(item)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
