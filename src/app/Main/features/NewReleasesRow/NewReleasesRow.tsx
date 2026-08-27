import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";

export const NewReleasesRow = () => {
  return (
    <AnimeBlock
      title="New Releases"
      titleId="new-releases-animes"
      description="Fresh episodes updated today"
      items={MockAnimes}
    />
  );
};
