import { IAnime } from "@/entities/Anime.ent";
import { ApiService } from "@/services/ApiService";
import { IShikimoriAnime } from "@entities/FromServer/ShikimoriAnime.ent";
import { IAnimeFull } from "@entities/AnimeFull";

interface IDPApi {
  getAnimeById: (id: string) => Promise<IAnimeFull | undefined>;
  getNewReleases: (limit: number) => Promise<IShikimoriAnime[] | undefined>;
  getTrending: (limit: number) => Promise<IShikimoriAnime[] | undefined>;
}

class AnimesServiceC {
  constructor(private readonly apiService: IDPApi) {}

  async getById(id: string): Promise<IAnimeFull | undefined> {
    try {
      const anime = await this.apiService.getAnimeById(id);
      if (!anime) {
        return undefined;
      }

      return anime;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }

  async getNewReleases(): Promise<IAnime[] | undefined> {
    try {
      const responsedAnimes = await this.apiService.getNewReleases(1);

      const animes = this.parseAnimes(responsedAnimes);
      return animes;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }

  async getTrending(): Promise<IAnime[] | undefined> {
    try {
      const responsedAnimes = await this.apiService.getTrending(1);

      const animes = this.parseAnimes(responsedAnimes);
      return animes;
    } catch (e: any) {
      console.error("Error while get Anime Trends: ", e.message);
    }
  }

  private parseAnimes(animes: IShikimoriAnime[] | undefined): IAnime[] {
    if (!animes) return [];

    const parsedAnimes: IAnime[] = [];
    for (const anime of animes) {
      const parsedAnime: IAnime = {
        ...anime,
        posterUrl: anime.poster,
      };
      parsedAnimes.push(parsedAnime);
    }
    return parsedAnimes;
  }
}

export const AnimesService = new AnimesServiceC(new ApiService());
