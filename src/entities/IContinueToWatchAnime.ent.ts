import { IAnime } from "@entities/Anime.ent";

export interface IContinueToWatchAnime extends IAnime {
  watchEpisode: number;
  watchSeason: number;
  totalEpisodes: number;
  watchTime: number;
  totalTime: number;
}
