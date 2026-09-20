import { AxiosInstance } from "axios";
import { IShikimoriAnime } from "@entities/FromServer/ShikimoriAnime.ent";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { IAnime } from "@entities/Anime.ent";
import { IAnimeKodik } from "@entities/FromServer/AnimeKodik.ent";

const getTrendingPath = "/trending";
const getTrendingKodikPath = "/trending-kodik";
const getHeroAnimePath = "/hero-anime";
const getNewReleasesPath = "/new-releases";
const getAnimeByIdPath = "/anime";
const searchAnimesKodikPath = "/search-kodik";
const searchAnimesShikimoriPath = "/search-kodik";

export class ApiService {
  constructor(private readonly api: AxiosInstance) {}
  async getAnimeById(id: number | string): Promise<IAnimeKodik | undefined> {
    const { data: animes } = await this.api.get<IAnimeKodik>(
      `${getAnimeByIdPath}/${id}`,
    );

    return animes;
  }
  async getNewReleases(
    limit: number,
    page: number,
  ): Promise<IShikimoriAnime[] | undefined> {
    const { data: animes } = await this.api.get<IShikimoriAnime[]>(
      `${getNewReleasesPath}`,
      {
        params: {
          limit,
          page,
        },
      },
    );

    return animes;
  }
  async getTrending(
    limit: number,
    page: number,
  ): Promise<IShikimoriAnime[] | undefined> {
    const { data: animes } = await this.api.get<IShikimoriAnime[]>(
      getTrendingPath,
      {
        params: {
          limit,
          page,
        },
      },
    );

    return animes;
  }
  async getTrendingKodik(limit: number): Promise<IAnimeKodik[] | undefined> {
    const { data: animes } = await this.api.get<IAnimeKodik[]>(
      `${getTrendingKodikPath}?limit=${limit}`,
    );

    return animes;
  }
  async getHeroAnime(): Promise<IAnime | undefined> {
    const { data: animes } = await this.api.get<IAnime>(getHeroAnimePath);

    return animes;
  }
  async searchAnimes(title: string): Promise<IAnimeSearch[]> {
    const { data: animes } = await this.api.get<any>(
      `${searchAnimesKodikPath}/${title}`,
    );

    return animes;
  }
  async searchAnimesShikimori(title: string): Promise<IAnimeSearch[]> {
    const { data: animes } = await this.api.get<any>(
      `${searchAnimesShikimoriPath}/${title}`,
    );

    return animes;
  }
}
