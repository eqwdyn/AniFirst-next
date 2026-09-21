import { Poster } from "@/app/anime/anime-page/[id]/components/Poster";
import { AnimesService } from "@/services/AnimeService";
import { HeroBannerVM } from "@/app/anime/anime-page/[id]/components/HeroBanner";
import { AnimePageLayout } from "@/app/anime/anime-page/[id]/components/Layout";
import { ScreenShots } from "./components/ScreenShots";
import { VideoPlayer } from "./components/VideoPlayer";
import { Metadata } from "next";
import { ClientLogic } from "./components/ClientLogic";
import { MyListButton } from "@features/MyListButton";
import { AnimeCardsBlock } from "@widgets/AnimeCardsBlock";
import { getLang } from "@shared/utils/getLang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await AnimesService.getById(id);

  return {
    title: item?.title ?? "AniFirst",
  } as Metadata;
}

export default async function Anime({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await AnimesService.getById(id);
  const lang = getLang();

  if (!item) {
    return <p>Not item</p>;
  }

  return (
    <AnimePageLayout>
      <AnimePageLayout.LayoutWrapper>
        <AnimePageLayout.Aside>
          <Poster imageSrc={item.posterUrl} />
        </AnimePageLayout.Aside>

        <AnimePageLayout.Content>
          <HeroBannerVM
            tags={item.tags}
            title={item.title}
            description={item.description}
            rating={item.rating}
            episodes={item.episodes}
            status={
              item.status === "released"
                ? "Done"
                : item.status === "anons"
                  ? "Airing"
                  : "Airing"
            }
            studio={item.studio}
          />
          <AnimePageLayout.ButtonContainer>
            <MyListButton item={item} />
          </AnimePageLayout.ButtonContainer>
          <AnimeCardsBlock
            title={
              lang === "ru"
                ? "Связанное"
                : lang === "en"
                  ? "Related"
                  : "Related"
            }
            description={
              lang === "ru"
                ? "Аниме дополняющие или продолжающие историю"
                : lang === "en"
                  ? "Anime that complement or continue the story"
                  : "Anime that complement or continue the story"
            }
            titleId="related"
            items={item.related}
            cardWidth={120}
            titleGap={5}
          />
          <ScreenShots screensUrls={item.screenshots} />
          <VideoPlayer embedUrl={item.playerUrl} title={item.title} />
        </AnimePageLayout.Content>
      </AnimePageLayout.LayoutWrapper>
      <ClientLogic item={item} />
    </AnimePageLayout>
  );
}
