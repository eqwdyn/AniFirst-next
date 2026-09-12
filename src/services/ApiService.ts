import { IAnime } from "@/entities/Anime.ent";
import { MockAnimes } from "@/stores/MockAnimes.store";

export class ApiService {
  async getAnimeById(id: number): Promise<IAnime | undefined> {
    const anime = MockAnimes.find((item) => item.id === id);
    return anime;
  }
  async getNewReleases(): Promise<IAnime[] | undefined> {
    return MockAnimes;
  }
  async getTrending(): Promise<IAnime[] | undefined> {
    return MockAnimes;
  }
}
