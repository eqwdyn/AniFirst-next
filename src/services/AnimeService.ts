import { IAnime } from "@/entities/Anime.ent";
import { ApiService } from "@/services/ApiService";

interface IDPApi {
  getAnimeById: (id: number) => Promise<IAnime | undefined>;
  getNewReleases: () => Promise<IAnime[] | undefined>;
  getTrending: () => Promise<IAnime[] | undefined>;
}

class AnimesServiceC {
  constructor(private readonly apiService: IDPApi) {}

  async getById(id: number): Promise<IAnime | undefined> {
    try {
      const anime = await this.apiService.getAnimeById(id);
      return anime;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }

  async getNewReleases(): Promise<IAnime[] | undefined> {
    try {
      const anime = await this.apiService.getNewReleases();
      return anime;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }

  async getTrending(): Promise<IAnime[] | undefined> {
    try {
      const anime = await this.apiService.getTrending();
      return anime;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }
}

export const AnimesService = new AnimesServiceC(new ApiService());
