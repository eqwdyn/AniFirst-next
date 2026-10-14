import { IAnime } from "@/entities/Anime.ent";
import { ApiService } from "@/services/ApiService";
import { IAnimeFull } from "@entities/AnimeFull";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import axios from "axios";
import { IAnimeGenre } from "../entities/AnimeGenre.ent";

const api = axios.create({
  baseURL: process.env.SERVER_URL,
});

export class AnimesServiceC {
  constructor(private readonly apiService: ApiService) {}

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

  async getNewReleases(page: number = 1): Promise<IAnime[] | undefined> {
    try {
      const animes = await this.apiService.getNewReleases(1, page);

      return animes;
    } catch (e) {
      console.error("Error while get Anime by Id: ", e);
    }
  }
  async getTrending(page: number = 1): Promise<IAnime[] | undefined> {
    try {
      const animes = await this.apiService.getTrending(1, page);

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
      const responsedAnimes = await this.apiService.searchAnimes(
        title,
        statusFilter,
        typeFilter,
      );

      return responsedAnimes;
    } catch (e: any) {
      console.error("Error while searching Animes: ", e.message);
    }
  }

  async getGenres(): Promise<Record<string, string> | undefined> {
    try {
      const genres = await this.apiService.getGenres();

      return genres;
    } catch (e) {
      console.error("Error while getting Genres: ", e);
    }
  }
  async getAnimesByGenre(
    genre: string,
    page = 1,
  ): Promise<IAnime[] | undefined> {
    try {
      const genres = await this.apiService.getAnimesByGenre(genre, page);

      return genres;
    } catch (e) {
      console.error("Error while getting Animes by Genres: ", e);
    }
  }
}

export const AnimesService = new AnimesServiceC(new ApiService(api));
