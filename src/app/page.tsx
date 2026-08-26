import { ContinueWatchingRow } from "@/app/Main/features/ContinueWatchingRow";
import { HeroBanner } from "@/app/Main/features/HeroBanner";
import { NewReleasesRow } from "@/app/Main/features/NewReleasesRow";
import { PopularGenresRow } from "@/app/Main/features/PopularGenresRow";
import { TrendingAnimesRow } from "@/app/Main/features/TrendingAnimesRow";
import { MainPageContentWrapper } from "@/app/Main/MainPageContentWrapper";
import { PageWrapper } from "@/shared/ui/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <HeroBanner />
      <MainPageContentWrapper>
        <TrendingAnimesRow />
        <ContinueWatchingRow />
        <NewReleasesRow />
        <PopularGenresRow />
      </MainPageContentWrapper>
    </PageWrapper>
  );
}
