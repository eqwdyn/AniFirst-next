export class LocalStorageService {
  getItem<T>(key: string): T | null {
    const animes = localStorage.getItem(key);
    if (!animes) return null;

    return JSON.parse(animes);
  }

  setItem<T extends { shikimori_id: string }>(
    key: string,
    initArr: T[] | null,
    item: T,
  ): void {
    if (!initArr || !Array.isArray(initArr)) {
      localStorage.setItem(key, JSON.stringify([item]));
      return;
    }

    if (initArr.find((i) => i.shikimori_id === item.shikimori_id)) {
      return;
    }
    localStorage.setItem(key, JSON.stringify([...initArr, item]));
  }

  delItem<T extends { shikimori_id: string }>(
    key: string,
    initArr: T[] | null,
    shikimori_id: string,
  ) {
    if (!initArr || !Array.isArray(initArr)) {
      return;
    }

    const newItems = initArr.filter((i) => i.shikimori_id !== shikimori_id);
    localStorage.setItem(key, JSON.stringify(newItems));
  }
}
