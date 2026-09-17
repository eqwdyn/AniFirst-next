import { AnimesService } from "@services/AnimeService";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { getLang } from "@shared/utils/getLang";

export const NewReleasesRow = async () => {
  const items = await AnimesService.getNewReleases();

  if (!items) return <>Not Items</>;

  const lang = getLang();
  return (
    <AnimeCardsBlock
      title={lang === "ru" ? "Новое" : "New Releases"}
      titleId="new-releases-animes"
      description={
        lang === "ru"
          ? "Новые упизоды каждый день"
          : "Fresh episodes updated today"
      }
      urlToAll="/anime/new-releases"
      items={items}
    />
  );
};
