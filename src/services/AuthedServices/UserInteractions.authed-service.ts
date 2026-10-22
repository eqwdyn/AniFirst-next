import { AxiosInstance } from "axios";
import { IAnimeFull } from "../../entities/AnimeFull";
import { authedApi } from "../../shared/api/AuthedApi";

const USER_INTERACTIONS = "/user-interactions" as const;
const FAVORITE = `${USER_INTERACTIONS}/favorite` as const;
const LAST_VIEWED = `${USER_INTERACTIONS}/last-viewed` as const;

export class UserInteractionsAuthedServiceC {
  constructor(private readonly api: AxiosInstance) {}

  // --- Избранное ---

  async getFavorite(): Promise<IAnimeFull[]> {
    const { data } = await this.api.get<IAnimeFull[]>(FAVORITE);
    return data;
  }

  async addToFavorite(shikimoriId: string): Promise<void> {
    await this.api.post(`${FAVORITE}/${shikimoriId}`);
  }

  async deleteFromFavorite(shikimoriId: string): Promise<void> {
    await this.api.delete(`${FAVORITE}/${shikimoriId}`);
  }

  // --- Недавно просмотренные ---

  async getLastViewed(): Promise<IAnimeFull[]> {
    const { data } = await this.api.get<IAnimeFull[]>(LAST_VIEWED);
    return data;
  }

  async addToLastViewed(shikimoriId: string): Promise<void> {
    await this.api.post(`${LAST_VIEWED}/${shikimoriId}`);
  }

  async deleteFromLastViewed(shikimoriId: string): Promise<void> {
    await this.api.delete(`${LAST_VIEWED}/${shikimoriId}`);
  }
}

export const UserInteractionsAuthedService = new UserInteractionsAuthedServiceC(
  authedApi,
);
