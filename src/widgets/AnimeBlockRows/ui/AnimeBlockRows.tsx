"use client";

import { useRef } from "react";
import { useCursor } from "../../../shared/hooks/useCursor";
import cl from "./AnimeBlockRows.module.css";
import { NotStyledLink } from "@/shared/ui/NotStyledLink";

interface Props<T> {
  titleId: string;
  title: string;
  description?: string;
  urlToAll?: string;
  items: T[];
  renderItems: (item: T) => React.ReactNode;
  cursorHandle?: () => void;
  titleGap?: number;
}

export const AnimeBlockRows = <T,>({
  titleId,
  title,
  description,
  items,
  urlToAll,
  renderItems,
  cursorHandle,
  titleGap,
}: Props<T>) => {
  const initHandle = () => {};
  const ref = useRef(null);
  useCursor({ ref, handle: cursorHandle ?? initHandle });
  return (
    <section aria-labelledby={titleId} className={cl.container}>
      {urlToAll ? (
        <NotStyledLink href={urlToAll}>
          <header
            className={cl.headerBlock}
            style={{ marginBottom: titleGap ?? undefined }}
          >
            <div className={cl.titleContent}>
              <h2 id={titleId} className={cl.title}>
                {title}
              </h2>
              {description ? (
                <p className={cl.description}>{description}</p>
              ) : null}
            </div>
          </header>
        </NotStyledLink>
      ) : (
        <header
          className={cl.headerBlock}
          style={{ marginBottom: titleGap ?? undefined }}
        >
          <div className={cl.titleContent}>
            <h2 id={titleId} className={cl.title}>
              {title}
            </h2>
            {description ? (
              <p className={cl.description}>{description}</p>
            ) : null}
          </div>
        </header>
      )}

      <div className={cl.listWrapper}>
        <ul className={cl.list}>
          {items.map((item, i) => (
            <li key={i} className={cl.li}>
              {renderItems(item)}
            </li>
          ))}
          <li ref={ref} />
        </ul>
      </div>
    </section>
  );
};
