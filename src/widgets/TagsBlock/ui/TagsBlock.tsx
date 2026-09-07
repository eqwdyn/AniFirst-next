import type { FC } from "react";
import cl from "./TagsBlock.module.css";

interface Props {
  items: string[];
}

export const TagsBlock: FC<Props> = ({ items }) => {
  return (
    <div className={cl.tagsBlock}>
      {items.map((tag, index) => {
        if (index === 0) {
          return (
            <p className={`${cl.tag} ${cl.firstTag}`} key={tag}>
              {tag.toUpperCase()}
            </p>
          );
        }
        return (
          <p className={cl.tag} key={tag}>
            {tag.toUpperCase()}{" "}
          </p>
        );
      })}
    </div>
  );
};
