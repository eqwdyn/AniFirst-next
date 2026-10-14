import { AnimesService } from "@services/AnimeService";
import { GenresBlock } from "@widgets/GenresBlock";

export const PopularGenresRow = async () => {
  const initItems = await AnimesService.getGenres();
  if (!initItems) {
    return <></>;
  }

  const keys = Object.keys(initItems).slice(0, 6);
  const items = keys.reduce(
    (acc, key) => {
      acc[key] = initItems[key];
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <GenresBlock
      title="Популярные жанры"
      titleId="popular-genres"
      description="Ваши любимые жанры аниме"
      urlToAll="/anime/genres"
      items={items}
    />
  );
};
