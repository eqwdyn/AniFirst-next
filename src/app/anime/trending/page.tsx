import { PageLayout } from "./components/Layout/ui/Layout";
import { AnimesService } from "@services/AnimeService";
import { getLang } from "@shared/utils/getLang";
import { TrendingClient } from "./components/TrendingClient";

export default async function TrendingPage() {
  const initialItems = await AnimesService.getTrending(1);
  const lang = getLang();

  return (
    <PageLayout>
      <TrendingClient initialItems={initialItems} lang={lang} />
    </PageLayout>
  );
}
