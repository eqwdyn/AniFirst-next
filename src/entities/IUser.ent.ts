export interface IUser {
  id: number;

  login: string;

  favorite: number[] | null;
  lastViewed: number[] | null;
}
