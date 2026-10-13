import { AnimesService } from "@services/AnimeService";
import { GenresBlock } from "@widgets/GenresBlock";

export const PopularGenresRow = async () => {
  const initItems = await AnimesService.getGenres();
  if (!initItems) {
    return <></>;
  }
  //   const items = initItems;

  return (
    <GenresBlock
      title="Популярные жанры"
      titleId="popular-genres"
      description="Ваши любимые жанры аниме"
      urlToAll="/anime/genres"
      items={initItems}
    />
  );
};
