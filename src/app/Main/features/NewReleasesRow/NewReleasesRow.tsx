import { AnimesService } from "@services/AnimeService";
import { AnimeCardsBlock } from "../../../../widgets/AnimeCardsBlock";

export const NewReleasesRow = async () => {
  const items = await AnimesService.getNewReleases();

  if (!items) return <>Not Items</>;

  return (
    <AnimeCardsBlock
      title="New Releases"
      titleId="new-releases-animes"
      description="Fresh episodes updated today"
      urlToAll="/anime/new-releases"
      items={items}
    />
  );
};
