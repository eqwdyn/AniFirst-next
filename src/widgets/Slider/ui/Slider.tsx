import { useRef } from "react";
import cl from "./Slider.module.css";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  listRef?: React.RefObject<HTMLUListElement | null>;
}

export const Slider = <T extends { shikimori_id?: string; kodik_id?: string }>({
  items,
  listRef,
  renderItem,
}: Props<T>) => {
  const cursorEl = useRef<HTMLLIElement>(null);

  return (
    <ul className={cl.list} ref={listRef}>
      {items.map((item, index) => (
        <li
          key={item.shikimori_id ?? item.kodik_id ?? index}
          className={cl.item}
        >
          {renderItem(item)}
        </li>
      ))}
      <li ref={cursorEl} />
    </ul>
  );
};
