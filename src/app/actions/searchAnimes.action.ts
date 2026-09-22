"use server";

import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { AnimesService } from "@services/AnimeService";

type ActionsReturnType = IAnimeSearch[] | null;

export async function SearchAnimesAction(
  title: string,
  statusFilter?: string,
  typeFilter?: string,
): Promise<ActionsReturnType> {
  if (!title.trim()) {
    return null;
  }

  const items = await AnimesService.searchAnimesShikimori(title);
  if (!items || !items.length) {
    return null;
  }

  const filtered = items.filter(
    (item) =>
      !!item.shikimori_id &&
      !!item.posterUrl &&
      !!item.title &&
      item.rating != null &&
      !!item.status &&
      !!item.studio,
  );

  return filtered;
}
