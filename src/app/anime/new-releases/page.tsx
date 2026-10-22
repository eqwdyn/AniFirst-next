import { PageLayout } from "./components/Layout/ui/Layout";
import { AnimesService } from "@/services/PublicServices/AnimeService";
import { getLang } from "@shared/utils/getLang";
import { NewReleasesClient } from "./components/NewReleasesClient";

export default async function MyListPage() {
  const initialItems = await AnimesService.getNewReleases(1);
  const lang = getLang();

  return (
    <PageLayout>
      <NewReleasesClient initialItems={initialItems} lang={lang} />
    </PageLayout>
  );
}
