export interface IAnime {
  shikimori_id: string;
  kodik_id?: string;
  title: string;
  descrition?: string;
  year?: string;
  tags?: string[];
  posterUrl: string;
  totalEpisodes?: number;
  lastEpisode?: number;
}
