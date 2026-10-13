import type { FC } from "react";
import cl from "./GenreCard.module.css";
import Image from "next/image";

interface Props {
  title: string;
  imageUrl: string;
}

export const GenreCard: FC<Props> = ({ title, imageUrl }) => {
  return (
    <article className={cl.container}>
      <Image src={imageUrl} alt="" fill={true} />

      <div className={cl.content}>
        <h3 className={cl.title}>{title}</h3>
      </div>
    </article>
  );
};
