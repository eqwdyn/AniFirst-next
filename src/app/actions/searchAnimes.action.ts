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

  const items = await AnimesService.searchAnimes(
    title,
    statusFilter,
    typeFilter,
  );
  if (!items || !items.length) {
    return null;
  }

  return items;
}
