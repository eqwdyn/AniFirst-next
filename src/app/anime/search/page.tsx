import { AnimesService } from "../../../services/AnimeService";
import { SearchPageLayout } from "./components/Layout/ui/Layout";
import { SearchClient } from "./components/SearchClient";

export default async function Search() {
  const items = await AnimesService.getTrending();

  return (
    <SearchPageLayout>
      <SearchClient initItems={items} />
    </SearchPageLayout>
  );
}
