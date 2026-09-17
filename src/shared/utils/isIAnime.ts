import { IAnime } from "@entities/Anime.ent";

export function isIAnime(value: unknown): value is IAnime {
  if (!value || typeof value !== "object") return false;

  const anime = value as IAnime;

  return (
    typeof anime.shikimori_id === "string" &&
    typeof anime.kodik_id === "string" &&
    typeof anime.title === "string" &&
    typeof anime.posterUrl === "string" &&
    (typeof anime.year === "undefined" || typeof anime.year === "string") &&
    (typeof anime.tags === "undefined" || typeof anime.tags === "string")
  );
}
