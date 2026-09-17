import { IAnime } from "@entities/Anime.ent";

export interface IContinueToWatchAnime extends IAnime {
  lastViewedEpisode: number;
  totalEpisodes: number;
  lastViewedTime: number;
  totalTime: number;
}
