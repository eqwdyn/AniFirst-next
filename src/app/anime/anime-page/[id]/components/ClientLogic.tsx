"use client";

import { useEffect, type FC } from "react";
import { IAnime } from "@entities/Anime.ent";
import { ClientAnimesService } from "../../../../../services/ClientAnimesService";

interface Props {
  item: IAnime;
}

export const ClientLogic: FC<Props> = ({ item }) => {
  useEffect(() => {
    ClientAnimesService.setContinueToWatch(item);
  }, [item]);

  return <></>;
};
