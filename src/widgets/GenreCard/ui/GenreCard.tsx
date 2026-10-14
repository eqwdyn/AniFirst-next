import type { FC } from "react";
import cl from "./GenreCard.module.css";
import Image from "next/image";
import { NotStyledLink } from "@shared/ui/NotStyledLink";

interface Props {
  title: string;
  imageUrl: string;
  engTitle: string;
}

export const GenreCard: FC<Props> = ({ title, imageUrl, engTitle }) => {
  return (
    <NotStyledLink href={`/anime/genres/${engTitle}`} className={cl.link}>
      <article className={cl.container}>
        <Image src={imageUrl} alt="" fill={true} sizes="420px" />
        <div className={cl.line} />

        <div className={cl.content}>
          <h3 className={cl.title}>{title}</h3>
        </div>
      </article>
    </NotStyledLink>
  );
};
