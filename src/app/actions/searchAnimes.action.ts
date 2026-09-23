"use server";

import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { AnimesService } from "@services/AnimeService";

type ActionsReturnType = IAnimeSearch[] | null;

export async function SearchAnimesAction(
  title: string,
  statusFilter?: "ongoing" | "anons" | "released" | "latest",
  typeFilter?:
    | "tv"
    | "tv_13"
    | "tv_24"
    | "tv_48"
    | "movie"
    | "ova"
    | "ona"
    | "special"
    | "tv_special"
    | "music"
    | "pv"
    | "cm",
): Promise<ActionsReturnType> {
  if (!title.trim()) {
    return null;
  }

  const items = await AnimesService.searchAnimesShikimori(
    title,
    statusFilter,
    typeFilter,
  );
  if (!items || !items.length) {
    return null;
  }

  const filtered = items.filter(
    (item) =>
      !!item.shikimori_id &&
      !!item.posterUrl &&
      !!item.title &&
      !!item.status &&
      !!item.studio,
  );

  //    {
  //     "shikimori_id": "16870",
  //     "title": "Наруто: Последний фильм",
  //     "originalTitle": "The Last: Naruto the Movie",
  //     "studio": "Pierrot",
  //     "posterUrl": "https://shikimori.io/uploads/poster/animes/16870/mini_alt_2x-addac357f350b739c65947a4361bb7b1.jpeg",
  //     "status": "завершено",
  //     "kind": null
  //   },

  return filtered;
}
