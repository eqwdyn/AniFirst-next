import { Poster } from "@/app/anime/anime-page/[id]/widgets/Poster";
import { AnimesService } from "@/services/AnimeService";
import { HeroBannerVM } from "@/app/anime/anime-page/[id]/widgets/HeroBanner";
import { AnimePageLayout } from "@/app/anime/anime-page/[id]/Layout";
import { ActionButtons } from "@/app/anime/anime-page/[id]/widgets/ActionButtons";
import { ScreenShots } from "./widgets/ScreenShots";
import { UserEpisodesControll } from "./widgets/UserEpisodesControll";

export default async function Anime({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await AnimesService.getById(Number(id));
  const bgImageSrc = "/HeroBg.png";
  const screensUrls = [
    "/HeroBg.png",
    "/hell-mode-v2.png",
    "/hell-mode.png",
    "https://i.kodikres.com/screenshots/seria/141119/1.jpg",
  ];
  const startEp = 1;

  if (!item) {
    return <p>Not item</p>;
  }

  return (
    <AnimePageLayout>
      <AnimePageLayout.BgImage src={bgImageSrc} />

      <AnimePageLayout.LayoutWrapper>
        <AnimePageLayout.Aside>
          <Poster imageSrc={item.imgSrc} />
        </AnimePageLayout.Aside>

        <AnimePageLayout.Content>
          <HeroBannerVM item={item} />
          <ActionButtons />
          <UserEpisodesControll startEp={startEp} />
          <ScreenShots screensUrls={screensUrls} />
        </AnimePageLayout.Content>
      </AnimePageLayout.LayoutWrapper>
      <div style={{ paddingTop: 32 }} />
    </AnimePageLayout>
  );
}
