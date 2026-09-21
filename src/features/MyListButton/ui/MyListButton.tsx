"use client";

import { SecondaryButton } from "@shared/ui/SecondaryButton";
import { getLang } from "@shared/utils/getLang";
import { IAnime } from "@entities/Anime.ent";
import cl from "./MyListButton.module.css";
import Image from "next/image";
import { Show } from "@shared/ui/Show";
import { FC, useEffect, useState } from "react";
import { ClientAnimesService } from "@services/ClientAnimesService";

interface Props {
  item: IAnime;
  adaptiveText?: boolean;
}

export const MyListButton: FC<Props> = ({ item, adaptiveText }) => {
  const [isItemInList, setIsItemInList] = useState<boolean | null>(null);
  const lang = getLang();

  const buttonHandler = isItemInList
    ? () => {
        ClientAnimesService.delItemFromMyList(item.shikimori_id);
        setIsItemInList(false);
      }
    : () => {
        ClientAnimesService.setMyList(item);
        setIsItemInList(true);
      };

  useEffect(() => {
    const flag = !!ClientAnimesService.getMyListItemByShikimoriId(
      item.shikimori_id,
    );

    setIsItemInList(flag);
  }, [item]);
  return (
    <SecondaryButton
      onClick={buttonHandler}
      className={isItemInList ? cl.redButton : undefined}
    >
      <Show when={isItemInList === null}>
        <div className={cl.skeleton} />
      </Show>

      <Show when={isItemInList === false}>
        <div className={cl.content}>
          <Image
            src="/svg/plus.svg"
            width={13}
            height={13}
            loading="lazy"
            alt=""
          />
          <span
            className={adaptiveText ? `${cl.adaptiveText} ${cl.text}` : cl.text}
          >
            {lang === "ru" ? "Добавить в избранное" : "Add to List"}
          </span>
        </div>
      </Show>

      <Show when={!!isItemInList}>
        <div className={cl.content}>
          <div className={cl.minus} />
          <span
            className={adaptiveText ? `${cl.adaptiveText} ${cl.text}` : cl.text}
          >
            {lang === "ru" ? "Удалить из избранного" : "Delete from List"}
          </span>
        </div>
      </Show>
    </SecondaryButton>
  );
};
