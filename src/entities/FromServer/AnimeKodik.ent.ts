export interface KodikTranslation {
  id: number;
  title: string;
  type: string;
}

export interface KodikAnime {
  id: string;
  type: string;
  link: string;
  title: string;
  title_orig: string;
  other_title: string;
  translation: KodikTranslation;
  year: number;
  last_season: number;
  last_episode: number;
  episodes_count: number;
  kinopoisk_id: string;
  imdb_id: string;
  worldart_link: string;
  shikimori_id: string;
  quality: string;
  camrip: boolean;
  lgbt: boolean;
  blocked_countries: string[];
  blocked_seasons: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  screenshots: string[];
}
