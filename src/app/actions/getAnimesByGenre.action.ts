"use server";

import { AnimesService } from "@services/AnimeService";
import { IAnime } from "@entities/Anime.ent";

type ActionsReturnType = IAnime[] | null;

export async function getAnimesByGenre(
  genre: string,
  page: number,
): Promise<ActionsReturnType> {
  if (page < 0) {
    return null;
  }

  const items = await AnimesService.getAnimesByGenre(genre, page);
  if (!items || !items.length) {
    return null;
  }

  return items;
}
