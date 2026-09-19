import type { FC } from "react";
import cl from "./ScreenShotsList.module.css";
import Image from "next/image";

interface Props {
  items: string[];
}

export const ScreenShotsList: FC<Props> = ({ items }) => {
  return (
    <div className={cl.container}>
      {items.slice(0, 4).map((item) => (
        <div className={cl.imageWrapper} key={item}>
          <Image
            src={item}
            alt=""
            width={230}
            height={120}
            loading="lazy"
            className={cl.image}
          />
        </div>
      ))}
    </div>
  );
};
