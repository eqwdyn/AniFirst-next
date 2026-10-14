import { AnimesService } from "@services/AnimeService";
import { GenresBlock } from "@widgets/GenresBlock";
import { FallBack } from "./components/FallBack";
import { PageLayout } from "./components/Layout";

export default async function Page() {
  const items = await AnimesService.getGenres();
  if (!items) {
    return (
      <PageLayout>
        <FallBack />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <GenresBlock
        title="Жанры аниме"
        titleId="anime-genres"
        description="Все доступные жанры аниме"
        items={items}
      />
    </PageLayout>
  );
}
