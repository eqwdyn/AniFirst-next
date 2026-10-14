import { AxiosInstance } from "axios";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { IAnime } from "@entities/Anime.ent";
import { IAnimeFull } from "@entities/AnimeFull";

const getTrendingPath = "/trending";
const getHeroAnimePath = "/hero-anime";
const getNewReleasesPath = "/new-releases";
const getAnimeByIdPath = "/anime";
const searchAnimesShikimoriPath = "/search-shikimori";
const getGenresPath = "/genres";

export class ApiService {
  constructor(private readonly api: AxiosInstance) {}
  async getAnimeById(id: number | string): Promise<IAnimeFull | undefined> {
    const { data: animes } = await this.api.get<IAnimeFull>(
      `${getAnimeByIdPath}/${id}`,
    );

    return animes;
  }
  async getNewReleases(
    limit: number,
    page: number,
  ): Promise<IAnime[] | undefined> {
    const { data: animes } = await this.api.get<IAnime[]>(getNewReleasesPath, {
      params: {
        limit,
        page,
      },
    });

    return animes;
  }
  async getTrending(
    limit: number,
    page: number,
  ): Promise<IAnime[] | undefined> {
    const { data: animes } = await this.api.get<IAnime[]>(getTrendingPath, {
      params: {
        limit,
        page,
      },
    });

    return animes;
  }
  async getHeroAnime(): Promise<IAnime | undefined> {
    const { data: animes } = await this.api.get<IAnime>(getHeroAnimePath);

    return animes;
  }

  async searchAnimes(
    title: string,
    statusFilter?: "ongoing" | "anons" | "released" | "latest",
    typeFilter?:
      | "tv"
      | "tv_13"
      | "tv_24"
      | "tv_48"
      | "movie"
      | "ova"
      | "ona"
      | "special"
      | "tv_special"
      | "music"
      | "pv"
      | "cm",
  ): Promise<IAnimeSearch[]> {
    const { data: animes } = await this.api.get<any>(
      `${searchAnimesShikimoriPath}/${title}`,
      {
        params: {
          status: statusFilter ?? null,
          type: typeFilter ?? null,
        },
      },
    );

    return animes;
  }

  async getGenres() {
    const { data: genres } =
      await this.api.get<Record<string, string>>(getGenresPath);

    return genres;
  }
  async getAnimesByGenre(genre: string, page = 1): Promise<IAnime[]> {
    const { data: genres } = await this.api.get<IAnimeSearch[]>(
      `${getGenresPath}/${genre}`,
      { params: { page } },
    );

    return genres;
  }
}
