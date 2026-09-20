"use server";

import { AnimesService } from "@services/AnimeService";
import { IAnime } from "../../entities/Anime.ent";

type ActionsReturnType = IAnime[] | null;

export async function getNewReleasesAction(
  page: number,
): Promise<ActionsReturnType> {
  if (page < 0) {
    return null;
  }

  const items = await AnimesService.getNewReleases(page);
  if (!items || !items.length) {
    return null;
  }

  return items;
}
