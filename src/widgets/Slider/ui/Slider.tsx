import cl from "./Slider.module.css";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  listRef?: React.RefObject<HTMLUListElement | null>;
}

export const Slider = <T,>({ items, listRef, renderItem }: Props<T>) => {
  return (
    <ul className={cl.list} ref={listRef}>
      {items.map((item, index) => (
        <li key={item.id ?? index} className={cl.item}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
