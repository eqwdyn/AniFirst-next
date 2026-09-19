import { CONTINUE_TO_WATCH_KEY, MY_LIST_KEY } from "@shared/config";
import { IAnime } from "@entities/Anime.ent";
import { IContinueToWatchAnime } from "../entities/IContinueToWatchAnime.ent";
import { LocalStorageService } from "./LocalStorageService";

class ClientAnimesServiceC {
  constructor(private readonly localStorageService: LocalStorageService) {}

  getContinueToWatch(): IContinueToWatchAnime[] | null {
    return this.localStorageService.getItem(CONTINUE_TO_WATCH_KEY);
  }

  setContinueToWatch(item: IContinueToWatchAnime): void {
    const items = this.getContinueToWatch();
    this.localStorageService.setItem(CONTINUE_TO_WATCH_KEY, items, item);
  }

  getMyList(): IAnime[] | null {
    return this.localStorageService.getItem(MY_LIST_KEY);
  }

  getMyListItemByShikimoriId(shikimori_id: string): IAnime | null {
    const animes = this.localStorageService.getItem<IAnime[]>(MY_LIST_KEY);
    if (!animes) {
      return null;
    }

    return animes.find((item) => item.shikimori_id === shikimori_id) ?? null;
  }

  setMyList(item: IAnime): void {
    const items = this.getMyList();
    this.localStorageService.setItem(MY_LIST_KEY, items, item);
  }

  delItemFromMyList(shikimori_id: string): void {
    const items = this.getMyList();
    if (!items || !Array.isArray(items)) {
      return;
    }

    const newItems = items.filter((i) => i.shikimori_id !== shikimori_id);
    localStorage.setItem(MY_LIST_KEY, JSON.stringify(newItems));
  }
}

export const ClientAnimesService = new ClientAnimesServiceC(
  new LocalStorageService(),
);
