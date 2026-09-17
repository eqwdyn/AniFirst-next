import axios from "axios";
import { IShikimoriAnime } from "@entities/FromServer/ShikimoriAnime.ent";
import { IAnimeFull } from "@entities/AnimeFull";
import { IAnimeSearch } from "@entities/AnimeSearch.ent";
import { IAnime } from "@entities/Anime.ent";

const api = axios.create({
  baseURL: process.env.SERVER_URL,
});
const getTrendingPath = "/trending";
const getHeroAnimePath = "/hero-anime";
const getNewReleasesPath = "/new-releases";
const getAnimeByIdPath = "/anime";
const searchAnimesPath = "/search";

export class ApiService {
  async getAnimeById(id: number | string): Promise<IAnimeFull | undefined> {
    const { data: animes } = await api.get<IAnimeFull>(
      `${getAnimeByIdPath}/${id}`,
    );

    return animes;
  }
  async getNewReleases(limit: number): Promise<IShikimoriAnime[] | undefined> {
    const { data: animes } = await api.get<IShikimoriAnime[]>(
      `${getNewReleasesPath}?limit=${limit}`,
    );

    return animes;
  }
  async getTrending(limit: number): Promise<IShikimoriAnime[] | undefined> {
    const { data: animes } = await api.get<IShikimoriAnime[]>(
      `${getTrendingPath}?limit=${limit}`,
    );

    return animes;
  }
  async getHeroAnime(): Promise<IAnime | undefined> {
    const { data: animes } = await api.get<IAnime>(getHeroAnimePath);

    return animes;
  }
  async searchAnimes(title: string): Promise<IAnimeSearch[]> {
    const { data: animes } = await api.get<any>(`${searchAnimesPath}/${title}`);

    return animes;
  }
}
