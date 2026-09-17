import { CONTINUE_TO_WATCH_KEY } from "@shared/config";
import { IAnime } from "@entities/Anime.ent";

export class LocalAnimesService {
  static getContinueToWatch(): IAnime[] | void {
    const animes = localStorage.getItem(CONTINUE_TO_WATCH_KEY);
    if (!animes) return;

    return JSON.parse(animes);
  }

  static setContinueToWatch(items: IAnime[]): void {
    localStorage.setItem(CONTINUE_TO_WATCH_KEY, JSON.stringify(items));
  }
}
