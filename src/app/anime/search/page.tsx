import { AnimesService } from "../../../services/PublicServices/AnimeService";
import { SearchPageLayout } from "./components/Layout/";
import { SearchClient } from "./components/SearchClient";

export default async function Search() {
  const items = await AnimesService.getTrending();

  return (
    <SearchPageLayout>
      <SearchClient initItems={items} />
    </SearchPageLayout>
  );
}
