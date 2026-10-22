import { IAnime } from "@/entities/Anime.ent";
import { IAnimeFull } from "@entities/AnimeFull";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import axios, { AxiosInstance } from "axios";

const api = axios.create({
  baseURL: process.env.SERVER_URL,
});

const getTrendingPath = "/trending";
const getHeroAnimePath = "/hero-anime";
const getNewReleasesPath = "/new-releases";
const getAnimeByIdPath = "/anime";
const searchAnimesShikimoriPath = "/search-shikimori";
const getGenresPath = "/genres";

export class AnimesServiceC {
  constructor(private readonly api: AxiosInstance) {}

  async getById(id: string): Promise<IAnimeFull | undefined> {
    try {
      const { data: anime } = await this.api.get<IAnimeFull>(
        `${getAnimeByIdPath}/${id}`,
      );
      if (!anime) {
        return undefined;
      }

      return anime;
    } catch (e: any) {
      console.error("Error while get Anime by Id: ", e.message);
    }
  }

  async getNewReleases(page: number = 1): Promise<IAnime[] | undefined> {
    try {
      //   const animes = await this.apiService.getNewReleases(1, page);
      const { data: animes } = await this.api.get<IAnime[]>(
        getNewReleasesPath,
        {
          params: {
            limit: 1,
            page,
          },
        },
      );

      return animes;
    } catch (e: any) {
      console.error("Error while get Anime new releases: ", e.message);
    }
  }
  async getTrending(page: number = 1): Promise<IAnime[] | undefined> {
    try {
      const { data: animes } = await this.api.get<IAnime[]>(getTrendingPath, {
        params: {
          limit: 1,
          page,
        },
      });

      return animes;
    } catch (e: any) {
      console.error("Error while get Anime Trends: ", e.message);
    }
  }

  async getHeroAnime(): Promise<IAnime | undefined> {
    try {
      const { data: anime } = await this.api.get<IAnime>(getHeroAnimePath);

      return anime;
    } catch (e: any) {
      console.error("Error while get hero Anime: ", e.message);
    }
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
  ): Promise<IAnimeSearch[] | undefined> {
    try {
      const { data: animes } = await this.api.get<IAnimeSearch[]>(
        `${searchAnimesShikimoriPath}/${title}`,
        {
          params: {
            status: statusFilter ?? null,
            type: typeFilter ?? null,
          },
        },
      );

      return animes;
    } catch (e: any) {
      console.error("Error while searching Animes: ", e.message);
    }
  }

  async getGenres(): Promise<Record<string, string> | undefined> {
    try {
      const { data: genres } =
        await this.api.get<Record<string, string>>(getGenresPath);

      return genres;
    } catch (e: any) {
      console.error("Error while getting Genres: ", e.message);
    }
  }
  async getAnimesByGenre(
    genre: string,
    page = 1,
  ): Promise<IAnime[] | undefined> {
    try {
      const { data: genres } = await this.api.get<IAnimeSearch[]>(
        `${getGenresPath}/${genre}`,
        { params: { page } },
      );

      return genres;
    } catch (e: any) {
      console.error("Error while getting Animes by Genres: ", e.message);
    }
  }
}

export const AnimesService = new AnimesServiceC(api);
