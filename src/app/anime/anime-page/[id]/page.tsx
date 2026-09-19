import { Poster } from "@/app/anime/anime-page/[id]/components/Poster";
import { AnimesService } from "@/services/AnimeService";
import { HeroBannerVM } from "@/app/anime/anime-page/[id]/components/HeroBanner";
import { AnimePageLayout } from "@/app/anime/anime-page/[id]/Layout";
import { ActionButtons } from "@/app/anime/anime-page/[id]/components/ActionButtons";
import { ScreenShots } from "./components/ScreenShots";
import { VideoPlayer } from "./components/VideoPlayer";
import { Metadata } from "next";

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
          <ActionButtons item={item} />
          <ScreenShots screensUrls={item.screenshots} />
          <VideoPlayer embedUrl={item.playerUrl} title={item.title} />
        </AnimePageLayout.Content>
      </AnimePageLayout.LayoutWrapper>
      <div style={{ paddingTop: 32 }} />
    </AnimePageLayout>
  );
}
