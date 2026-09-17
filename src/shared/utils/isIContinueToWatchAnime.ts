import { IContinueToWatchAnime } from "@entities/IContinueToWatchAnime.ent";
import { isIAnime } from "./isIAnime";

export function isIContinueToWatchAnime(
  value: unknown,
): value is IContinueToWatchAnime {
  if (!value || typeof value !== "object") return false;
  if (!isIAnime(value)) return false;

  const anime = value as IContinueToWatchAnime;

  return (
    typeof anime.lastViewedEpisode === "number" &&
    typeof anime.totalEpisodes === "number" &&
    typeof anime.lastViewedTime === "number" &&
    typeof anime.totalTime === "number"
  );
}
