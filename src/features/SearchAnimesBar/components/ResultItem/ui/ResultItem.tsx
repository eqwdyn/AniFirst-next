import type { FC } from "react";
import cl from "./ResultItem.module.css";
import Image from "next/image";
import { NotStyledLink } from "@shared/ui/NotStyledLink";

interface Props {
  id: string;
  title: string;
  origTitle?: string;
  previewUrl: string;
  rating?: number;
  studio?: string;
}

export const ResultItem: FC<Props> = ({
  id,
  title,
  previewUrl,
  rating,
  studio,
}) => {
  return (
    <NotStyledLink href={`/anime/anime-page/${id}`} className={cl.link}>
      <article className={cl.container}>
        <Image
          src={previewUrl}
          alt={title}
          width={70}
          height={100}
          loading="lazy"
          className={cl.preview}
        />
        <div className={cl.body}>
          <h3 className={cl.title}>{title}</h3>
          <div className={cl.medio}>
            <div className={cl.rating}>
              <Image
                src="/svg/star.svg"
                loading="lazy"
                alt=""
                width={14}
                height={14}
              />
              <span>{rating}</span>
            </div>
            <span className={cl.studio}>{studio}</span>
          </div>
        </div>
      </article>
    </NotStyledLink>
  );
};
