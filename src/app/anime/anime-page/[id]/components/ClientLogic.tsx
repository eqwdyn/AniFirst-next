"use client";

import { useEffect, type FC } from "react";
import { IAnime } from "@entities/Anime.ent";
import { UserListLocalService } from "@services/LocalServices/UserList.local-service";

interface Props {
  item: IAnime;
}

export const ClientLogic: FC<Props> = ({ item }) => {
  useEffect(() => {
    UserListLocalService.setContinueToWatch(item);
  }, [item]);

  return <></>;
};
