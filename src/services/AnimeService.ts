import { IAnime } from "@/entities/Anime.ent";
import { ApiService } from "@/services/ApiService";
import { IShikimoriAnime } from "@entities/FromServer/ShikimoriAnime.ent";
import { IAnimeFull } from "@entities/AnimeFull";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";

interface IDPApi {
  getAnimeById: (id: string) => Promise<IAnimeFull | undefined>;
  getNewReleases: (limit: number) => Promise<IShikimoriAnime[] | undefined>;
  getTrending: (limit: number) => Promise<IShikimoriAnime[] | undefined>;
  getHeroAnime: () => Promise<IAnime | undefined>;
  searchAnimes: (title: string) => Promise<IAnimeSearch[]>;
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

  async getHeroAnime(): Promise<IAnime | undefined> {
    try {
      const responsedAnime = await this.apiService.getHeroAnime();
      if (!responsedAnime) {
        return undefined;
      }

      return responsedAnime;
    } catch (e: any) {
      console.error("Error while get hero Anime: ", e.message);
    }
  }

  async searchAnimes(title: string): Promise<IAnimeSearch[] | undefined> {
    try {
      const responsedAnimes = await this.apiService.searchAnimes(title);

      return responsedAnimes;
    } catch (e: any) {
      console.error("Error while searching Animes: ", e.message);
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
