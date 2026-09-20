"use server";

import { AnimesService } from "@services/AnimeService";
import { IAnime } from "../../entities/Anime.ent";

type ActionsReturnType = IAnime[] | null;

export async function getTrendingAction(
  page: number,
): Promise<ActionsReturnType> {
  if (page < 0) {
    return null;
  }

  const items = await AnimesService.getTrending(page);
  if (!items || !items.length) {
    return null;
  }

  return items;
}
