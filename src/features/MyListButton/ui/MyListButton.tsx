"use client";

import { SecondaryButton } from "@shared/ui/SecondaryButton";
import { getLang } from "@shared/utils/getLang";
import { IAnime } from "@entities/Anime.ent";
import cl from "./MyListButton.module.css";
import Image from "next/image";
import { Show } from "@shared/ui/Show";
import { FC, useEffect, useState } from "react";
import { UserListLocalService } from "@/services/LocalServices/UserList.local-service";
import { UserInteractionsAuthedService } from "@services/AuthedServices/UserInteractions.authed-service";
import { useAuth } from "@shared/providers/AuthProvider";

interface Props {
  item: IAnime;
  adaptiveText?: boolean;
}

export const MyListButton: FC<Props> = ({ item, adaptiveText }) => {
  const { isAuthorized, isLoading: isAuthLoading } = useAuth();
  const lang = getLang();

  const [isItemInList, setIsItemInList] = useState<boolean | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (isAuthLoading) return;

    let cancelled = false;

    const check = async () => {
      if (isAuthorized) {
        try {
          const favorites = await UserInteractionsAuthedService.getFavorite();
          if (cancelled) return;
          setIsItemInList(
            favorites.some((a) => a.shikimori_id === item.shikimori_id),
          );
        } catch {
          if (cancelled) return;
          setIsItemInList(
            !!UserListLocalService.getMyListItemByShikimoriId(
              item.shikimori_id,
            ),
          );
        }
      } else {
        setIsItemInList(
          !!UserListLocalService.getMyListItemByShikimoriId(item.shikimori_id),
        );
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, [item.shikimori_id, isAuthorized, isAuthLoading]);

  const buttonHandler = async () => {
    if (isItemInList === null || isPending) return;

    setIsPending(true);
    const wasInList = isItemInList;

    // оптимистичное обновление
    setIsItemInList(!wasInList);

    try {
      if (isAuthorized) {
        if (wasInList) {
          await UserInteractionsAuthedService.deleteFromFavorite(
            item.shikimori_id,
          );
        } else {
          await UserInteractionsAuthedService.addToFavorite(item.shikimori_id);
        }
      } else {
        if (wasInList) {
          UserListLocalService.delItemFromMyList(item.shikimori_id);
        } else {
          UserListLocalService.setMyList(item);
        }
      }
    } catch {
      // откат оптимистичного обновления при ошибке
      setIsItemInList(wasInList);
    } finally {
      setIsPending(false);
    }
  };

  // TODO: Ускорить работу

  return (
    <SecondaryButton
      onClick={buttonHandler}
      className={isItemInList ? cl.redButton : undefined}
      disabled={isItemInList === null || isPending}
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
