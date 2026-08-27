import { MockAnimes } from "@/stores/MockAnimes.store";
import { AnimeBlock } from "@/widgets/AnimeBlock";

export const ContinueWatchingRow = () => {
  return (
    <AnimeBlock
      title="Continue Watching"
      titleId="continue-watching-animes"
      description="Pick up right where you left off"
      items={MockAnimes}
    />
  );
};
