import { PageLayout } from "./components/Layout/ui/Layout";
import { Metadata } from "next";
import { AnimesService } from "@services/AnimeService";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { Show } from "@shared/ui/Show";
import { BackFall } from "./components/BackFall";
import { getLang } from "@shared/utils/getLang";
import { Skeleton } from "./components/Skeleton";

export const metadata: Metadata = {
  title: "Избранное",
  description:
    "Страница избранного аниме на сайте AniFirst. Favorite page of anime on web site AniFirst.",
};

export default async function MyListPage() {
  let pageCount: number = 1;
  const items = await AnimesService.getNewReleases(pageCount);
  const lang = getLang();

  const ruDesc = "Новые упизоды каждый день";
  const enDesc = "Fresh episodes updated today";

  const cursorHandle = async () => {
    pageCount++;
    await AnimesService.getNewReleases(pageCount);
  };

  return (
    <PageLayout>
      {items ? (
        <>
          <Show when={!!items.length}>
            <AnimeCardsBlock
              title={
                lang === "ru"
                  ? "Новое"
                  : lang === "en"
                    ? "New Releases"
                    : "New Releases"
              }
              titleId="my-list"
              description={
                lang === "ru" ? ruDesc : lang === "en" ? enDesc : enDesc
              }
              items={items}
              direction="rows"
            />
          </Show>
          <Show when={!items.length}>
            <BackFall />
          </Show>
        </>
      ) : (
        <Skeleton />
      )}
    </PageLayout>
  );
}
